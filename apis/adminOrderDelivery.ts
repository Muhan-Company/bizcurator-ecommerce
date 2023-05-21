import axiosInstance from "./config";
import { useQuery } from "@tanstack/react-query";

export type OrderDeliveryProps = {
    productName: string; //상품명
    manufacturerName: string; //판매 회사(제조사) -- 제조업체
    productCategory: string; //판매종류(대분류) 
    orderId: number; // 주문번호               -- (주문한 물건의 고유번호, 정수형)
    deliveryTime: string; //주문일자
    processState: number; //주문처리상태
    cancel_state: number; //취소처리상태
    deliveryState: number; //처리상태          -- (배송상태, 문자열)
    quantity: number; // 주문갯수              -- 수량
    cost: number; //주문금액                   -- 비용
    paymentId: number; //송장번호              -- 주문번호
    cancel_reason?: string; //사유
}

export type TableComponentProps = {
    displayData: OrderDeliveryProps[] | undefined;
    onSearch: (searchTerm: string) => void;
};

export interface OrderDeliveryItemProps {
    list: OrderDeliveryProps[];
}

const getOrderDelivery = async () => {
    try {
        const { data } = await axiosInstance.get(`/api/admins/orders`);
        console.log(data);
        return data.result as
            {
                histories: OrderDeliveryProps[]
            };
    } catch (error) {
        console.log(error);
    }
};

export const useGetOrderDeliveryDetail = () => {
    return useQuery(['orderdelivery'], getOrderDelivery); // 객체 형태를 제거하고 각각의 인수로 전달
};
