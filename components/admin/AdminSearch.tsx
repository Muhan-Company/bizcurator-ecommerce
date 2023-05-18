import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

///api/admins/orders?page={page(정수형)}&search={search}
const SearchForm: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const path = "http://43.201.195.195:8080"
    const router = useRouter();
    const { data, isLoading, isError, error } = useQuery(
        ['search', searchTerm],
        async () => {
            if (searchTerm) {
                const response = await axios.post(`${path}/api/admins/orders?page=1&search=${searchTerm}`)
                if (response.status != 200) {
                    throw new Error("검색 실패");
                }
                return response.data;
            }
            return null;
        }
    )

    const handleSearch = (event: React.FormEvent) => {
        event.preventDefault();
        // 검색을 수행하거나 다른 작업을 수행할 수 있습니다.
        // 예를 들어, 검색 결과를 가져오는 API 호출을 여기에 추가할 수 있습니다.
        router.push(`?search=${searchTerm}`);
    };


    return (
        <div>
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button type="submit">검색</button>
                {isLoading && <div>검색 중...</div>}
                {isError && <div>검색에 오류가 발생했습니다: {(error as Error)?.message}</div>}
                {data && (
                    <div>
                        검색 결과:
                        <ul>
                            {data.results.map((result: any) => (
                                <li key={result.id}>{result.name}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </form>
        </div>
    );
};
export default SearchForm;
