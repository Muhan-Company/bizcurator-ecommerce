import axiosInstance from '.';

// 요청 인터셉터 설정
axiosInstance.interceptors.request.use(
  (config) => {
    // 요청 전에 수행할 작업을

    // todo: 토큰 추가 interceptor 작성하기
    const token = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJpZDEyMyIsInJvbGUiOiJVU0VSIiwiaWF0IjoxNjgwNDU1Mzc1LCJleHAiOjE2ODA0NTcxNzV9.4ALQPPHNqnWtF2UVu35ql8Z_TK_txrPM3UmUfXTkfq8'; /* 토큰 넣기 */
    if (token) {
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
  (error) => {
    // 응답 에러 처리
    return Promise.reject(error);
  },
);

export default axiosInstance;
