import Link from 'next/link';
import { HomeIcon, MagnifyingGlassIcon, UserIcon } from '../Icons';
import { useRecoilState } from 'recoil';
import { createPortal } from 'react-dom';
import SearchModal from '../modals/SearchModal';
import { searchModalState } from '@/atoms/modalAtoms';

export default function NavBar() {
  const [showSearchModal, setShowSearchModal] = useRecoilState(searchModalState);

  const openModal = () => {
    setShowSearchModal(true);
    document.body.classList.add('modal-open');
  };

  return (
    <div className="sm:hidden z-10 grid grid-cols-3 fixed left-0 bottom-0 right-0 h-16 bg-white rounded-t-[10px] px-3 shadow-[0_-4px_8px_rgba(0,0,0,0.08)]">
      <Link href={'/'} className="navbar-btn">
        <HomeIcon />
        <span className="navbar-text">메인</span>
      </Link>
      <button className="navbar-btn" onClick={openModal}>
        <MagnifyingGlassIcon color="primary" />
        <span className="navbar-text">검색</span>
      </button>

      {showSearchModal && createPortal(<SearchModal setShowSearchModal={setShowSearchModal} />, document.body)}

      <Link href={'mypage'} className="navbar-btn">
        <UserIcon color="primary" />
        <span className="navbar-text">마이페이지</span>
      </Link>
    </div>
  );
}
