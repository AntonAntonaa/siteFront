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
  token: null | string;
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
  token: string;
}

export interface LodingSuccersAction {
  type: UserActionTypes.LOGIN_SUCCERS;
  payload: User;
  token: string;
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
  user: JSON.parse(localStorage.getItem("USER") || "null"),
  loading: false,
  error: null,
  token: localStorage.getItem("AUTHTOKEN"),
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
      console.log(1);
      
      localStorage.removeItem("USER");
      localStorage.removeItem("AUTHTOKEN");
      return { user: null, loading: true, error: null, token: null };
    case UserActionTypes.LOGIN_SUCCERS:
      console.log(2);
      
      localStorage.setItem("USER", JSON.stringify(action.payload));
      localStorage.setItem("AUTHTOKEN", action.token);
      return {
        user: action.payload,
        loading: false,
        error: null,
        token: action.token,
      };
    case UserActionTypes.LOGIN_ERROR:
      console.log(3);
      localStorage.removeItem("USER");
      localStorage.removeItem("AUTHTOKEN");
      return { user: null, loading: false, error: action.payload, token: null };

    case UserActionTypes.REGISTER:
      console.log(4);
      localStorage.removeItem("USER");
      localStorage.removeItem("AUTHTOKEN");
      return { user: null, loading: true, error: null, token: null };
    case UserActionTypes.REGISTER_SUCCERS:
      console.log(5);
      localStorage.setItem("USER", JSON.stringify(action.payload));
      localStorage.setItem("AUTHTOKEN", action.token);
      return {
        user: action.payload,
        loading: false,
        error: null,
        token: action.token,
      };
    case UserActionTypes.REGISTER_ERROR:
      console.log(6);
      localStorage.removeItem("USER");
      localStorage.removeItem("AUTHTOKEN");
      return { user: null, loading: false, error: action.payload, token: null };

    default:
      return state;
  }
};
