import axiosInstance from "./config";
import { useQuery } from "@tanstack/react-query";

export type ProductModifyInfo = {
    id: number;
    manufacturer_name: string;
    product_name: string;
    regular_price: number;
    discount_rate: number;
    min_quantity: number;
    max_quantity: number;
}

export interface ProductModifyProps {
    list: ProductModifyInfo[];
}

const getModifyDetail = async () => {
    try {
        const { data } = await axiosInstance.get(`/api/admins/products`);
        return data.result as
            {
                products: ProductModifyInfo[]
            };

    } catch (error) {
        console.log(error);
    }
};

export const useGetModifyDetail = () => {
    return useQuery(['modify'], getModifyDetail); // 객체 형태를 제거하고 각각의 인수로 전달
};
