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
    router.push(`/search?q=${query}`);
  };

  const closeModal = () => {
    setShowSearchModal(false);
    document.body.classList.remove('modal-open');
  };

  return (
    <div>
      <form
        onSubmit={search}
        className="flex space-x-3 items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-md w-[327px] h-[47px] md:rounded-lg md:w-96 md:h-12 z-30 px-3"
      >
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          type="text"
          className="text-lg md:text-xl outline-none flex-1"
          autoFocus
        />
        <MagnifyingGlassIcon color="main" />
        <button hidden type="submit"></button>
      </form>
      <div onClick={closeModal} className="fixed inset-0 z-20 bg-black/70"></div>
    </div>
  );
}
