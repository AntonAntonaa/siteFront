export interface User {
  userName: string;
  email: string;
  id: number;
  avatar: string;
}

export interface UserState {
  user: null | User;
  loading: boolean;
  error: null | string;
}

export enum UserActionTypes {
  LOGIN = "LOGIN",
  LOGIN_SUCCERS = "LOGIN_SUCCERS",
  LOGIN_ERROR = "LOGIN_ERROR",
  REGISTER = "REGISTER",
  REGISTER_SUCCERS = "REGISTER_SUCCERS",
  REGISTER_ERROR = "REGISTER_ERROR",
}

export interface RegisterAction {
  type: UserActionTypes.REGISTER;
}

export interface LodingAction {
  type: UserActionTypes.LOGIN;
}

export interface RegisterSuccersAction {
  type: UserActionTypes.REGISTER_SUCCERS;
  payload: User;
}

export interface LodingSuccersAction {
  type: UserActionTypes.LOGIN_SUCCERS;
  payload: User;
}

export interface RegisterErrorAction {
  type: UserActionTypes.REGISTER_ERROR;
  payload: string;
}

export interface LodingErrorAction {
  type: UserActionTypes.LOGIN_ERROR;
  payload: string;
}

const initialState: UserState = {
  user: null,
  loading: false,
  error: null,
};

export type UsersAction =
  | LodingAction
  | LodingSuccersAction
  | LodingErrorAction
  | RegisterErrorAction
  | RegisterSuccersAction
  | RegisterAction;

export const userReducer = (
  state = initialState,
  action: UsersAction
): UserState => {
  switch (action.type) {
    case UserActionTypes.LOGIN:
      return { user: null, loading: true, error: null };
    case UserActionTypes.LOGIN_SUCCERS:
      return { user: action.payload, loading: false, error: null };
    case UserActionTypes.LOGIN_ERROR:
      return { user: null, loading: false, error: action.payload };

    case UserActionTypes.REGISTER:
      return { user: null, loading: true, error: null };
    case UserActionTypes.REGISTER_SUCCERS:
      return { user: action.payload, loading: false, error: null };
    case UserActionTypes.REGISTER_ERROR:
      return { user: null, loading: false, error: action.payload };

    default:
      return state;
  }
};
