import newAxios from './config';

const requestOrders = (formData: FormData) => newAxios.post('/api/requests/orders', formData);

const requestPartner = (formData: FormData) => newAxios.post('/api/requests/partners', formData);

export { requestOrders, requestPartner };
