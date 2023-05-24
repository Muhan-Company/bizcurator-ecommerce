import { createPortal } from 'react-dom';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useSetRecoilState, useRecoilState } from 'recoil';
import LogInModal from '../modals/LogInModal';
import SearchModal from '../modals/SearchModal';
import { logInModalState, searchModalState } from '@/atoms/modalAtoms';
import searchBarState from '@/atoms/searchBarAtom';
import { Cart, LogoIcon, MagnifyingGlassIcon, UserIcon } from '../Icons';

export default function TopHeader() {
  const [showSearchModal, setShowSearchModal] = useRecoilState(searchModalState);
  const [showLogInModal, setShowLogInModal] = useRecoilState(logInModalState);
  const setShowSearchBar = useSetRecoilState(searchBarState);

  const { asPath } = useRouter();

  const openLogInModal = () => {
    setShowLogInModal(true);
    document.body.classList.add('modal-open');
  };

  const showSearch = () => {
    if (asPath.includes('/products/categories') || asPath.includes('/results')) {
      setShowSearchBar((prev) => !prev);
    } else {
      setShowSearchModal(true);
      document.body.classList.add('modal-open');
    }
  };

  return (
    <header className="px-6 flex justify-between items-center z-20 bg-white pt-2 lg:pt-5 lg:px-24 xl:px-48 top-0 sticky">
      <Link href={'/'} className="flex items-center">
        <h1 className="text-[20px] lg:text-head-xl font-bold">BIZ CURATOR</h1>
        <LogoIcon />
      </Link>
      <div className="lg:flex flex-col lg:space-y-10">
        <div className="hidden lg:block space-x-5">
          <Link href={'/signup'}>회원가입</Link>
          <button onClick={openLogInModal}>로그인</button>
          {showLogInModal && createPortal(<LogInModal setShowLogInModal={setShowLogInModal} />, document.body)}
          <Link href={'/customer'}>고객센터</Link>
        </div>
        <div className="flex items-center space-x-5 ml-auto">
          <button className="header-btn" onClick={showSearch}>
            <MagnifyingGlassIcon color="main" />
          </button>
          {showSearchModal && createPortal(<SearchModal setShowSearchModal={setShowSearchModal} />, document.body)}
          <button className="hidden lg:inline header-btn">
            <UserIcon color="main" />
          </button>
          <Link href={'/cart'} className="header-btn">
            <Cart className="w-5 lg:w-8 h-5 lg:h-8" />
          </Link>
        </div>
      </div>
    </header>
  );
}
