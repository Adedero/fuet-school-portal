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
    let expectedRoles: string[] = [];

    if (isApplicantRoute) expectedRoles = ["applicant", "student"];
    if (isStudentRoute) expectedRoles = ["student"];
    if (isStaffRoute) expectedRoles = ["staff"];
    if (isAdminRoute) expectedRoles = ["admin"];

    const { data } = await authClient.getSession();

    if (!data) {
      await navigateTo(`/login?redirect=${fullPath}`);
      return;
    }

    if (!expectedRoles.includes(data.user.role)) {
      await navigateTo("/login");
      return;
    }

    authStore.setSession(data.session);
    authStore.setUser(data.user);
  }
});
