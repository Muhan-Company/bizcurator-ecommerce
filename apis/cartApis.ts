import { useQuery } from '@tanstack/react-query';
import axiosInstance from './config';

const addToCart = ({ product_id, quantity }: { product_id: number; quantity: number }) =>
  axiosInstance.post('/api/carts', { product_id, quantity });

// 카트 조회 API
const getCartList = async () => {
  try {
    const { data } = await axiosInstance.get('/api/carts');

    console.log(data.result.cartsLists);
    return (await data.result?.cartsLists) || [];
  } catch (error) {
    console.log(error);
  }
};
const useGetCartList = () => {
  return useQuery({
    queryKey: ['cartList'],
    queryFn: () => getCartList(),
  });
};

export { addToCart, useGetCartList };
