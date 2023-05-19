import { useGetOrderDeliveryDetail } from '@/apis/adminOrderDelivery';
import getDelivreryStateToString from '@/utils/getDelivreryStateToString';


// const dummyWithDeliveryState = dummy.map((order) => ({
//     ...order,
//     process_state: getDelivreryStateToString(order.process_state),
// }));

export default function OrderDelivery() {

    const { data, isLoading, error } = useGetOrderDeliveryDetail();
    console.log(data);
    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: </div>;
    }


    return (
        <>
            <div className="w-[1500px] rounded-[10px] mx-[60px] bg-[#fff] h-[600px] mt-[15px]">
                <div className="w-[1400px] mx-auto">
                    <table className="w-full mt-10">
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
                            {data?.histories?.map((list, index) => (
                                <tr key={index} className="border text-center h-20 text-sm">
                                    <OrderDeliveryInfo value={list.productName} />
                                    <OrderDeliveryInfo value={list.manufacturerName} />
                                    <OrderDeliveryInfo value={list.productCategory} />
                                    <OrderDeliveryInfo value={list.orderId} />
                                    <OrderDeliveryInfo value={list.deliveryTime} />
                                    <OrderDeliveryInfo value={list.deliveryState} />
                                    <OrderDeliveryInfo value={list.quantity} />
                                    <OrderDeliveryInfo value={list.cost} />
                                    <OrderDeliveryInfo value={list.orderId} />
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
            <td className="border">{value}</td>
        </>
    )
}