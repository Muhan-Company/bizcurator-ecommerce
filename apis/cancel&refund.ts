import { useQuery } from '@tanstack/react-query';
import axiosInstance from './config';

// 주문취소, 환불 신청내역 리스트 조회 get API
const getCanceRefundlList = async (activedTab: string, selectedDateFilter: number) => {
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
export const useGetCancelRefundList = (activedTab: string, selectedDateFilter: number) => {
  return useQuery({
    queryKey: [activedTab, selectedDateFilter],
    queryFn: () => getCanceRefundlList(activedTab, selectedDateFilter),
  });
};

// 주문취소, 환불 신청 상세내역 조회 get API
const getCancelRefundDetail = async (detail: string, id: string) => {
  const type = detail === 'cancellations' ? 'cancel' : 'refund';
  try {
    const { data } = await axiosInstance.get(`/api/mypages/orders/applications/${detail}/details?
  ${type}-id=${id}`);
    console.log(data);
    return await data.result;
  } catch (error) {
    console.log(error);
  }
};
export const useGetCancelRefundDetail = (detail: string, id: string) => {
  return useQuery({
    queryKey: ['cancelRefundDetail', detail, id],
    queryFn: () => getCancelRefundDetail(detail, id),
  });
};
