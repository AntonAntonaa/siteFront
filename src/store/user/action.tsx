import axios from "axios";
import { ThunkDispatch } from "redux-thunk";
import { RootState } from "../store";
import {
  LodingAction,
  LodingErrorAction,
  LodingSuccersAction,
  RegisterAction,
  RegisterErrorAction,
  RegisterSuccersAction,
  User,
  UserActionTypes,
  UsersAction,
} from "./reducer";
import { registerIn, signIn } from "../../api/authApi";


export const registerStart = (): RegisterAction => {
  return {
    type: UserActionTypes.REGISTER,
  };
};

export const loginStart = (): LodingAction => {
  return {
    type: UserActionTypes.LOGIN,
  };
};

export const registerSuccess = (user: User): RegisterSuccersAction => {
  return {
    type: UserActionTypes.REGISTER_SUCCERS,
    payload: user,
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

export const registerError = (error: string): RegisterErrorAction => {
  return {
    type: UserActionTypes.REGISTER_ERROR,
    payload: error,
  };
};

type Options = {
  email: string;
  password: string;
};

export function loginUser(options: Options) {
  return async function (
    dispatch: ThunkDispatch<RootState, void, UsersAction>
  ) {
    try {
      dispatch(loginStart());
      const resp = await signIn(options);
      dispatch(
        loginSuccess({
          avatar: "",
          email: resp.data.email,
          id: resp.data.id,
          userName: resp.data.userName,
        })
      );
    } catch (err: any) {
      dispatch(loginError(err.message));
    }
  };
}

export function registerUser(options: Options) {
  return async function (
    dispatch: ThunkDispatch<RootState, void, UsersAction>
  ) {
    try {
      dispatch(registerStart());
      const resp = await registerIn(options);
      dispatch(
        registerSuccess({
          avatar: "",
          email: resp.data.email,
          id: resp.data.id,
          userName: resp.data.userName,
        })
      );
    } catch (err: any) {
      dispatch(registerError(err.message));
    }
  };
}
