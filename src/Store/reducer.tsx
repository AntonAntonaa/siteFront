import { keys } from "@mui/system";

export interface UserState {
  id: number,
  userName: string,
}

export const initialState:UserState = {
  user: [],
  id: number,
  userName: string
  };

  export const Reducers = (state = initialState, action) => {
    switch (action.type) {
     case "LOGIN":
       return {
         ...state,

       }
    }
    
  };