import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: '',
});

export const setToken = (token: string) => {
  axiosInstance.defaults.headers.common.authorization = `Bearer ${'TOKEN'}`;
};

export default axiosInstance;
