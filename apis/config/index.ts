import { REFRESH_URL } from '@/utils/constants';
import axios from 'axios';
// import { toast } from 'react-hot-toast';
import { getRefreshToken } from '../users';

const axiosInstance = axios.create({
  // API 서버주소
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

// 요청 인터셉터 설정
axiosInstance.interceptors.request.use(
  (config) => {
    let token = null;

    // Server-side 에서는 window가 없기 때문에 local storage 사용 불가
    if (typeof window !== 'undefined') {
      /* refreshToken 토큰 사용 api 주소  */
      if (config.url === REFRESH_URL) {
        token = localStorage.getItem('refreshToken');
      } else {
        token = localStorage.getItem('accessToken');
      }
    }

    if (token !== null && config.url?.includes('/api/users')) {
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
      const { data } = response;
      // toast.error(data?.message, {
      //   id: 'response-error',
      // });

      // 인증(토큰 만료) 에러일 경우
      if (data?.code === 401) {
        // refresh 토큰 만료 에러일 경우
        if (config.url === REFRESH_URL) {
          // 기존 토큰 삭제
          window.localStorage.removeItem('accessToken');
          window.localStorage.removeItem('refreshToken');

          alert('재로그인이 필요합니다.');
          window.location.replace('/');
        } else {
          // refresh 토큰 재발급 api 호출
          await getRefreshToken();
          // 토큰 재발급 후 토큰 만료로 실패한 api 재호출
          await axiosInstance(config);
        }
      }
    }

    return Promise.reject(error);
  },
);

export default axiosInstance;

const BASE_URL = 'http://43.201.195.195:8080';

export const ec2 = axios.create({ baseURL: BASE_URL });

export const newAxios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export const axiosPrivate = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});
