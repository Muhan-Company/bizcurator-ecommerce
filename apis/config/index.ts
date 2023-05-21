import { REFRESH_URL } from '@/utils/constants';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { postRefreshToken } from '../users';

const axiosInstance = axios.create({
  // API 서버주소
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

// 요청 인터셉터 설정
axiosInstance.interceptors.request.use(
  (config) => {
    let token = null;

    /* refreshToken 토큰 사용 api 주소  */

    // Server-side 에서는 window가 없기 때문에 local storage 사용 불가
    if (typeof window !== 'undefined') {
      if (config.url === REFRESH_URL) {
        token = localStorage.getItem('refreshToken');
      } else {
        token = localStorage.getItem('accessToken');
      }
    }

    if (token !== null) {
      // 토큰이 존재하는 경우 헤더에 토큰 추가
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // 요청 에러 처리
    return Promise.reject(error);
  },
);

// 응답 인터셉터 설정
axiosInstance.interceptors.response.use(
  (response) => {

    // 응답 데이터 전에 수행할 작업

    return response;
  },
  async (error) => {
    const { config, response } = error;

    // Server-side에서 response 객체가 존재하지 않을 때 에러가 발생하기 때문에, response가 존재하면 코드 실행하는 조건 추가
    if (response && response.status && response.data) {
      const { status, data } = response;
      toast.error(data?.message);
      console.log(data);
    }

    return Promise.reject(error);
  },
);

export default axiosInstance;

const BASE_URL = 'http://43.201.195.195:8080';

export const ec2 = axios.create({ baseURL: BASE_URL });