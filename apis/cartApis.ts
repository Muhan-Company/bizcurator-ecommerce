import axiosInstance from './config';

const addToCart = (product_id: number, quantity: number) =>
  axiosInstance.post('/api/carts/add', { product_id, quantity });

export { addToCart };
