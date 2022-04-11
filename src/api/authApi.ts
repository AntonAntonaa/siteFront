import axios from './axios';

const path = '/auth';

const signIn = (config: any) => {
  return axios.post(`${path}/sign-in`, config);
};

export default {
  signIn,
};
