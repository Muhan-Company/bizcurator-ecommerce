import axiosInstance from './config';

const getWeeklyTrending = async () => {
  const { data } = await axiosInstance.get('/api/products/top-weekly').then((res) => res.data);

  return data;
};

const getMonthlyTrending = async () => {
  const { data } = await axiosInstance.get('/api/products/top-monthly');

  return data;
};

export { getWeeklyTrending, getMonthlyTrending };
