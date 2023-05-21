import axiosInstance from './config';

export interface CategoryProducts {
  categoryId: number;
  sortBy: string;
}

const getProductInfo = (product_id: number) => axiosInstance.get(`/api/products/${product_id}`).then((res) => res.data);

const getCategoryProducts = ({ categoryId, sortBy }: CategoryProducts) =>
  axiosInstance.get(`/api/products?categoryId=${categoryId}&sort=${sortBy}`).then((res) => res.data);

export { getProductInfo, getCategoryProducts };
