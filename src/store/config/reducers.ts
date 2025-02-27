import { AuthService } from "@/store/services/auth";
import { AuthSlice } from "@/store/slices/auth";
import { combineReducers } from "@reduxjs/toolkit";

const reducers = combineReducers({
  // Services
  [AuthService.reducerPath]: AuthService.reducer,

  // Slices
  [AuthSlice.name]: AuthSlice.reducer
});

export { reducers };

export type RootState = ReturnType<typeof reducers>;
