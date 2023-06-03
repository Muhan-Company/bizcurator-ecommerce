import { useQuery } from '@tanstack/react-query';
import axiosInstance from './config';

export interface ReqArgs {
  reqId: number;
  reqType: string;
}

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

export const getMyRequests = async (filter_month: number) => {
  const { data } = await axiosInstance.get(`/api/mypages/requests/histories?filter-month=${filter_month}`);

  return data;
};

export const getReqDetails = async ({ reqId, reqType }: ReqArgs) => {
  const res = await axiosInstance.get(`/api/mypages/requests/histories/${reqId}?type=${reqType}`);

  return res.data;
};
