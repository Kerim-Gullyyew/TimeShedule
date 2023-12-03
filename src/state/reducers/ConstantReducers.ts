import { ConstantActionType } from "../action-types";
import { ConstantActionAll } from "../actions/ConstantAction";

interface ConstantState {
  data: string | null,
}

const initialState = {
  data: null,
};

const ConstantReducer = (state: ConstantState = initialState, action: ConstantActionAll): ConstantState => {
  switch (action.type) {
    case ConstantActionType.ADD_URL:
      return {
        data: action.payload
      };

    default:
      return state;
  }
};

export default ConstantReducer;