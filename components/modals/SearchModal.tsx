import { useState } from 'react';
import { MagnifyingGlassIcon } from '../Icons';
import { useRouter } from 'next/router';

export default function SearchModal({
  setShowSearchModal,
}: {
  setShowSearchModal: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [query, setQuery] = useState<string>('');

  const router = useRouter();
  const search = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/products/search?q=${encodeURIComponent(query)}`);
  };

  const closeModal = () => {
    setShowSearchModal(false);
    document.body.classList.remove('modal-open');
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
