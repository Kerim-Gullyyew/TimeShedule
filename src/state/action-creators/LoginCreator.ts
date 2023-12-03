import axios from "axios";
import { Dispatch } from "redux";
import { LoginActionType } from "../action-types";
import { LoginActionAll } from "../actions/LoginAction";
import { backendUrl } from "../../constants/Url";
interface jsonProps {
  identifier: string,
  password: string
}
export const login = (json: jsonProps, backendUrl2: string) => {
  return async (dispatch: Dispatch<LoginActionAll>) => {
    dispatch({
      type: LoginActionType.LOGIN
    });
    try {
      const { data } = await axios.post(backendUrl2 + ':1337/api/auth/local', json)
      dispatch({
        type: LoginActionType.LOGIN_SUCCESS,
        payload: data
      })
    } catch (error: any) {
      dispatch({
        type: LoginActionType.LOGIN_ERROR,
        payload: error.message
      });
    }
  }
}
