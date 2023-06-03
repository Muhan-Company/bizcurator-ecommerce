import { getRefreshTokenCookie } from '@/utils/cookie';
import { useEffect, useState } from 'react';

const useRefreshTokenCookie = () => {
  const [refreshTokenCookie, setRefreshTokenCookie] = useState<string | undefined>('');

  useEffect(() => {
    setRefreshTokenCookie(getRefreshTokenCookie());
  }, []);

  return refreshTokenCookie;
};

export default useRefreshTokenCookie;
