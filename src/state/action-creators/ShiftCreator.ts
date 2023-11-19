import axios from "axios";
import { Dispatch } from "redux";
import { ShiftActionType } from "../action-types";
import { ShiftActionAll } from "../actions/ShiftAction";
import { backendUrl } from "../../constants/Url";

interface jsonProps {
  data: {
    month_name: string,
    worked_hours: number,
    worked_minutes: number,
    users_permissions_user: number | string | undefined
  }
}

export const Shift = (json: jsonProps, token: string | undefined) => {
  return async (dispatch: Dispatch<ShiftActionAll>) => {
    dispatch({
      type: ShiftActionType.SHIFT
    });

    try {
      var config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      };
      const { data } = await axios.post(backendUrl + '/api/shifts', json, config)

      dispatch({
        type: ShiftActionType.SHIFT_SUCCESS,
        payload: data.data.attributes
      })
    } catch (error: any) {
      dispatch({
        type: ShiftActionType.SHIFT_ERROR,
        payload: error.message
      });
    }
  }
}


export const GetShift = (id: number | undefined, token: string | undefined) => {
  return async (dispatch: Dispatch<ShiftActionAll>) => {
    dispatch({
      type: ShiftActionType.GET_SHIFT
    });
    try {
      var config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      };
      const { data } = await axios.get(backendUrl + '/api/users/' + id + '/?populate=*', config)

      dispatch({
        type: ShiftActionType.GET_SHIFT_SUCCESS,
        payload: data.shifts
      })
    } catch (error: any) {
      dispatch({
        type: ShiftActionType.GET_SHIFT_ERROR,
        payload: error.message
      });
    }
  }
}