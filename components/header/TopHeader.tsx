import { createPortal } from 'react-dom';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useSetRecoilState, useRecoilState } from 'recoil';
import { logInModalState, searchModalState } from '@/atoms/modalAtoms';
import LogInModal from '../modals/LogInModal';
import SearchModal from '../modals/SearchModal';
import searchBarState from '@/atoms/searchBarAtom';
import useToast from '@/hooks/useToast';
import useGetCarts from '@/hooks/useGetCarts';
import { Cart, LogoIcon, MagnifyingGlassIcon, UserIcon } from '../Icons';
import useAccessTokenCookie from '@/hooks/useAccessTokenCookie';
import Skeleton from '../Skeleton';

export default function TopHeader() {
  const [showSearchModal, setShowSearchModal] = useRecoilState(searchModalState);
  const [showLogInModal, setShowLogInModal] = useRecoilState(logInModalState);
  const setShowSearchBar = useSetRecoilState(searchBarState);
  const showToast = useToast();
  const { asPath } = useRouter();
  const accessToken = useAccessTokenCookie();

  const { data: cartItems, isLoading, isError } = useGetCarts();
  const qty = cartItems?.length ?? 0;

  isError && showToast('장바구니 불러오기 실패', true);

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
    <div className="pr-6 pl-3 flex justify-between items-center pt-2 lg:pt-5 lg:px-24 xl:px-48">
      <Link href={'/'} className="flex items-center">
        <h1 className="text-[20px] lg:text-head-xl font-bold">BIZ CURATOR</h1>
        <LogoIcon />
      </Link>
      <div className="lg:flex flex-col lg:space-y-10">
        <div className="hidden lg:block space-x-5">
          <Link href={'/signup'}>회원가입</Link>
          <button onClick={openLogInModal}>로그인</button>
          {showLogInModal && createPortal(<LogInModal />, document.body)}
          <Link href={'/customer'}>고객센터</Link>
        </div>
        <div className="flex items-center justify-end space-x-5">
          <button className="center" onClick={showSearch}>
            <MagnifyingGlassIcon color="main" />
          </button>
          {showSearchModal && createPortal(<SearchModal />, document.body)}

          <button className="hidden lg:inline center">
            <UserIcon color="main" />
          </button>
          {accessToken ? (
            isLoading ? (
              <Skeleton />
            ) : (
              <Link href={'/cart'} className="center relative">
                <Cart className="absolute w-5 lg:w-8 h-5 lg:h-8" />
                {qty >= 1 && qty <= 99 && (
                  <span className="absolute w-4 h-4 bg-main rounded-full text-white center text-[10px] -top-4 -right-4">
                    {qty}
                  </span>
                )}

                {qty > 99 && (
                  <span className="absolute w-5 h-5 bg-main rounded-full text-white center text-[10px] -top-5 -right-5">
                    99+
                  </span>
                )}
              </Link>
            )
          ) : (
            <Link href={'/cart'} className="center relative">
              <Cart className="absolute w-5 lg:w-8 h-5 lg:h-8" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
