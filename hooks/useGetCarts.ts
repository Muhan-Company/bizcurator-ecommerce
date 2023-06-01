import { getCarts } from '@/apis/cartApis';
import { getAccessTokenCookie } from '@/utils/cookie';
import { useQuery } from '@tanstack/react-query';

const useGetCarts = () => {
  const accessToken = getAccessTokenCookie();

  return useQuery({
    queryKey: ['carts'],
    queryFn: getCarts,
    enabled: !!accessToken,
  });
};

export default useGetCarts;
