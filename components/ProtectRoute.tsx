import useRequireAuth from '../hooks/useRequireAuth';
import { useEffect } from 'react';
import { getAccessTokenCookie } from '@/utils/cookie';
import useToast from '@/hooks/useToast';

const ProtectRoute = () => {
  const requireAuth = useRequireAuth();
  const showToast = useToast();

  useEffect(() => {
    const accessToken = getAccessTokenCookie();
    if (!accessToken) {
      requireAuth();
    }
  }, [requireAuth, showToast]);

  return null;
};

export default ProtectRoute;
