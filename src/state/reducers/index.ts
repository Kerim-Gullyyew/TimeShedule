import { combineReducers } from "redux";
import LoginReducer from "./LoginReducer";
import ShiftReducer from "./ShiftReducer";

const reducers = combineReducers({
  login: LoginReducer,
  shift: ShiftReducer
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;