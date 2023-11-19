import { LoginActionType } from "../action-types";
import { LoginActionAll } from "../actions/LoginAction";

interface LoginState {
  loading: boolean,
  error: string | null,
  data: {},
}

const initialState = {
  loading: false,
  error: null,
  data: {},
};

const LoginReducer = (state: LoginState = initialState, action: LoginActionAll): LoginState => {
  switch (action.type) {
    case LoginActionType.LOGIN:
      return {
        loading: true, error: null, data: {}
      };
    case LoginActionType.LOGIN_SUCCESS:
      return {
        loading: false, error: null, data: action.payload
      };
    case LoginActionType.LOGIN_ERROR:
      return {
        loading: false, error: action.payload, data: {}
      };
    case LoginActionType.LOGOUT:
      return {
        loading: false, error: null, data: {}
      };

    default:
      return state;
  }
};

export default LoginReducer;