import { useState } from 'react';
import { MagnifyingGlassIcon } from '../Icons';
import { useRouter } from 'next/router';
import { sortByState } from '@/atoms/sortByAtom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { searchModalState } from '@/atoms/modalAtoms';
import useModal from '@/hooks/useModal';

export default function SearchModal() {
  const [showSearchModal, setShowSearchModal] = useRecoilState(searchModalState);
  const { closeModal } = useModal(showSearchModal, setShowSearchModal);

  const [query, setQuery] = useState<string>('');

  const router = useRouter();

  const sortBy = useRecoilValue(sortByState);

  const search = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/products/results?search_query=${encodeURIComponent(query)}&sort=${sortBy}`);
    closeModal();
  };

  return (
    <>
      <form
        onSubmit={search}
        className="modal-contents flex space-x-3 items-center w-[327px] h-[47px] md:w-96 md:h-12 px-3"
      >
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          type="text"
          className="text-lg md:text-xl outline-none flex-1"
          autoFocus
        />
        <button type="submit">
          <MagnifyingGlassIcon color="main" />
        </button>
        <button hidden type="submit"></button>
      </form>
      <div onClick={closeModal} className="modal-overlay"></div>
    </>
  );
}
