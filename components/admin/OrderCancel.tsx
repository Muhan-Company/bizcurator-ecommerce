import { dummy } from "./OrderDummy";


export default function AdminOrderCancel() {
    return (
        <>
            <div className="w-[1500px] rounded-[10px] mx-[60px] bg-[#fff] h-[600px] mt-[15px]">
                <div className="w-[1300px] mx-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="border">
                                <th className="py-5 border-r">선택</th>
                                <th className="px-10 py-5 border-r">상품명</th>
                                <th className="px-10 py-5 border-r">제조사</th>
                                <th className="px-10 py-5 border-r">판매종류(대분류)</th>
                                <th className="px-10 py-5 border-r">주문번호</th>
                                <th className="px-10 py-5 border-r">주문일자</th>
                                <th className="px-10 py-5 border-r">취소처리상태</th>
                                <th className="px-10 py-5 border-r">주문갯수</th>
                                <th className="px-10 py-5 border-r">주문금액</th>
                                <th className="px-10 py-5 border-r">사유</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dummy.map((i, index) => (
                                <tr
                                    className="border"
                                    key={index}>
                                    <td>체크박스</td>
                                    <OrderCanceInfo value={i.product} />
                                    <OrderCanceInfo value={i.salesCompany} />
                                    <OrderCanceInfo value={i.sales_type} />
                                    <OrderCanceInfo value={i.order_number} />
                                    <OrderCanceInfo value={i.order_date} />
                                    <td>처리상태</td>
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
            <td>{value}</td>
        </>
    )
}