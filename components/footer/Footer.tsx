import { logInModalState } from '@/atoms/modalAtoms';
import useAccessTokenCookie from '@/hooks/useAccessTokenCookie';
import useModal from '@/hooks/useModal';
import Link from 'next/link';
import { useRecoilState } from 'recoil';

export default function Footer() {
  const [showLogInModal, setShowLogInModal] = useRecoilState(logInModalState);
  const accessToken = useAccessTokenCookie();

  const { openModal } = useModal(showLogInModal, setShowLogInModal);

  return (
    <footer className="bg-main pt-5 pb-24 sm:pb-5 lg:p-10">
      <div className="flex flex-col lg:flex-row items-center space-y-5 lg:space-x-5 pb-5">
        {accessToken ? null : (
          <>
            <button onClick={openModal} className="footer-btn">
              로그인
            </button>
            <Link href={'/signup'} className="footer-btn">
              회원가입
            </Link>
          </>
        )}
        <Link href={'/customer'} className="footer-btn">
          고객센터
        </Link>
      </div>
      <div className="w-full seperator"></div>
      <div className="flex flex-col items-center lg:items-start py-5 gap-y-1.5 mb-5">
        <span className="footer-span">(주) 에비네추럴 사업자정보</span>
        <span className="footer-span">서울특별시 용산구 원효로90길 11 비전포트, 1608호</span>
        <span className="footer-span">사업자등록번호 495-81-02340</span>
        <span className="footer-span">전화번호 0507-1387-5624</span>
        <span className="footer-span">이메일 ebnatural_corp@naver.com</span>
      </div>
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
        <div className="flex justify-center gap-x-2 items-center">
          <span className="footer-span">회사 소개</span>
          <span className="short-seperator"></span>
          <span className="footer-span">이용약관</span>
          <span className="short-seperator"></span>
          <span className="footer-span">개인정보취급방침</span>
          <span className="short-seperator"></span>
          <span className="footer-span">제휴문의</span>
        </div>
        <h5 className="font-bold text-button-xs text-gray_02 text-center mt-10 lg:mt-0">Powered by EBINATURAL</h5>
      </div>
    </footer>
  );
}
