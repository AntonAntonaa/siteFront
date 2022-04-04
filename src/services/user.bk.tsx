import axios from "axios";

interface LoginResponse {
  id: number;
  token: string;
}

export const Login = async (
  userName: string,
  password: string
): Promise<LoginResponse> => {
  const response = await axios.post("http://localhost:3002/users/auth/login", {
    userName,
    password,
  });
  return response.data;
};

interface RegisterRespons {
  id: number
  userName: string;
  email: string;
  dob: number;
  token: string;
}

export const Register = async (
  userName: string,
  password: string,
  email: string,
  dob: number,
): Promise<RegisterRespons> => {
  const response = await axios.post("http://localhost:3002/users", {
    userName,
    password,
    email,
    dob
  })
  return response.data
}
