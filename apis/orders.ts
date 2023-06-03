import { useQuery } from '@tanstack/react-query';
import axiosInstance, { newAxios } from './config';

// 주문 리스트 조회 API
const getOrderList = async (deliveryState: string | string[] | undefined, selectedDateFilter: number) => {
  try {
    const { data } = await axiosInstance(
      `/api/mypages/orders/products?filter-month=${selectedDateFilter}&delivery-state=${deliveryState}`,
    );
    console.log(data);
    return (await data.result?.histories) || [];
  } catch (error) {
    console.log(error);
  }
};

export const useGetOrderList = (deliveryState: string | string[] | undefined, selectedDateFilter: number) => {
  return useQuery({
    queryKey: [deliveryState, selectedDateFilter],
    queryFn: () => getOrderList(deliveryState, selectedDateFilter),
  });
};

// 주문 상세 조회 API
const getOrderDetail = async (payment_id: number) => {
  try {
    const { data } = await axiosInstance(`/api/mypages/orders/products/details?payment-id=${payment_id}`);
    console.log(data);
    return await data.result.details;
  } catch (error) {
    console.log(error);
  }
};

export const useGetOrderDetail = (payment_id: number) => {
  return useQuery({
    queryKey: ['orderDetail', payment_id],
    queryFn: () => getOrderDetail(payment_id),
  });
};
