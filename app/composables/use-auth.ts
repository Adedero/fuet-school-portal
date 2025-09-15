import { authClient } from "~/lib/auth";

export default function useAuth() {
  const authSession = authClient.useSession();

  const isLoggedIn = computed(() => {
    return authSession.value.data !== null;
  });

  const user = computed(() => {
    return authSession.value.data?.user ?? null;
  });

  const session = computed(() => {
    return authSession.value.data?.session ?? null;
  });

  return {
    isLoggedIn,
    user,
    session
  };
}
