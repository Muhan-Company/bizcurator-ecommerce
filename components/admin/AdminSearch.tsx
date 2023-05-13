import { useState } from "react"
import { useQuery } from "react-query";

type ProductSearch = {
    id: number;
    product: string;
}

type SearchProps = {
    queryKey: string;
    searchUrl: string;
}

function AdminSearch({ queryKey, searchUrl }: SearchProps) {

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

export default AdminSearch;