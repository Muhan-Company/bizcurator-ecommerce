import axiosInstance from './config';

const getProductInfo = (product_id: number) => axiosInstance.get(`/api/products/${product_id}`).then((res) => res.data);

export default getProductInfo;
