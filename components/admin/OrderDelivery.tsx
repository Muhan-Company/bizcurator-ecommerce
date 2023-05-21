import { useGetOrderDeliveryDetail } from '@/apis/adminOrderDelivery';
import SearchForm from './AdminSearch';
import { useState } from 'react';
import { deliveryApi } from '@/apis/deliveryApi';
import TableComponent from './TableComponent';

export default function OrderDelivery() {
    const [searchResult, setSearchResult] = useState([]);
    const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 상태 변수를 추가합니다.

    const { data, isLoading, error } = useGetOrderDeliveryDetail();

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: </div>;
    }

    const handleSearch = (data: any) => {
        setSearchResult(data.histories);
        setCurrentPage(1); // 검색 시 현재 페이지를 1로 초기화합니다.
    };


    const PageEndIndex = data?.histories.length ?? 0;
    const startIndex = (currentPage - 1) * PageEndIndex;
    const endIndex = startIndex + PageEndIndex;

    const displayData =
        searchResult.length > 0 ?
            searchResult.slice(startIndex, endIndex)
            :
            data?.histories.slice(startIndex, endIndex);
    return (
        <>
            <SearchForm onSearch={handleSearch} api={deliveryApi} />
            <div className="w-[1500px] rounded-[10px] h-[630px] relative mx-[60px] bg-[#fff] mt-[15px]">
                <div className="w-[1400px] mx-auto pt-[1px]">
                    <TableComponent data={data} displayData={displayData} />
                </div>
            </div>
        </>
    );
}