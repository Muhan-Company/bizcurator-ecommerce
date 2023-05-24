import { useGetEntrnaceDetail } from "@/apis/adminEntrance";
import { useState, useEffect } from "react";
import axiosInstance from "@/apis/config";
import SearchForm from "./AdminSearch";
import { EntranceApi } from "@/apis/SearchFormApi";

export default function AdminEntranceRequest() {
    const [searchResult, setSearchResult] = useState([]); // 검색 결과를 저장할 상태
    const handleSearch = (data: any) => {
        setSearchResult(data.histories); // 검색 결과를 저장
    }
    const { data, isLoading, error } = useGetEntrnaceDetail();
    const [selectedRow, setSelectedRow] = useState<number | null>(null);
    const [action, setAction] = useState<string>(""); // 추가: 액션 변수


    const handleAction = async (index: number, action: string) => {
        setSelectedRow(index);
        setAction(action);
    };

    useEffect(() => {
        if (selectedRow !== null) {
            sendAPIRequest();
        }
    }, [selectedRow]);

    const sendAPIRequest = async () => {
        if (data && data.histories && selectedRow !== null) {
            const selectedHistory = data.histories[selectedRow];
            const postData = {
                ...selectedHistory,
                type: action,
                rejectReason: "1"
                // 다른 필요한 데이터 속성 추가
            };

            try {
                const response = await axiosInstance.patch(
                    `/api/admins/sell/${selectedHistory.id}`,
                    postData
                );
                console.log(response.data);
            } catch (error) {
                console.error(error);
            }
        }
    };
    console.log(data);
    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: </div>;
    }
    const displayData = searchResult.length > 0 ? searchResult : data?.histories;
    return (
        <>
            <SearchForm onSearch={handleSearch} api={EntranceApi} />
            <div className="w-[1500px] rounded-[10px] h-[630px] relative mx-[60px] bg-[#fff] mt-[15px]">
                <div className="w-[1400px] mx-auto pt-[1px]">
                    <table className="w-full mt-10 text-center">
                        <thead>
                            <tr className="border">
                                <th className="px-5 py-3 border-r">의뢰번호</th>
                                <th className="px-10 py-5 border-r">생산종류 카테고리</th>
                                <th className="px-10 py-5 border-r">제품설명</th>
                                <th className="px-10 py-5 border-r">기업년수</th>
                                <th className="px-10 py-5 border-r">대표자명</th>
                                <th className="px-10 py-5 border-r">사업자번호</th>
                                <th className="px-10 py-5 border-r">전화번호</th>
                                <th className="px-10 py-5 border-r">승인여부</th>
                            </tr>
                        </thead>
                        <tbody>
                            {displayData?.map((i, index) => (
                                <tr
                                    className="border text-center h-[85px]"
                                    key={index}>
                                    <EntrnaceInfo value={i.id} />
                                    <EntrnaceInfo value={i.category} />
                                    <EntrnaceInfo value={i.productDetail} />
                                    <EntrnaceInfo value={i.establishYear} />
                                    <EntrnaceInfo value={i.ceoName} />
                                    <EntrnaceInfo value={i.businessNumber} />
                                    <EntrnaceInfo value={i.phoneNumber} />
                                    {i.state === "대기" ? (
                                        <td>
                                            <button
                                                type="button"
                                                className="w-3/5 bg-black rounded-md py-1 text-[#fff] my-1 hover:bg-gray-500"
                                                onClick={() => handleAction(index, "approve")}
                                            >승인</button>
                                            <button
                                                type="button"
                                                className="w-3/5 bg-black rounded-md py-1 text-[#fff] my-1 hover:bg-gray-500"
                                                onClick={() => handleAction(index, "reject")}
                                            >거절</button>
                                        </td>
                                    ) : i.state === "승인" ? (
                                        <td>승인 완료</td>
                                    ) : (
                                        <td>승인 거절</td>
                                    )}

                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

type EntrnaceInfoProps = {
    value?: string | number;
}

function EntrnaceInfo({ value }: EntrnaceInfoProps) {
    return (
        <>
            <td className="border">{value}</td>
        </>
    )
}