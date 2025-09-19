import { d as defineEventHandler, r as readValidatedBody, c as createError, b as db, a as auth, e as generateApplicationNumber, f as application } from '../../../../nitro/nitro.mjs';
import { a as applicationInitiationSchema } from '../../../../_/application-initiation.schema.mjs';
import 'nanoid';
import 'node:path';
import 'node:fs/promises';
import 'node:crypto';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:url';
import 'better-auth';
import 'better-auth/adapters/drizzle';
import 'drizzle-orm/libsql';
import 'drizzle-orm/sqlite-core';
import 'drizzle-orm';
import 'ulid';
import 'nodemailer';
import '@iconify/utils';
import 'consola';
import 'ipx';
import 'zod';
import '../../../../_/password.schema.mjs';

const initiate_post = defineEventHandler(async (event) => {
  var _a;
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
  let userId = "";
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
      statusMessage: "Something happened and we are working to fix it. Try again later."
    });
  }
  if (existingUser) {
    userId = existingUser.id;
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
        statusMessage: `You already have an application for the ${currentSchoolSession.name} academic session.`
      });
    }
  }
  if (!existingUser) {
    const { user } = await auth.api.signUpEmail({
      body: {
        name: `${body.data.firstName} ${body.data.middleName} ${body.data.otherNames} ${body.data.lastName}`,
        email: body.data.email,
        password: body.data.password,
        role: "applicant"
      }
    });
    userId = user.id;
  }
  const mostRecentApplication = await db.query.application.findFirst({
    columns: {
      applicationNumber: true
    },
    orderBy(application2, { desc }) {
      return [desc(application2.id)];
    }
  });
  const applicationNumber = generateApplicationNumber(
    (_a = mostRecentApplication == null ? void 0 : mostRecentApplication.applicationNumber) != null ? _a : null
  );
  await db.insert(application).values({
    userId,
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
    createdAt: /* @__PURE__ */ new Date()
  });
  return {
    success: true,
    message: "Application initiated successfully."
  };
});

export { initiate_post as default };
//# sourceMappingURL=initiate.post.mjs.map
