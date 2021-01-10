import { combineReducers } from "redux";

import { counterReducer } from "./counterReducer";
import { loggedReducer } from "./loggedReducer";

export const allReducers = combineReducers({
  counter: counterReducer,
  logged: loggedReducer,
});
