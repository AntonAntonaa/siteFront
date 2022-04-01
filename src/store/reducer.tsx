import { stat } from "fs";


export const initialState:UserState = {
  user: {
    
  }

  export interface User {
    id: number,
    userName: string,
  }
  
  export interface UserState {
   currentUser: User|null;
  }


  

  export const Reducers = (state = initialState, action) => {
    switch (action.type) {
     case "LOGIN":

     return {
      ...state, login: state.login
     }




      case "REGISTER"

    }
  }







