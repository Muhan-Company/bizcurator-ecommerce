import { useQuery } from '@tanstack/react-query';
import axiosInstance from './config';

const getProductInfo = (productId: string) => axiosInstance.get(`/api/products/${productId}`).then((res) => res.data);

const useProductInfo = (productId: string) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['products', productId],
    queryFn: () => getProductInfo(productId),
  });

  return { productInfo: data?.result.productDetail, isLoading, error };
};

export { useProductInfo };
