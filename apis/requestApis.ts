import axiosInstance from './config';

const requestPurchase = async (formData: FormData) => axiosInstance.post('/api/requests/orders', formData);

export { requestPurchase };
