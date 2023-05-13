import { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '../Icons';
import { createPortal } from 'react-dom';
import SortModal from '../modal/SortModal';

export interface SortByElment {
  id: number;
  sortName: string;
}

export default function Sort() {
  const sortByList = [
    { id: 1, sortName: '신상품' },
    { id: 2, sortName: '인기순' },
    { id: 3, sortName: '낮은 가격' },
    { id: 4, sortName: '높은 가격' },
  ];
  const [sortBy, setSortBy] = useState<SortByElment>(sortByList[0]);
  const [showSortModal, setShowSortModal] = useState<boolean>(false);

  const openModal = () => {
    setShowSortModal(true);
    document.body.classList.add('modal-open');
  };

  return (
    <>
      <div className="flex items-center absolute right-3 -top-10 cursor-pointer" onClick={openModal}>
        <span className="font-noraml text-main text-label-sm"> {sortBy.sortName}</span>
        {showSortModal ? <ChevronUpIcon color="#1C1C1C" /> : <ChevronDownIcon color="#1C1C1C" />}
      </div>
      {showSortModal &&
        createPortal(
          <SortModal
            setShowSortModal={setShowSortModal}
            sortBy={sortBy}
            setSortBy={setSortBy}
            sortByList={sortByList}
          />,
          document.body,
        )}
    </>
  );
}
