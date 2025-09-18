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
    let expectedRoles: string[] = [];

    if (isApplicantRoute) expectedRoles = ["applicant", "student"];
    if (isStudentRoute) expectedRoles = ["student"];
    if (isStaffRoute) expectedRoles = ["staff"];
    if (isAdminRoute) expectedRoles = ["admin"];

    const session = await auth.api.getSession(event);

    if (!session) {
      throw createError({
        statusCode: 401,
        statusMessage: "You must be logged in to access this resource."
      });
    }

    if (!expectedRoles.includes(session.user.role)) {
      throw createError({
        statusCode: 403,
        statusMessage:
          "Access denied. You are not authorized to access this resource."
      });
    }

    event.context.user = session.user;
  }
});
