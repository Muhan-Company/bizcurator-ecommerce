import { getProductInfo } from '@/apis/productApis';
import { useQuery } from '@tanstack/react-query';

const useProductInfo = (product_id: number) => {
  return useQuery({
    queryKey: ['products', product_id.toString()],
    queryFn: () => getProductInfo(product_id),
  });
};

export default useProductInfo;
