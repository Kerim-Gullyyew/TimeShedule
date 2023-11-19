import { LoginActionType } from "../action-types";

interface LoginAction {
  type: LoginActionType.LOGIN;
}
interface LoginSuccessAction {
  type: LoginActionType.LOGIN_SUCCESS;
  payload: {};
}

interface LoginErrorAction {
  type: LoginActionType.LOGIN_ERROR;
  payload: string;
}

interface LogoutAction {
  type: LoginActionType.LOGOUT;
}

export type LoginActionAll = LoginAction | LoginSuccessAction | LoginErrorAction | LogoutAction;
