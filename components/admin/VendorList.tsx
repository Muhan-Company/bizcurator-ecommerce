import { useGetVendorListDetail } from "@/apis/adminVendorList"
import { useState } from "react";
import { VendorApi } from "@/apis/SearchFormApi";
import SearchForm from "./AdminSearch";

export default function VendorList() {
    const [searchResult, setSearchResult] = useState([]); // 검색 결과를 저장할 상태
    const handleSearch = (data: any) => {
        setSearchResult(data.histories); // 검색 결과를 저장
    }
    const { data, isLoading, error } = useGetVendorListDetail();
    console.log(data);
    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: </div>;
    }
    const displayData = searchResult.length > 0 ? searchResult : data?.list;
    return (
        <>
            <SearchForm onSearch={handleSearch} api={VendorApi} />

            <div className="w-[1500px] rounded-[10px] mx-[60px] bg-[#fff] h-[600px] mt-[15px]">
                <div className="w-[1400px] mx-auto">
                    <table className="w-full mt-10">
                        <thead>
                            <tr className="border">
                                <th className="px-10 py-5 border-r">No.</th>
                                <th className="px-10 py-5 border-r">상품명</th>
                                <th className="px-10 py-5 border-r">생산종류</th>
                                <th className="px-10 py-5 border-r">사업자번호</th>
                                <th className="px-10 py-5 border-r">대표자 명</th>
                                <th className="px-10 py-5 border-r">담당자 번호</th>
                                <th className="px-10 py-5 border-r">설립연도</th>
                            </tr>
                        </thead>
                        <tbody>
                            {displayData?.map((i, index) => (
                                <tr
                                    className="border text-center h-[85px]"
                                    key={index}>
                                    <VendorInfo value={i.businessName} />
                                    <VendorInfo value={i.category} />
                                    <VendorInfo value={i.businessNumber} />
                                    <VendorInfo value={i.ceoName} />
                                    <VendorInfo value={i.managerPhoneNumber} />
                                    <VendorInfo value={i.companyAge} />
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

type VendorListInfoProps = {
    value?: string | number;
}

function VendorInfo({ value }: VendorListInfoProps) {
    return (
        <>
            <td className="border">{value}</td>
        </>
    )
}