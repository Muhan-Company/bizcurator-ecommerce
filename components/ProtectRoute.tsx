import useRequireAuth from '../hooks/useRequireAuth';
import { useEffect } from 'react';
import { getAccessTokenCookie } from '@/utils/cookie';

const ProtectRoute = () => {
  const requireAuth = useRequireAuth();

  useEffect(() => {
    const accessToken = getAccessTokenCookie();

    if (!accessToken) {
      requireAuth();
    }
  }, [requireAuth]);

  return null;
};

export default ProtectRoute;
