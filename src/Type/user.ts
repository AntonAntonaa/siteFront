export interface User {
  id: number;
  login: string;
  password: string;
  email: string;
  dob: number;
}

export enum UserActions {
  SET_TOKEN_ACTION = "SET_TOKEN_ACTION",
}

export interface SetTokenAction {
  type: UserActions.SET_TOKEN_ACTION;
  token:string|null
}

export type UserActionType = SetTokenAction