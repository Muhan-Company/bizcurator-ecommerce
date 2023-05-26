import axiosInstance from './config';

const requestOrders = (formData: FormData) => axiosInstance.post('/api/requests/orders', formData);

const requestPartner = (formData: FormData) => axiosInstance.post('/api/requests/partners', formData);

export { requestOrders, requestPartner };
