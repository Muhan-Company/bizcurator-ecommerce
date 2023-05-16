import AdminSearch from "./AdminSearch";

export default function ProductModify() {
    return (
        <>
            <AdminSearch />
            <div className="w-[1500px] mx-[60px] mt-[15px]">
                <div className="rounded-xl bg-[#fff] my-3 pl-[30px] py-[30px]">
                    <div>
                        <button
                            className="w-[140px] h-[40px] border"
                        >물품 수정</button>
                        <table className="w-full">
                            <thead>
                                <tr className="border">
                                    <th className="py-5 border-r w-[50px]">선택</th>
                                    <th className="px-10 py-5 border-r">카테고리</th>
                                    <th className="px-10 py-5 border-r">상품명</th>
                                    <th className="px-10 py-5 border-r">판매가격</th>
                                    <th className="px-10 py-5 border-r">제조사</th>
                                </tr>
                            </thead>
                            <tbody>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}