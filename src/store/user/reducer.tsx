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
}

export interface LodingAction {
  type: UserActionTypes.LOGIN;
}

export interface LodingSuccersAction {
  type: UserActionTypes.LOGIN_SUCCERS;
  payload: User;
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
  | LodingErrorAction;

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

    default:
      return state;
  }
};
