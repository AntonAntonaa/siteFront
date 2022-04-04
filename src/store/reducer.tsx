import { UserActions, UserActionType } from "../Type/user";

export interface UserState {
  token: string | null;
}

const initalState: UserState = {
  token: null,
};

export const Reducers = (
  state: UserState = initalState,
  action: UserActionType
) => {
  switch (action.type) {
    case UserActions.SET_TOKEN_ACTION:
      return {
        ...state,
        token: action.token,
      };
    default:
      return state;
  }
};
