import { u as useAuthStore } from './auth.store-D2X7Djdw.mjs';
import { n as navigateTo } from './server.mjs';

function navigateToPortal() {
  const authStore = useAuthStore();
  const roleRoutes = {
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

export { navigateToPortal as n };
//# sourceMappingURL=use-navigate-to-portal-B5FNbniG.mjs.map
