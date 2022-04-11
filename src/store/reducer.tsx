import { UserActions, UserActionType } from "../Type/user";
import { createSlice, configureStore } from '@reduxjs/toolkit'

const user = createSlice ({
name: "userState",
initalState: {
  userName: null,
  email: null,
  token: null,
},
reducers: {
  login: state => {
    state.userName = "" , 
    state.email = "" ,
     state.token=""
  } 


}
}); 





// export interface UserState {
//   userName: string | null;
//   email: string | null;
//   token: string | null;
// }



// export const Reducers = (
//   state: UserState = initalState,
//   action: UserActionType
// ) => {
//   switch (action.type) {
//     case UserActions.SET_TOKEN_ACTION:
//       return {
//         ...state,
//         token: action.token, userName: 
//       };
//     default:
//       return state;
//   }
// };
