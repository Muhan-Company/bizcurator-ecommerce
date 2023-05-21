import axiosInstance from './config';

const addToCart = ({ product_id, quantity }: { product_id: number; quantity: number }) =>
  axiosInstance.post('/api/carts', { product_id, quantity });

export { addToCart };
