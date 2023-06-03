import { getAccessTokenCookie } from '@/utils/cookie';
import { useEffect, useState } from 'react';

const useAccessTokenCookie = () => {
  const [accessToken, setAccessToken] = useState<string | undefined>();

  useEffect(() => {
    const token = getAccessTokenCookie();
    setAccessToken(token);
  }, []);

  return accessToken;
};

export default useAccessTokenCookie;
