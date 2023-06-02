import { useQuery } from '@tanstack/react-query';
import axiosInstance, { newAxios } from './config';

const addToCart = ({ product_id, quantity }: { product_id: number; quantity: number }) =>
  axiosInstance.post('/api/carts', { product_id, quantity });

// 카트 조회 API
const getCartList = async () => {
  try {
    const { data } = await axiosInstance.get('/api/carts');

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

const getCarts = async () => {
  const { data } = await newAxios.get('/api/carts');

  return data;
};

const removeCartItems = async (itemIdList: number[]) => {
  const { data } = await newAxios.post('/api/carts/delete', itemIdList);

  return data;
};

export { addToCart, useGetCartList, getCarts, removeCartItems };
