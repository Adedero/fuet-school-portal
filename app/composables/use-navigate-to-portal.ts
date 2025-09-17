import { useAuthStore } from "~/stores/auth.store";

export default function navigateToPortal() {
  const authStore = useAuthStore();

  const roleRoutes: Record<string, string> = {
    applicant: "/application/portal",
    student: "/portal/student",
    admin: "/portal/admin",
    staff: "/portal/staff"
  };

  const user = authStore.user.value;

  function execute() {
    if (!authStore.isLoggedIn() || !user?.role) {
      navigateTo("/login");
      return;
    }
    const path = roleRoutes[user.role];
    if (path) {
      navigateTo(path);
    }
  }

  return execute;
}
