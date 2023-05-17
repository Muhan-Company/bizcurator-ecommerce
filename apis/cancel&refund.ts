import { useQuery } from '@tanstack/react-query';
import axiosInstance from './config';

const fetchCancelList = async (activedTab: string, selectedDateFilter: number) => {
  try {
    const { data } = await axiosInstance.get(
      `/api/mypages/orders/applications/${activedTab}?filter-month=${selectedDateFilter}`,
    );
    console.log(data);
    return await data.result;
  } catch (error) {
    console.log(error);
  }
};
export const useGetCanceRefundlList = (activedTab: string, selectedDateFilter: number) => {
  return useQuery({
    queryKey: [activedTab, selectedDateFilter],
    queryFn: () => fetchCancelList(activedTab, selectedDateFilter),
  });
};
