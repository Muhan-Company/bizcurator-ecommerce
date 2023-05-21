import { useGetPurchaseDetail, PurchaseProps } from "@/apis/adminPurchase"
import { useState, useEffect } from "react";
import axiosInstance from "@/apis/config";

export default function AdminPurchaseRequest() {
    const { data, isLoading, error } = useGetPurchaseDetail();
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
                    `/api/admins/purchases/${selectedHistory.id}`,
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
                                <th className="px-10 py-5 border-r">구매희망품목</th>
                                <th className="px-10 py-5 border-r">제품성분명</th>
                                <th className="px-10 py-5 border-r">제품수량</th>
                                <th className="px-10 py-5 border-r">견적수량희망일</th>
                                <th className="px-10 py-5 border-r">제품배송희망일</th>
                                <th className="px-10 py-5 border-r">직통번호</th>
                                <th className="px-10 py-5 border-r">승인여부</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data?.histories.map((i, index) => (
                                <tr
                                    className="border text-center h-[85px]"
                                    key={index}>
                                    <PurchaseInfo value={i.id} />
                                    <PurchaseInfo value={i.category} />
                                    <PurchaseInfo value={i.productDetail} />
                                    <PurchaseInfo value={i.quantity} />
                                    <PurchaseInfo value={i.desiredEstimateDate} />
                                    <PurchaseInfo value={i.desiredDeliveryDate} />
                                    <PurchaseInfo value={i.directPhoneNumber} />
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
                                    {/* <PurchaseInfo value={i.state} /> */}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

type PurchaseInfoProps = {
    value?: string | number;
}

function PurchaseInfo({ value }: PurchaseInfoProps) {
    return (
        <>
            <td className="border">{value}</td>
        </>
    )
}