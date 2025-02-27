import { useSignInMutation } from "@/store/services/auth";
import { LoginParams } from "@/store/services/auth/types";

export const useAuth = () => {
  const [signIn, { data }] = useSignInMutation();

  const login = async (credentials: LoginParams) => {
    try {
      const response = await signIn(credentials);
      console.log("Login successful:", response);
    } catch (err) {
      console.error("Login failed:", err);
    }
  };

  return {
    login,
    loginData: data
  };
};
