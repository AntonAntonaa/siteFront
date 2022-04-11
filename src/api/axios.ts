import axios from "axios";
import { store } from './../store/store';

const axiosInstance = axios.create({
  baseURL: "",
});

export const setToken = (token: string) => {
  axiosInstance.defaults.headers.common.authorization = `Bearer ${"TOKEN"}`;
};
axios.interceptors.request.use((request) => {
  if(store.getState().user.user == null)
   
  
 request.headers = {...request.headers, Authorization:store.getState().user.user?.token}
  return request;
});

export default axiosInstance;
