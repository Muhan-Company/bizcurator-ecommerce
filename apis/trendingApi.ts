import axiosInstance from './config';

const getWeeklyTrending = () => axiosInstance.get('/api/products/top-weekly').then((res) => res.data);

const getMonthlyTrending = () => axiosInstance.get('/api/products/top-monthly').then((res) => res.data);

export { getWeeklyTrending, getMonthlyTrending };
