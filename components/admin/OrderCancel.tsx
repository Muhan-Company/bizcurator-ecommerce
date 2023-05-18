import { useQuery } from '@tanstack/react-query';
import { atom, useRecoilState } from 'recoil';
import { useEffect } from 'react';
import axios from 'axios';

// Recoil atom 정의
const selectedItemsState = atom<any[]>({
    key: 'selectedItemsState',
    default: [] // 선택된 항목을 저장하는 배열
});
type Item = {
    product: string;
    salesCompany: string;
    sales_type: string;
    order_number: string;
    order_date: string;
    cancel_state: string;
    order_count: number;
    order_amount: number;
    cancel_reason: string;
}
export default function OrderCancel() {

    const test = async () => {
        return await axios.get('http://43.201.195.195:8080/api/admins/applications/cancellations')
    }

    const { data, isLoading } = useQuery(["cancelTest"], test);
    console.log(data)

    // React Query의 useQuery 훅을 사용하여 데이터를 가져옴

    // Recoil 상태와 업데이트 함수 가져오기
    const [selectedItems, setSelectedItems] = useRecoilState(selectedItemsState);

    // 데이터를 가져오는 로직을 포함한 queryFn 정의

    // 취소 처리 상태 문자열 변환 함수
    const getCancelStateToString = (cancelState: string) => {
        // 취소 처리 상태에 따른 변환 로직 구현
        // 예시: "1" => "취소 완료", "2" => "처리 중" 등
        // 필요에 따라 실제 취소 처리 상태 문자열로 변환해주세요.
        return cancelState;
    };

    // 주문 취소 정보 컴포넌트
    const OrderCanceInfo: React.FC<{ value: string | number }> = ({ value }) => (
        <td className="px-5 py-5 border-r">{value}</td>
    );


    return (
        <>
            <div className="w-[1500px] rounded-[10px] mx-[60px] bg-[#fff] h-[600px] mt-[15px]">
                <div className="w-[1500px] mx-auto">
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

                            <tr className="border text-center h-20">
                                <td>
                                    <input
                                        type="checkbox"
                                    // onChange={(e) => handleCheckboxChange(e, index)}
                                    />
                                </td>
                                {/* <OrderCanceInfo value={item.product} />
                                    <OrderCanceInfo value={item.salesCompany} />
                                    <OrderCanceInfo value={item.sales_type} />
                                    <OrderCanceInfo value={item.order_number} />
                                    <OrderCanceInfo value={item.order_date} />
                                    <OrderCanceInfo
                                        value={getCancelStateToString(item.cancel_state)}
                                    />
                                    <OrderCanceInfo value={item.order_count} />
                                    <OrderCanceInfo value={item.order_amount} />
                                    <OrderCanceInfo value={item.cancel_reason} /> */}
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

type OrderCanceInfoProps = {
    value?: string | number;
};

function OrderCanceInfo({ value }: OrderCanceInfoProps) {
    return <td className="border">{value}</td>;
}
