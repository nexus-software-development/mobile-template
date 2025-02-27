import { AuthService } from "@/store/services/auth";

export default (getDefaultMiddleware: any) => {
  const middleware = getDefaultMiddleware({
    serializableCheck: false
  }).concat(AuthService.middleware);

  return middleware;
};
