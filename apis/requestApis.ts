import axiosInstance from './config';

const requestOrders = async (formData: FormData) => axiosInstance.post('/api/requests/orders', formData);

export { requestOrders };
