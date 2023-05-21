import { useState } from 'react';
import { CloseIcon } from '../Icons';
import { useRouter } from 'next/router';
import { useSetRecoilState } from 'recoil';
import searchBarState from '@/atoms/searchBarAtom';

export default function SearchBar() {
  const [query, setQuery] = useState<string>('');
  const router = useRouter();
  const setShowSearchBar = useSetRecoilState(searchBarState);

  const search = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/search?q=${encodeURIComponent(query)}`);
  };

  return (
    <>
      <form
        onSubmit={search}
        className="flex space-x-3 items-center bg-gray_03 rounded-[10px] w-[327px] h-[43px] mx-6 mt-3 px-[16px] py-2"
      >
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          type="text"
          className="text-body-sm font-medium text-main outline-none flex-1 bg-transparent"
          autoFocus
        />
        <button onClick={() => setShowSearchBar(false)}>
          <CloseIcon color="#1c1c1c" width="16" height="16" />
        </button>
        <button hidden type="submit"></button>
      </form>
    </>
  );
}
