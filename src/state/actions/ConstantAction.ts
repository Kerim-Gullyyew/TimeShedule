import { ConstantActionType } from "../action-types";

interface Add_urlAction {
  type: ConstantActionType.ADD_URL;
  payload: string;
}

export type ConstantActionAll = Add_urlAction;