import { ShiftActionType } from "../action-types";

interface ShiftAction {
  type: ShiftActionType.SHIFT;
}
interface ShiftSuccessAction {
  type: ShiftActionType.SHIFT_SUCCESS;
  payload: [];
}
interface ShiftErrorAction {
  type: ShiftActionType.SHIFT_ERROR;
  payload: string;
}

interface GetShiftAction {
  type: ShiftActionType.GET_SHIFT;
}
interface GetShiftSuccessAction {
  type: ShiftActionType.GET_SHIFT_SUCCESS;
  payload: [];
}
interface GetShiftErrorAction {
  type: ShiftActionType.GET_SHIFT_ERROR;
  payload: string;
}

export type ShiftActionAll = ShiftAction | ShiftSuccessAction | ShiftErrorAction | GetShiftAction | GetShiftSuccessAction | GetShiftErrorAction;
