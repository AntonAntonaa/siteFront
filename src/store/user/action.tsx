import axios from "axios";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { RootState } from "../store";
import {
  LodingAction,
  LodingErrorAction,
  LodingSuccersAction,
  User,
  UserActionTypes,
  UsersAction,
} from "./reducer";

export const loginStart = (): LodingAction => {
  return {
    type: UserActionTypes.LOGIN,
  };
};

export const loginSuccess = (user: User): LodingSuccersAction => {
  return {
    type: UserActionTypes.LOGIN_SUCCERS,
    payload: user,
  };
};

export const loginError = (error: string): LodingErrorAction => {
  return {
    type: UserActionTypes.LOGIN_ERROR,
    payload: error,
  };
};

type Options = {
  email: string;
  password: string;
};

// export const loginUser = (options: Options) => async (dispatch) => {

// }
export function loginUser(options: Options) {
  return async function (
    dispatch: ThunkDispatch<RootState, void, UsersAction>
  ) {
    try {
      dispatch(loginStart());
      const response = await axios.get('https://jsonplaceholder.typicode.com/users/1');
      dispatch(loginSuccess({
        avatar: '',
        email: response.data.email,
        id: response.data.id,
        userName: response.data.username
      }))
    } catch (err: any) {
      dispatch(loginError(err.message))
    }
  };
}
