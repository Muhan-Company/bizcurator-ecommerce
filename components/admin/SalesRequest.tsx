import { useGetSalesDetail } from "@/apis/adminSales";
import { useState, useEffect } from "react";
import axiosInstance from "@/apis/config";

export default function AdminSalesRequest() {
    const { data, isLoading, error } = useGetSalesDetail();
    const [selectedRow, setSelectedRow] = useState<number | null>(null);
    const [action, setAction] = useState<string>(""); // 추가: 액션 변수
    console.log(data);
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
            let rejectReason = "";
            if (action === "reject") {
                rejectReason = "거절사유는 ~~~입니다"
            } else {
                rejectReason = "승인사유는 ~~~입니다"
            }
            const postData = {
                ...selectedHistory,
                type: action,
                rejectReason,
                // 다른 필요한 데이터 속성 추가
            };
            try {
                const response = await axiosInstance.patch(
                    `/api/admins/make/${selectedHistory.id}`,
                    postData
                );
                console.log(response.data);
            } catch (error) {
                console.error(error);
            }
        }
    };

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: </div>;
    }
    return (
        <>
            <div className="w-[1500px] rounded-[10px] h-[630px] relative mx-[60px] bg-[#fff] mt-[15px]">
                <div className="w-[1400px] mx-auto pt-[1px]">
                    <table className="w-full mt-10 text-center">
                        <thead>
                            <tr className="border">
                                <th className="px-5 py-3 border-r">의뢰번호</th>
                                <th className="px-5 py-3 border-r">제작목적</th>
                                <th className="px-10 py-5 border-r">제품설명</th>
                                <th className="px-10 py-5 border-r">제품수량</th>
                                <th className="px-10 py-5 border-r">견적수량희망일</th>
                                <th className="px-10 py-5 border-r">제품배송희망일</th>
                                <th className="px-10 py-5 border-r">직통번호</th>
                                <th className="px-10 py-5 border-r">승인여부상태</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data?.histories?.map((i, index) => (
                                <tr
                                    className="border text-center h-[85px]"
                                    key={index}>
                                    <SalesInfo value={i.id} />
                                    <SalesInfo value={i.category} />
                                    <SalesInfo value={i.productDetail} />
                                    <SalesInfo value={i.quantity} />
                                    <SalesInfo value={i.desiredEstimateDate} />
                                    <SalesInfo value={i.desiredDeliveryDate} />
                                    <SalesInfo value={i.directPhoneNumber} />
                                    {i.state == "대기" ? (
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

type SalesInfoProps = {
    value?: string | number;
}

function SalesInfo({ value }: SalesInfoProps) {
    return (
        <>
            <td className="border">{value}</td>
        </>
    )
}