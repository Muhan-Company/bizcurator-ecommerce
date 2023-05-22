import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';


type SearchFormProps = {
    onSearch: (data: any) => void;
    api: (searchTerm: string) => Promise<any>; // 새로운 `api` prop
};


const SearchForm = ({ onSearch, api }: SearchFormProps) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = useMutation(async () => {
        const data = await api(searchTerm);
        console.log(data);
        return data;
    }, {
        onSuccess: (data) => {
            onSearch(data);
            console.log(data);
        }
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(api);
        handleSearch.mutate();
    };

    return (
        <div className='w-[1500px] bg-[#fff] mx-[60px] p-[30px] rounded-xl mt-5'>
            <form
                className='flex items-center justify-around'
                onSubmit={handleSubmit}>
                <h1>검색어</h1>
                <input
                    type="text"
                    placeholder="상품명으로 검색"
                    value={searchTerm}
                    className='border h-[50px] w-[1200px] text-[18px]'
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button
                    className='w-[70px] h-[50px] rounded-md border bg-[#f7f8f8] border-[#2f20d3]'
                    type="submit">검색</button>
            </form>
        </div>
    );
};

export default SearchForm;
