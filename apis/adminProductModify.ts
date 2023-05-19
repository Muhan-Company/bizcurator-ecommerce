import axiosInstance from "./config";
import { useQuery } from "@tanstack/react-query";

export type ProductInfo = {
    category_id: number;
    manufacturer_name: string;
    product_name: string;
    regular_price: number;
    discount_rate: number;
    min_quantity: number;
    max_quantity: number;
}

export interface ProductProps {
    list: ProductInfo[];
}

const getCancelRefundDetail = async () => {
    try {
        const { data } = await axiosInstance.get(`/api/admins/products`);
        return data.result as
            {
                products: ProductInfo[]
            };

    } catch (error) {
        console.log(error);
    }
};

export const useGetCancelRefundDetail = () => {
    return useQuery(['productRequest'], getCancelRefundDetail); // 객체 형태를 제거하고 각각의 인수로 전달
};
