import axios from 'axios';

const axiosInstance = axios.create({
  // API 서버주소
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export default axiosInstance;


const BASE_URL = 'http://43.201.195.195:8080'

export const ec2 = axios.create({ baseURL: BASE_URL })