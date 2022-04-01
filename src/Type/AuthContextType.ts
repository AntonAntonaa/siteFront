interface AuthContextType {
    user: any;
   
    signin: (user: string) => void;
    signout: () => void;
  }
  
  export default AuthContextType;