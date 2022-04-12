import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3002",
});

axiosInstance.interceptors.request.use((request) => {
  const token = localStorage.getItem('token');
  if (token) {
    request.headers = {
      ...request.headers,
      Authorization: `Bearer ${token}`
    }
  }
  return request;
});

axiosInstance.interceptors.response.use((resp) => {
  console.log('DONE1', resp.data)
  if (resp.data.token) {
    console.log('DONE')
    localStorage.setItem('token', resp.data.token)
  }

  return resp
})


export default axiosInstance;
