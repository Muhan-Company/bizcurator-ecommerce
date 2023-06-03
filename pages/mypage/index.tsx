import NavBar from '@/components/footer/NavBar';
import Header2 from '@/components/header/Header2';
import MyPageMain from '@/components/mypage/MyPageMain';
import ProtectRoute from '@/components/ProtectRoute';

export default function MyPage() {
  return (
    <>
      <ProtectRoute />
      <Header2 text="마이페이지" />
      <MyPageMain />
      <NavBar />
    </>
  );
}
