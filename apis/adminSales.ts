import axiosInstance from "./config";
import { useQuery } from "@tanstack/react-query";

export type SalesProps = {
    id: number;                     //의뢰번호
    category: string;               //제작목적
    productDetail: string;         //제품 설명
    quantity: number               //제품수량
    desiredEstimateDate: string;   //견적수량희망일
    desiredDeliveryDate: string;   //물품수령희망일
    directPhoneNumber: string;     //직통번호
    state: string;                 //승인여부상태
}

export type TableComponentProps = {
    displayData: SalesProps[] | undefined;
    onSearch: (searchTerm: string) => void;
};

const getSales = async () => {
    try {
        const { data } = await axiosInstance.get(`/api/admins/make`);
        console.log(data);
        return data.result as
            {
                histories: SalesProps[]
            };
    } catch (error) {
        console.log(error);
    }
};

export const useGetSalesDetail = () => {
    return useQuery(['sales'], getSales); // 객체 형태를 제거하고 각각의 인수로 전달
};
