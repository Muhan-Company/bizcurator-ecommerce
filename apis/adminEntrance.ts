import axiosInstance from "./config";
import { useQuery } from "@tanstack/react-query";


export type EntrnaceProps = {
    id: number;                     //의뢰번호
    category: string;               //대분류명
    productDetail: string;         //제품 성분명
    establishYear: number               //기업년수
    ceoName: string;   //대표자명
    businessNumber: string;   //사업자번호
    phoneNumber: string;     //전화번호
    state: string;                 //승인여부상태
}

export type TableComponentProps = {
    displayData: EntrnaceProps[] | undefined;
    onSearch: (searchTerm: string) => void;
};

const getEntrnace = async () => {
    try {
        const { data } = await axiosInstance.get(`/api/admins/sell`);
        console.log(data);
        return data.result as
            {
                histories: EntrnaceProps[]
            };
    } catch (error) {
        console.log(error);
    }
};

export const useGetEntrnaceDetail = () => {
    return useQuery(['entrance'], getEntrnace); // 객체 형태를 제거하고 각각의 인수로 전달
};
