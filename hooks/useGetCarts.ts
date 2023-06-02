import { getAccessTokenCookie } from '@/utils/cookie';
import { useQuery } from '@tanstack/react-query';
import { CartItemType } from '@/components/cart/CartItemList';
import useAxiosPrivate from './useAxiosPrivate';

interface CartResult {
  result: {
    cartsLists: CartItemType[];
  };
}

const useGetCarts = () => {
  const accessToken = getAccessTokenCookie();
  const axiosPrivate = useAxiosPrivate();

  const getCarts = async () => {
    const { data } = await axiosPrivate.get('/api/carts');

    return data;
  };

  return useQuery({
    queryKey: ['carts'],
    queryFn: getCarts,
    enabled: !!accessToken,
    select: (data: CartResult) => data.result.cartsLists,
  });
};

export default useGetCarts;
