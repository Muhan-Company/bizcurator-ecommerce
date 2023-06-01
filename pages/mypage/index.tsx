import NavBar from '@/components/footer/NavBar';
import Header2 from '@/components/header/Header2';
import Layout from '@/components/layout/Layout';
import MyPageMain from '@/components/mypage/MyPageMain';
import ProtectRoute from '@/components/ProtectRoute';

export default function MyPage() {
  return (
    <Layout>
      <ProtectRoute />
      <Header2 text="마이페이지" />
      <MyPageMain />
      <NavBar />
    </Layout>
  );
}
