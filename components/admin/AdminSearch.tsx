import { useState } from "react"

type ProductSearch = {
    id: number;
    product: string;
}

type SearchProps = {
    queryKey: string;
    searchUrl: string;
}


function AdminSearch({
    queryKey,
    searchUrl
}:
    SearchProps) {
    // const [searchText, setSearchText] = useState("");
    // const { isLoading, isError, data } = useQuery<ProductSearch[], Error>(queryKey, () => {
    //     if (searchText.trim() === "") {
    //         return Promise.resolve([]);
    //     }
    //     return fetch(`${searchUrl}?searchText=${searchText}`).then((res) => res.json());
    // });

    const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // 검색 API 호출
    }
    // const [searchTerm, setSearchTerm] = useState('');

    // const { isLoading, isError, data } = useQuery<ProductSearch[]>(queryKey, async () => {
    //     const response = await fetch(`${searchUrl}?q=${encodeURIComponent(searchTerm)}`);
    //     const data = await response.json();
    //     return data as ProductSearch[];
    // });

    // if (isLoading) {
    //     return <div>Loading...</div>;
    // }

    // if (isError) {
    //     return <div>Error</div>;
    // }

    return (
        <>
            {/* <form onSubmit={handleSearch}>
                <div className="w-[1500px] rounded-[10px] bg-[#fff] p-[30px] mt-[15px] mx-[60px]">
                    <div>
                        <span className="mr-24">검색어</span>
                        <input
                            className="w-[1200px] border py-5 rounded-[10px] mr-3"
                            value={searchText}
                            onChange={(e) => setSearchText(e.target.value)}
                        />
                        <button className="p-5 border border-[#999]  rounded-[10px]">검색</button>
                    </div>
                </div>
            </form>
            {isLoading && <div>Loading...</div>}
            {isError && <div>Error fetching data</div>}
            {data && data.map((product) => (
                <div key={product.id}>{product.product}</div>
            ))} */}
        </>
    )
}

export default AdminSearch;