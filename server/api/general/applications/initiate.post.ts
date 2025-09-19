import { db } from "~~/server/database/connection";
import { application } from "~~/server/database/schema";
import { auth } from "~~/server/lib/auth";
import generateApplicationNumber from "~~/server/utils/generate-application-number";
import { applicationInitiationSchema } from "~~/shared/schemas/application-initiation.schema";

export default defineEventHandler(async (event) => {
  const body = await readValidatedBody(
    event,
    applicationInitiationSchema.safeParse
  );

  if (!body.success) {
    throw createError({
      statusCode: 400,
      statusMessage: body.error.issues[0].message
    });
  }

  // Check if applications are open
  const settings = await db.query.settings.findFirst({
    columns: {
      applicationsOpen: true
    }
  });

  if (!settings || !settings.applicationsOpen) {
    throw createError({
      statusCode: 403,
      statusMessage: "Applications are not open at this time."
    });
  }

  let userId: string = "";

  const [existingUser, currentSchoolSession] = await Promise.all([
    db.query.user.findFirst({
      where: (user, { eq }) => eq(user.email, body.data.email),
      columns: {
        id: true,
        email: true
      }
    }),

    db.query.schoolSession.findFirst({
      where: (session, { eq }) => eq(session.isCurrent, true),
      columns: {
        id: true,
        name: true
      }
    })
  ]);

  if (!currentSchoolSession) {
    throw createError({
      statusCode: 500,
      statusMessage:
        "Something happened and we are working to fix it. Try again later."
    });
  }

  if (existingUser) {
    userId = existingUser.id;

    // Check if the user has an application for the session already
    const existingApplication = await db.query.application.findFirst({
      where: (app, { eq, and }) => {
        return and(
          eq(app.schoolSessionName, currentSchoolSession.name),
          eq(app.userId, existingUser.id)
        );
      }
    });

    if (existingApplication) {
      throw createError({
        statusCode: 400,
        statusText: `You already have an application for the ${currentSchoolSession.name} academic session.`,
      });
    }
  }

  if (!existingUser) {
    const { user } = await auth.api.signUpEmail({
      body: {
        name: `${body.data.firstName} ${body.data.middleName} ${body.data.otherNames} ${body.data.lastName}`,
        email: body.data.email,
        password: body.data.password!,
        role: "applicant"
      }
    });

    userId = user.id;
  }

  // Get application number from the last application
  const mostRecentApplication = await db.query.application.findFirst({
    columns: {
      applicationNumber: true
    },
    orderBy(application, { desc }) {
      return [desc(application.id)];
    }
  });

  const applicationNumber = generateApplicationNumber(
    mostRecentApplication?.applicationNumber ?? null
  );

  await db.insert(application).values({
    userId: userId,
    applicationNumber,
    schoolSessionName: currentSchoolSession.name,
    schoolSessionId: currentSchoolSession.id,
    status: "pending",
    firstName: body.data.firstName,
    middleName: body.data.middleName,
    otherNames: body.data.otherNames,
    lastName: body.data.lastName,
    birthDay: body.data.birthDay,
    birthMonth: body.data.birthMonth,
    birthYear: body.data.birthYear,
    createdAt: new Date()
  });

  return {
    success: true,
    message: "Application initiated successfully."
  };
});
