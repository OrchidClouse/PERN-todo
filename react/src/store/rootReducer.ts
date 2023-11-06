import { combineReducers } from "redux";
import { userReducer } from "./users/usersReducer";
import { authReducer } from "./auth/authReducer";

export const rootReducer = combineReducers({
  users: userReducer,
  auth: authReducer
});