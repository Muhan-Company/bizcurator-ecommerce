import axiosInstance from './config';

interface LoginData {
  username: string;
  password: string;
}
// 로그인 API
export const postLogin = async (loginData: LoginData) => {
  // const test = { username: 'user@user.com', password: '@user123' };
  try {
    const { data } = await axiosInstance.post('/api/users/login', loginData);
    const { accessToken, refreshToken } = data.result.login.token_dto;

    console.log(data);
    console.log(data.result.login);

    window.localStorage.setItem('accessToken', accessToken);
    window.localStorage.setItem('refreshToken', refreshToken);

    // 로그인 성공시 새로고침 (모달 닫기 & 메인페이지 상품가격 보이기)
    location.reload();

    return await data;
  } catch (error) {
    // 실패시 localStorage 저장 토큰 삭제(임시코드: 로그아웃 기능 구현 전까지 유지)
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    return error;
  }
};

// refresh token 재발급 API (임시코드: api 명세 없어 정확하지 않음)
export const postRefreshToken = async (token: string) => {
  try {
    const { data } = await axiosInstance.post('/api/users/refresh', token);
    const { accessToken, refreshToken } = data.result.login.token_dto;

    console.log(data);
    console.log(data.result.login);

    window.localStorage.setItem('accessToken', accessToken);
    window.localStorage.setItem('refreshToken', refreshToken);

    console.log(accessToken);
    return await accessToken;
  } catch (error) {
    console.log(error);
    return error;
  }
};
