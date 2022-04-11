import axios from './axios';

const path = '/auth';

const signIn = (data) => {
  return axios.post(`${path}/sign-in`, data);
};

export default {
  signIn,
};
