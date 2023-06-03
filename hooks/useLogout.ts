import { removeTokensCookie } from '@/utils/cookie';
import useAxiosPrivate from './useAxiosPrivate';
import { useRouter } from 'next/router';

const useLogout = () => {
  const axiosPrivate = useAxiosPrivate();
  const { push } = useRouter();

  const logout = async () => {
    try {
      await axiosPrivate.get('/api/users/logout');

      removeTokensCookie();
      push('/');
    } catch (error) {
      console.error(error);
    }
  };

  return logout;
};

export default useLogout;
