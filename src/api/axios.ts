import axios from "axios";
import { store } from './../store/store';
import jwt_decode from "jwt-decode";



const axiosInstance = axios.create({
  baseURL: "",
});

export const setToken = (token: string) => {
  axiosInstance.defaults.headers.common.authorization = `Bearer ${"TOKEN"}`;
}

export  async ({
method = "GET",

})

axios.interceptors.request.use((request) => {
  if (store.getState().user.user == null) {

  }

    const token = store.getState().user.user?.token;
  request.headers = { ...request.headers, Authorization: }
  return request;
});



export default axiosInstance;
