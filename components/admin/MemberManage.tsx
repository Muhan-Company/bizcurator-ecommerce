import { dummyData } from "./OrderDummy";



export default function AdminMemberManage() {
    return (
        <>
            <div className="w-[1500px] rounded-[10px] mx-[60px] bg-[#fff] h-[600px] mt-[15px]">
                <div className="w-[1300px] mx-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="border">
                                <th className="px-10 py-5 border-r">No.</th>
                                <th className="px-10 py-5 border-r">아이디(email)</th>
                                <th className="px-10 py-5 border-r">상호명</th>
                                <th className="px-10 py-5 border-r">사업자 번호</th>
                                <th className="px-10 py-5 border-r">담당자 번호</th>
                                <th className="px-10 py-5 border-r">담당자 이름</th>
                                <th className="px-10 py-5 border-r">주소</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dummyData.map((i, index) => (
                                <tr
                                    className="border"
                                    key={index}>
                                    <OrderCanceInfo value={i.id} />
                                    <OrderCanceInfo value={i.email} />
                                    <OrderCanceInfo value={i.name} />
                                    <OrderCanceInfo value={i.registrationNumber} />
                                    <OrderCanceInfo value={i.contactNumber} />
                                    <OrderCanceInfo value={i.contactName} />
                                    <OrderCanceInfo value={i.address} />
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