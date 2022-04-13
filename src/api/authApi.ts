import { AxiosResponse } from 'axios';
import { User } from '../store/user/reducer';
import axios from './axios';

const path = '/users/auth/login';

interface Config {
  email: string,
  password: string
}

export const signIn = async (config: Config): Promise<AxiosResponse<User>> => {
  return axios.post(`${path}`, { ...config, userName: config.email });
};

export const registerIn =  async (config: Config): Promise<AxiosResponse<User>> => {
  return axios.post(`/users`, { ...config, userName: config.email });
};

export default {
  signIn,
  registerIn
};
