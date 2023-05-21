import { useState } from 'react';
import { CloseIcon } from '../Icons';
import { useRouter } from 'next/router';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import searchBarState from '@/atoms/searchBarAtom';
import { sortByState } from '@/atoms/sortByAtom';

export default function SearchBar() {
  const [query, setQuery] = useState<string>('');
  const router = useRouter();

  const sortBy = useRecoilValue(sortByState);
  const setShowSearchBar = useSetRecoilState(searchBarState);

  const search = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/products/results?search_query=${encodeURIComponent(query)}&sort=${sortBy.english}`);
    setShowSearchBar(false);
  };

  return (
    <>
      <form
        onSubmit={search}
        className="flex space-x-3 items-center bg-gray_03 rounded-[10px] w-[327px] mx-auto h-[43px] mt-3 px-4 py-2"
      >
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          type="text"
          className="text-body-sm font-medium text-main outline-none flex-1 bg-transparent"
          autoFocus
        />
        <button type="button" onClick={() => setShowSearchBar(false)}>
          <CloseIcon color="#1C1C1C" width="16" height="16" />
        </button>
        <button hidden type="submit"></button>
      </form>
    </>
  );
}
