import { HomeIcon, MagnifyingGlassIcon, UserIcon } from '../Icons';

export default function NavBar() {
  return (
    <div className="z-10 grid grid-cols-3 fixed left-0 bottom-0 right-0 h-16 bg-white rounded-t-[10px] px-3">
      <button className="navbar-btn">
        <HomeIcon />
        <span className="navbar-text">메인</span>
      </button>
      <button className="navbar-btn">
        <MagnifyingGlassIcon color="primary" />
        <span className="navbar-text">검색</span>
      </button>
      <button className="navbar-btn">
        <UserIcon color="primary" />
        <span className="navbar-text">마이페이지</span>
      </button>
    </div>
  );
}
