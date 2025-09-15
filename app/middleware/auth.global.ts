import { authClient } from "~/lib/auth";

const rolePathMap = {
  applicant: "/application",
  student: "/portal/student",
  staff: "/portal/staff",
  admin: "/portal/admin"
};

export default defineNuxtRouteMiddleware(async (to) => {
  if (import.meta.server) return;

  const { fullPath } = to;
  const securedPaths = Object.values(rolePathMap);
  const currentSecuredPath = "";

  // get the exact path
  const { data } = await authClient.getSession();
  data?.user.role// check roles and 
});
