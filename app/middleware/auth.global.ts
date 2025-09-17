import { authClient } from "~/lib/auth";
import { useAuthStore } from "~/stores/auth.store";

export default defineNuxtRouteMiddleware(async (to) => {
  if (import.meta.server) return;

  const authStore = useAuthStore();

  const { fullPath } = to;

  const isApplicantRoute = fullPath.startsWith("/application/portal");
  const isStudentRoute = fullPath.startsWith("/portal/student");
  const isStaffRoute = fullPath.startsWith("/portal/staff");
  const isAdminRoute = fullPath.startsWith("/portal/admin");

  if (isApplicantRoute || isStudentRoute || isStaffRoute || isAdminRoute) {
    let expectedRole: string = "";

    if (isApplicantRoute) expectedRole = "applicant";
    if (isStudentRoute) expectedRole = "student";
    if (isStaffRoute) expectedRole = "staff";
    if (isAdminRoute) expectedRole = "admin";

    const { data } = await authClient.getSession();

    if (!data || data.user.role !== expectedRole) {
      await navigateTo(`/login?redirect=${fullPath}`);
      return;
    }

    authStore.setSession(data.session);
    authStore.setUser(data.user);
  }
});
