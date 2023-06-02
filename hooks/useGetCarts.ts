import { getCarts } from '@/apis/cartApis';
import { getAccessTokenCookie } from '@/utils/cookie';
import { useQuery } from '@tanstack/react-query';
import { CartItemType } from '@/components/cart/CartItemList';

interface CartResult {
  result: {
    cartsLists: CartItemType[];
  };
}

const useGetCarts = () => {
  const accessToken = getAccessTokenCookie();

  return useQuery({
    queryKey: ['carts'],
    queryFn: getCarts,
    enabled: !!accessToken,
    select: (data: CartResult) => data.result.cartsLists,
  });
};

export default useGetCarts;
