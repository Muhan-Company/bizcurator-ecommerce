import newAxios from './config';

const getWeeklyTrending = async () => {
  const { data } = await newAxios.get('/api/products/top-weekly');

  return data;
};

const getMonthlyTrending = async () => {
  const { data } = await newAxios.get('/api/products/top-monthly');

  return data;
};

export { getWeeklyTrending, getMonthlyTrending };
