import { v as useConfirm, i as authClient } from './server.mjs';
import { u as useAuthStore } from './auth.store-D2X7Djdw.mjs';

function useLogout() {
  const { confirmAsync } = useConfirm();
  const authStore = useAuthStore();
  const logout = async () => {
    const confirm = await confirmAsync({
      title: "Log Out",
      description: "Are you sure you want to proceed?",
      acceptProps: {
        label: "Proceed"
      },
      rejectProps: {
        label: "Cancel",
        color: "neutral",
        variant: "soft"
      }
    });
    if (!confirm) return;
    await authClient.signOut({
      fetchOptions: {
        onSuccess: async () => {
          await authClient.revokeSessions();
          authStore.setSession(null);
          authStore.setUser(null);
          (void 0).location.href = "/";
        }
      }
    });
  };
  return { logout };
}

export { useLogout as u };
//# sourceMappingURL=use-logout-Dvt5zoeI.mjs.map
