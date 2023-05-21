import { useGetEntrnaceDetail } from "@/apis/adminEntrance";

export default function AdminEntranceRequest() {
    const { data, isLoading, error } = useGetEntrnaceDetail();

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
                            {data?.histories.map((i, index) => (
                                <tr
                                    className="border text-center"
                                    key={index}>
                                    <EntrnaceInfo value={i.id} />
                                    <EntrnaceInfo value={i.category} />
                                    <EntrnaceInfo value={i.productDetail} />
                                    <EntrnaceInfo value={i.establishYear} />
                                    <EntrnaceInfo value={i.ceoName} />
                                    <EntrnaceInfo value={i.businessNumber} />
                                    <EntrnaceInfo value={i.phoneNumber} />
                                    <EntrnaceInfo value={i.state} />

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