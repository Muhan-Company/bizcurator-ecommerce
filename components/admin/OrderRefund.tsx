import { useGetOrderRefundDetail, OrderRefundItem } from "@/apis/adminRefund"
import SearchForm from "./AdminSearch";
import { useState } from "react";
import { OrderRefundManageApi } from "@/apis/SearchFormApi";

export default function AdminOrderRefund() {
    const [searchResult, setSearchResult] = useState([]); // 검색 결과를 저장할 상태
    const handleSearch = (data: any) => {
        setSearchResult(data.histories); // 검색 결과를 저장
    }
    const { data, isLoading, error } = useGetOrderRefundDetail();
    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: </div>;
    }
    console.log(data);

    // 취소 처리 상태 문자열 변환 함수
    const getRefundStateToString = (refundState: string) => {
        // 취소 처리 상태에 따른 변환 로직 구현
        // 예시: "1" => "취소 완료", "2" => "처리 중" 등
        // 필요에 따라 실제 취소 처리 상태 문자열로 변환해주세요.
        return refundState;
    };

    const displayData = searchResult.length > 0 ? searchResult : data?.histories;
    return (
        <>
            <SearchForm onSearch={handleSearch} api={OrderRefundManageApi} />
            <div className="w-[1500px] rounded-[10px] mx-[60px] bg-[#fff] h-[630px] mt-[15px]">
                <div className="w-[1300px] mx-auto py-[15px]">
                    <table className="w-full mt-10">
                        <thead>
                            <tr className="border">
                                <th className="py-3 border-r">선택</th>
                                <th className="px-5 py-5 border-r">상품명</th>
                                <th className="px-5 py-5 border-r">제조사</th>
                                <th className="px-5 py-5 border-r">판매종류(대분류)</th>
                                <th className="px-5 py-5 border-r">주문번호</th>
                                <th className="px-5 py-5 border-r">주문일자</th>
                                <th className="px-5 py-5 border-r">취소처리상태</th>
                                <th className="px-5 py-5 border-r">주문갯수</th>
                                <th className="px-5 py-5 border-r">주문금액</th>
                                <th className="px-5 py-5 border-r">사유</th>
                            </tr>
                        </thead>
                        <tbody>
                            {displayData?.map((item: OrderRefundItem, index) => (
                                <tr
                                    key={index}
                                    className="border text-center h-20">
                                    <td>
                                        <input
                                            type="checkbox"
                                        // onChange={(e) => handleCheckboxChange()}
                                        />
                                    </td>
                                    <OrderRefundInfo value={item.productName} />
                                    <OrderRefundInfo value={item.manufacturerName} />
                                    <OrderRefundInfo value={item.productCategory} />
                                    <OrderRefundInfo value={item.applicationId} />
                                    <OrderRefundInfo value={item.orderTime} />
                                    <OrderRefundInfo
                                        value={getRefundStateToString(item.state)}
                                    />
                                    <OrderRefundInfo value={item.quantity} />
                                    <OrderRefundInfo value={item.cost} />
                                    <OrderRefundInfo value={item.opinionCategory} />
                                </tr>

                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

type OrderCanceInfoProps = {
    value?: string | number;
};

function OrderRefundInfo({ value }: OrderCanceInfoProps) {
    return <td className="border">{value}</td>;
}
