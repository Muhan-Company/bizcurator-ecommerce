import { dummy } from "./OrderDummy";
import getCancelStateToString from "@/utils/getCancelStateToString";
import { atom, useRecoilState } from "recoil";
import selectItemState from "@/atoms/adminCancelAtoms";


const dummyWithDeliveryState = dummy.map((order) => ({
    ...order,
    cancel_state: getCancelStateToString(order.cancel_state),
}));


export default function AdminOrderCancel() {

    const [selectItem, setSelectItem] = useRecoilState(selectItemState);

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>, index) => {
        if (e.target.checked) {
            setSelectItem([...selectItem, index])
        } else {

        }
    }

    return (
        <>
            <div className="w-[1500px] rounded-[10px] mx-[60px] bg-[#fff] h-[600px] mt-[15px]">
                <div className="w-[1500px] mx-auto">

                    <div>
                        <button
                            className="w-[140px] border h-[40px] hover:bg-slate-800 hover:text-[#f6f6f6] duration-150 transition-colors"
                        >취소 승인</button>
                        <button
                            className="w-[140px] border h-[40px] ml-5 hover:bg-slate-800 hover:text-[#fff] duration-150 transition-colors"
                        >취소 거부</button>
                    </div>

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
                            {dummyWithDeliveryState.map((i, index) => (
                                <tr
                                    className="border text-center h-20"
                                    key={index}>
                                    <td>
                                        <input type="checkbox" />
                                    </td>
                                    <OrderCanceInfo value={i.product} />
                                    <OrderCanceInfo value={i.salesCompany} />
                                    <OrderCanceInfo value={i.sales_type} />
                                    <OrderCanceInfo value={i.order_number} />
                                    <OrderCanceInfo value={i.order_date} />
                                    <OrderCanceInfo value={i.cancel_state} />
                                    <OrderCanceInfo value={i.order_count} />
                                    <OrderCanceInfo value={i.order_amount} />
                                    <td>사유</td>
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
}

function OrderCanceInfo({ value }: OrderCanceInfoProps) {
    return (
        <>
            <td className="border">{value}</td>
        </>
    )
}