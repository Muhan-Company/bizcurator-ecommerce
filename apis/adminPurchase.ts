import axiosInstance from "./config";
import { useQuery } from "@tanstack/react-query";

export type PurchaseProps = {
    id: number;                     //의뢰번호
    category: string;               //물품 대분류
    productDetail: string;         //제품성분명
    quantity: number               //제품수량
    desiredEstimateDate: string;   //견적수량희망일
    desiredDeliveryDate: string;   //물품수령희망일
    directPhoneNumber: string;     //직통번호
    state: string;                 //승인여부상태
}

export type TableComponentProps = {
    displayData: PurchaseProps[] | undefined;
    onSearch: (searchTerm: string) => void;
};

const getPurchase = async () => {
    try {
        const { data } = await axiosInstance.get(`/api/admins/purchases`);
        console.log(data);
        return data.result as
            {
                histories: PurchaseProps[]
            };
    } catch (error) {
        console.log(error);
    }
};

export const useGetPurchaseDetail = () => {
    return useQuery(['purchase'], getPurchase); // 객체 형태를 제거하고 각각의 인수로 전달
};
