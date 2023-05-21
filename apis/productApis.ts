import { useQuery } from '@tanstack/react-query';
import axiosInstance from './config';

const getProductInfo = (product_id: string) => axiosInstance.get(`/api/products/${product_id}`).then((res) => res.data);

const useProductInfo = (product_id: string) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['products', product_id],
    queryFn: () => getProductInfo(product_id),
  });

  return { productInfo: data?.result.productDetail, isLoading, error };
};

export { useProductInfo };
