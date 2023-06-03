import { SignupFormValues } from '@/components/users/types';
import axiosInstance, { newAxios } from './config';
import { useQuery } from '@tanstack/react-query';
import { AxiosInstance } from 'axios';

interface LoginData {
  username: string;
  password: string;
}
// 로그인 API

export const postLogin = async (loginData: LoginData) => {
  // const test = { username: 'user1@user.com', password: '@user123' };
  try {
    const { data } = await axiosInstance.post('/api/users/login', loginData);
    const { accessToken, refreshToken } = data.result.login.token_dto;

    window.localStorage.setItem('accessToken', accessToken);
    window.localStorage.setItem('refreshToken', refreshToken);

    // 로그인 성공시 새로고침 (모달 닫기 & 메인페이지 상품가격 보이기)
    location.reload();
    // 스크롤 맨위로 이동
    window.scrollTo(0, 0);

    return await data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const login = async (loginData: LoginData) => {
  const { data } = await newAxios.post('/api/users/login', loginData);

  return data;
};

// refresh token 재발급 API (api 수정중)
export const getRefreshToken = async () => {
  try {
    const { data } = await axiosInstance('/api/users/refresh');
    const { accessToken, refreshToken } = data.result.result;

    window.localStorage.setItem('accessToken', accessToken);
    window.localStorage.setItem('refreshToken', refreshToken);

    return null;
  } catch (error) {
    console.log(error);
    return error;
  }
};

// 회원가입 API
export const postSignup = async (formData: SignupFormValues) => {
  try {
    const { data } = await axiosInstance.post('/api/users/signup', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

// 로그인 회원정보 조회 API
export const getMyInfo = async () => {
  try {
    const { data } = await axiosInstance('/api/users/check');

    return await data?.result?.info;
  } catch (error) {
    console.log(error);
  }
};

export const useGetMyInfo = () => {
  return useQuery({
    queryKey: ['myInfo'],
    queryFn: () => getMyInfo(),
  });
};

// 로그아웃 API
export const getLogout = async () => {
  try {
    const { data } = await axiosInstance('/api/users/logout');

    // localStorage에 저장된 토큰 삭제
    window.localStorage.removeItem('accessToken');
    window.localStorage.removeItem('refreshToken');

    console.log(data);

    return null;
  } catch (error) {
    console.log(error);
  }
};
