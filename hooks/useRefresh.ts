import { newAxios } from '@/apis/config';
import { getRefreshTokenCookie, removeTokensCookie, setTokensCookie } from '@/utils/cookie';
import { useSetRecoilState } from 'recoil';
import useToast from './useToast';
import { logInModalState } from '@/atoms/modalAtoms';
import { useRouter } from 'next/router';

const useRefresh = () => {
  const showToast = useToast();
  const { push } = useRouter();
  const setShowLogInModal = useSetRecoilState(logInModalState);

  const refresh = async () => {
    const refreshToken = getRefreshTokenCookie();

    if (refreshToken) {
      try {
        const { data } = await newAxios.get('/api/users/refresh', {
          headers: {
            Authorization: `Bearer ${refreshToken}`,
          },
        });

        const { accessToken: newAccessToken, refreshToken: newRefreshToken } = data.result.result;

        setTokensCookie({ accessToken: newAccessToken, refreshToken: newRefreshToken });

        return newAccessToken;
      } catch (error) {
        console.error(error);
        push('/');
        removeTokensCookie();
        showToast('로그인을 해주세요', true);
        setShowLogInModal(true);
        document.body.classList.add('modal-open');
      }
    }
  };

  return refresh;
};

export default useRefresh;
