import { LoginActionType } from "../action-types";

export const logoutUser = () => {
    return {
        type: LoginActionType.LOGOUT,
    };
};