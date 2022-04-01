

// export interface User {
//   id: number,
//   userName: string,
// }

import { useDispatch } from "react-redux";

interface AuthContextType {
  user: any;
  signin: (user: string) => void;
  signout: () => void;
}

export default AuthContextType;

