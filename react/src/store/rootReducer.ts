import { combineReducers } from "redux";
import { userReducer } from "./users/usersReducer";

export const rootReducer = combineReducers({
  users: userReducer,
});