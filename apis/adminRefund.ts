import axiosInstance from "./config";
import { useQuery } from "@tanstack/react-query";

export type OrderRefundItem = {
    applicationId: number;      //환불 고유 번호
    productName: string;        //상품명
    manufacturerName: string;   //제조사명
    productCategory: string;    //판매종류-대분류
    orderTime: string;          //주문일자
    state: string;              //취소처리상태
    quantity: number;           //갯수
    cost: number;               //주문금액
    opinionCategory: string;    //신청한사유
}

export interface OrderRefundItemProps {
    list: OrderRefundItem[];
}

const getOrderRefund = async () => {
    try {
        const { data } = await axiosInstance.get(`/api/admins/applications/refunds`);
        console.log(data);
        return data.result as
            {
                histories: OrderRefundItem[]
            };

    } catch (error) {
        console.log(error);
    }
};

export const useGetOrderRefundDetail = () => {
    return useQuery(['orderrefund'], getOrderRefund); // 객체 형태를 제거하고 각각의 인수로 전달
};
