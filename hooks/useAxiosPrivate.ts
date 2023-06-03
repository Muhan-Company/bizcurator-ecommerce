import { axiosPrivate } from '@/apis/config';
import { getAccessTokenCookie } from '@/utils/cookie';
import { useEffect } from 'react';
import useRefresh from './useRefresh';

const useAxiosPrivate = () => {
  const refresh = useRefresh();
  const accessToken = getAccessTokenCookie();

  useEffect(() => {
    const reqIntercept = axiosPrivate.interceptors.request.use(
      (config) => {
        if (!config.headers['Authorization']) {
          config.headers['Authorization'] = `Bearer ${accessToken}`;
        }
        return config;
      },
      (error) => Promise.reject(error),
    );

    const resIntercept = axiosPrivate.interceptors.response.use(
      (res) => res,
      async (error) => {
        const prevReq = error.config;
        if (error.response.status === 400 && !prevReq.sent) {
          prevReq.sent = true;
          const newAccessToken = await refresh();

          prevReq.headers['Authorization'] = `Bearer ${newAccessToken}`;

          return axiosPrivate(prevReq);
        }

        return Promise.reject(error);
      },
    );

    return () => {
      axiosPrivate.interceptors.request.eject(reqIntercept);
      axiosPrivate.interceptors.response.eject(resIntercept);
    };
  }, [accessToken, refresh]);

  return axiosPrivate;
};

export default useAxiosPrivate;
