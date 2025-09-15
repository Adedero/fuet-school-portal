import { auth } from "../lib/auth";

export default defineEventHandler(async (event) => {
  const requestUrl = getRequestURL(event);

  const isApplicantRoute = requestUrl.pathname.startsWith(
    "/api/users/applicant"
  );
  const isStudentRoute = requestUrl.pathname.startsWith("/api/users/student");
  const isStaffRoute = requestUrl.pathname.startsWith("/api/users/staff");
  const isAdminRoute = requestUrl.pathname.startsWith("/api/users/admin");

  if (isApplicantRoute || isStudentRoute || isStaffRoute || isAdminRoute) {
    let expectedRole: string = "";

    if (isApplicantRoute) expectedRole = "applicant";
    if (isStudentRoute) expectedRole = "student";
    if (isStaffRoute) expectedRole = "staff";
    if (isAdminRoute) expectedRole = "admin";

    const session = await auth.api.getSession(event);

    if (!session) {
      throw createError({
        statusCode: 401,
        statusMessage: "You must be logged in to access this resource."
      });
    }

    if (session.user.role !== expectedRole) {
      throw createError({
        statusCode: 403,
        statusMessage:
          "Access denied. You are not authorized to access this resource."
      });
    }

    event.context.user = session.user;
  }
});
