import axiosInstance from "./config";
import { useQuery } from "@tanstack/react-query";

export type OrderCancelItem = {
    product: string;
    salesCompany: string;
    sales_type: string;
    order_number: string;
    order_date: string;
    cancel_state: string;
    order_count: number;
    order_amount: number;
    cancel_reason: string;
}

export interface OrderCancelItemProps {
    list: OrderCancelItem[];
}

const getOrderCancel = async () => {
    try {
        const { data } = await axiosInstance.get(`/api/admins/applications/cancellations`);
        console.log(data);
        return data.result as
            {
                histories: OrderCancelItem[]
            };

    } catch (error) {
        console.log(error);
    }
};

export const useGetOrderCancelDetail = () => {
    return useQuery(['ordercancel'], getOrderCancel); // 객체 형태를 제거하고 각각의 인수로 전달
};
