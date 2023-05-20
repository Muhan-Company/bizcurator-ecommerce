import axios from 'axios';

const axiosInstance = axios.create({
  // API 서버주소
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export default axiosInstance;
