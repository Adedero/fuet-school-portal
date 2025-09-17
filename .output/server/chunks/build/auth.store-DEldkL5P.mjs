import { R as useState } from './server.mjs';

const useAuthStore = () => {
  const user = useState("auth-user", () => null);
  const session = useState(
    "auth-session",
    () => null
  );
  const isLoggedIn = function() {
    return user.value !== null && session.value !== null;
  };
  const setUser = (value) => {
    user.value = value;
  };
  const setSession = (value) => {
    session.value = value;
  };
  return {
    user,
    setUser,
    session,
    setSession,
    isLoggedIn
  };
};

export { useAuthStore as u };
//# sourceMappingURL=auth.store-DEldkL5P.mjs.map
