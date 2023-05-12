import { useRouter } from 'next/router';
import { CheckIcon } from '../Icons';
import { SortByElment } from '../products/Sort';

interface SortModalProps {
  sortByList: SortByElment[];
  setShowSortModal: React.Dispatch<React.SetStateAction<boolean>>;
  sortBy: SortByElment;
  setSortBy: React.Dispatch<React.SetStateAction<SortByElment>>;
}

export default function SortModal({ sortByList, setShowSortModal, sortBy, setSortBy }: SortModalProps) {
  const router = useRouter();
  const categoryId = router.query.category_id;

  const closeModal = () => {
    setShowSortModal(false);
    document.body.classList.remove('modal-open');

    router.push(`/products/categories/${categoryId}?sort=${encodeURIComponent(sortBy.english)}`);
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
      <div onClick={closeModal} className="fixed inset-0 z-20 bg-black/70"></div>
    </>
  );
}
