export default function AdminSearch() {
    return (
        <>
            <div className="w-[1500px] rounded-[10px] bg-[#fff] p-[30px] mt-[15px] mx-[60px]">
                <div>
                    <span className="mr-24">검색어</span>
                    <input
                        className="w-[1200px] border py-5 rounded-[10px] mr-3"
                    />
                    <button className="p-5 border border-[#999]  rounded-[10px]">검색</button>
                </div>
            </div>
        </>
    )
}