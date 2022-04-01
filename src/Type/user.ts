

// export interface User {
//   id: number,
//   userName: string,
// }



interface AuthContextType {
  user: any;
  signin: (user: string) => void;
  signout: () => void;
}

export default AuthContextType;

