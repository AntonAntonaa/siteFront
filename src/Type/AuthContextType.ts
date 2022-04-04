interface AuthContextType {
  signin: (userName: string, password: string) => void;
  signout: () => void;
  register: (userName: string, password: string, email: string, dob: number) => void;
}

export default AuthContextType;
