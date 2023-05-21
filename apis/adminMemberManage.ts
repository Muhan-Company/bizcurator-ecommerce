import axiosInstance from "./config";
import { useQuery } from "@tanstack/react-query";


export type MemberManageProps = {
    userName: string;           //아이디
    businessName: string;       //상호명
    businessNumber: string;     //사업자번호
    managerPhoneNumber: string; //담당자번호
    manager: string;            //담당자이름
    address: string;            //주소
}

export type TableComponentProps = {
    displayData: MemberManageProps[] | undefined;
    onSearch: (searchTerm: string) => void;
};

export interface MemberManageItemProps {
    list: MemberManageProps[];
}

const getMemberManage = async () => {
    try {
        const { data } = await axiosInstance.get(`/api/admins/users`);
        console.log(data);
        return data.result as
            {
                histories: MemberManageProps[]
            };
    } catch (error) {
        console.log(error);
    }
};

export const useMemberManageDetail = () => {
    return useQuery(['membermanage'], getMemberManage); // 객체 형태를 제거하고 각각의 인수로 전달
};
