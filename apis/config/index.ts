import axios from 'axios';

const axiosInstance = axios.create({
  // API 서버주소
  baseURL: 'http://43.201.195.195:8080',
});

export default axiosInstance;
