import { keys } from "@mui/system";

export interface User {
  id: number,
  userName: string,
}

export interface UserState {
 currentUser: User|null;
}

export const initialState:UserState = {
  user: {[],
  id: number,
  userName: string}
  };

  export const Reducers = (state = initialState, action) => {
    switch (action.type) {
     case "LOGIN":
       return {
         ...state,

       }
    }
    
  };