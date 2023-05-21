import axiosInstance from "./config";
import { useQuery } from "@tanstack/react-query";

export type VendorProps = {
    businessName: string;           //상호명
    category: string;               //생산종류
    businessNumber: number;         //사업자번호
    ceoName: string;                //대표자 명
    managerPhoneNumber: string;     //담당자 번호
    companyAge: number;             //기업년수
}

export interface VendorItemProps {
    list: VendorProps[];
}

const getVendorList = async () => {
    try {
        const { data } = await axiosInstance.get(`/api/admins/partners`);
        console.log(data.result);
        return data.result as
            {
                list: VendorProps[]
            };
    } catch (error) {
        console.log(error);
    }
};

export const useGetVendorListDetail = () => {
    return useQuery(['vendorlist'], getVendorList); // 객체 형태를 제거하고 각각의 인수로 전달
};
