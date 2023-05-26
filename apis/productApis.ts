import axiosInstance from './config';

export interface CategoryProducts {
  categoryId: number;
  sortBy: string;
}

const getProductInfo = async (product_id: number) => {
  const { data } = await axiosInstance.get(`/api/products/${product_id}`);
  return data;
};

const getCategoryProducts = async ({ categoryId, sortBy }: CategoryProducts) => {
  const { data } = await axiosInstance.get(`/api/products?categoryId=${categoryId}&sort=${sortBy}`);

  return data;
};

export { getProductInfo, getCategoryProducts };
