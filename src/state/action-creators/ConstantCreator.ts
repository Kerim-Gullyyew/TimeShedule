import { ConstantActionType } from "../action-types";
import { ConstantActionAll } from "../actions/ConstantAction";
import { Dispatch } from "redux";

export const addUrl = (url: string) => {
    return (dispatch: Dispatch<ConstantActionAll>) => {
        dispatch({
            type: ConstantActionType.ADD_URL,
            payload: url
        })
    };
};