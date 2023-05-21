import { useRouter } from 'next/router';
import { CheckIcon } from '../Icons';
import { sortByList, sortByState } from '@/atoms/sortByAtom';
import { useRecoilState } from 'recoil';

export default function SortModal({
  setShowSortModal,
}: {
  setShowSortModal: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [sortBy, setSortBy] = useRecoilState(sortByState);

  const router = useRouter();
  const categoryId = router.query.category_id;
  const searchQuery = router.query.search_query;

  const closeModal = () => {
    setShowSortModal(false);
    document.body.classList.remove('modal-open');

    if (categoryId) {
      router.push(`/products/categories/${categoryId}?sort=${encodeURIComponent(sortBy.english)}`);
    }

    if (searchQuery) {
      router.push(`/results?search_query=${searchQuery}&sort=${encodeURIComponent(sortBy.english)}`);
    }
  };

  return (
    <>
      <ul className="p-5 fixed bottom-0 h-[175px] rounded-t-[10px] z-30 left-0 right-0 bg-white flex flex-col justify-between">
        {sortByList.map((el) => (
          <li key={el.id} onClick={() => setSortBy(el)} className="flex border-b border-gray_02">
            <span className="font-normal text-button-xs grow">{el.sortName}</span>
            {sortBy.id === el.id && <CheckIcon />}
          </li>
        ))}
      </ul>
      <div onClick={closeModal} className="modal-overlay"></div>
    </>
  );
}
