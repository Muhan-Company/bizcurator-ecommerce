import { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '../Icons';
import { createPortal } from 'react-dom';
import SortModal from '../modals/SortModal';
import { sortByState } from '@/atoms/sortByAtom';
import { useRecoilValue } from 'recoil';

export default function Sort() {
  const sortBy = useRecoilValue(sortByState);
  const [showSortModal, setShowSortModal] = useState<boolean>(false);

  const openModal = () => {
    setShowSortModal(true);
    document.body.classList.add('modal-open');
  };

  return (
    <div className="mx-3">
      <div className="flex items-center justify-end cursor-pointer" onClick={openModal}>
        <span className="font-noraml text-main text-label-sm"> {sortBy.sortName}</span>
        {showSortModal ? <ChevronUpIcon color="#1C1C1C" /> : <ChevronDownIcon color="#1C1C1C" />}
      </div>
      {showSortModal && createPortal(<SortModal setShowSortModal={setShowSortModal} />, document.body)}
    </div>
  );
}
