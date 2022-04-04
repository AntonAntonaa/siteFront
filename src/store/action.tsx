import { SetTokenAction } from "./../Type/user";
import { UserActions } from "../Type/user";

export function setTokenRedux(token: string | null): SetTokenAction {
  return {
    type: UserActions.SET_TOKEN_ACTION,
    token,
  };
}

export function LogOutRedux() {
  return {
    type: "LOGOUT",
  };
}

export function RegisterRedux(
  login: string,
  password: string,
  email: string,
  dob: number
) {
  return {
    type: "REGISTER",
    login,
    password,
    email,
    dob,
  };
}
