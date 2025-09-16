import { authClient } from "~/lib/auth";
import { useAuthStore } from "~/stores/auth.store";

export default function useLogout() {
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
          window.location.href = "/";
        }
      }
    });
  };

  return { logout };
}
