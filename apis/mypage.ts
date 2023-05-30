import { useQuery } from '@tanstack/react-query';
import axiosInstance from './config';

// 마이 페이지 메인 정보 조회 API
const getMyPageMain = async () => {
  const { data } = await axiosInstance('/api/mypages');

  return await data.result.histories;
};
export const useGetMyPageMain = () => {
  return useQuery({
    queryKey: ['mypage'],
    queryFn: async () => await getMyPageMain(),
  });
};

// 마이페이지 내 의뢰내역 조회 API
const getMyRequests = async (filter_month: number) => {
  const { data } = await axiosInstance(`/api/mypages/requests/histories?filter-month=${filter_month}`);

  console.log(data);
  return await data?.result?.details;
};
export const useGetMyRequests = (filter_month: number) => {
  return useQuery({
    queryKey: ['myRequests', filter_month],
    queryFn: async () => await getMyRequests(filter_month),
  });
};
