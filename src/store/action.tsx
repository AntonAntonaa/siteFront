export function LoginRedux(id: number, login: string, password: string) {
  return {
    type: "LOGIN",
    id,
    login,
    password,
  };
}

export function RegisterRedux(
  id: number,
  login: string,
  password: string,
  email: string,
  dob: number
) {
  return {
    type: "REGISTER",
    id,
    login,
    password,
    email,
    dob,
  };
}
