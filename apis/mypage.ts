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
