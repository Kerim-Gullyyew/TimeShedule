import { combineReducers } from "redux";
import LoginReducer from "./LoginReducer";
import ShiftReducer from "./ShiftReducer";
import ConstantReducer from "./ConstantReducers";

const reducers = combineReducers({
  login: LoginReducer,
  shift: ShiftReducer,
  constant: ConstantReducer
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;