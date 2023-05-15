import { dummy } from "./OrderDummy";
import getDelivreryStateToString from '@/utils/getDelivreryStateToString';


const dummyWithDeliveryState = dummy.map((order) => ({
    ...order,
    process_state: getDelivreryStateToString(order.process_state),
}));

export default function OrderDelivery() {
    return (
        <>
            <div className="w-[1500px] rounded-[10px] mx-[60px] bg-[#fff] h-[600px] mt-[15px]">
                <div className="w-[1300px] mx-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="border">
                                <th className="px-10 py-5 border-r">상품명</th>
                                <th className="px-10 py-5 border-r">제조사</th>
                                <th className="px-10 py-5 border-r">판매종류(대분류)</th>
                                <th className="px-10 py-5 border-r">주문번호</th>
                                <th className="px-10 py-5 border-r">주문일자</th>
                                <th className="px-10 py-5 border-r">처리상태</th>
                                <th className="px-10 py-5 border-r">주문갯수</th>
                                <th className="px-10 py-5 border-r">주문금액</th>
                                <th className="px-10 py-5 border-r">송장번호</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dummyWithDeliveryState.map((list, index) => (
                                <tr key={index} className="border">
                                    <OrderDeliveryInfo value={list.product} />
                                    <OrderDeliveryInfo value={list.salesCompany} />
                                    <OrderDeliveryInfo value={list.sales_type} />
                                    <OrderDeliveryInfo value={list.order_number} />
                                    <OrderDeliveryInfo value={list.order_date} />
                                    <OrderDeliveryInfo value={list.process_state} />
                                    <OrderDeliveryInfo value={list.order_count} />
                                    <OrderDeliveryInfo value={list.order_amount} />
                                    <OrderDeliveryInfo value={list.invoice_number} />
                                </tr>
                            ))}

                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

type OrderDeliveryInfoProps = {
    value?: string | number;
}

function OrderDeliveryInfo({ value }: OrderDeliveryInfoProps) {
    return (
        <>
            <td>{value}</td>
        </>
    )
}