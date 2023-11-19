import { ShiftActionType } from "../action-types";
import { ShiftActionAll } from "../actions/ShiftAction";

interface ShiftState {
  loading: boolean,
  error: string | null,
  data: {}[],
}

const initialState = {
  loading: false,
  error: null,
  data: [],
};

const ShiftReducer = (state: ShiftState = initialState, action: ShiftActionAll): ShiftState => {
  switch (action.type) {
    case ShiftActionType.SHIFT:
      return {
        loading: true, error: null, data: state.data
      };
    case ShiftActionType.SHIFT_SUCCESS:
      return {
        loading: false, error: null, data: [...state.data, action.payload]
      };

    case ShiftActionType.SHIFT_ERROR:
      return {
        loading: false, error: action.payload, data: []
      };


    case ShiftActionType.GET_SHIFT:
      return {
        loading: true, error: null, data: []
      };
    case ShiftActionType.GET_SHIFT_SUCCESS:
      return {
        loading: false, error: null, data: action.payload
      };
    case ShiftActionType.GET_SHIFT_ERROR:
      return {
        loading: false, error: action.payload, data: []
      };
    default:
      return state;
  }
};
export default ShiftReducer

