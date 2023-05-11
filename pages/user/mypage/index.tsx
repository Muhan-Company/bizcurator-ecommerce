import NavBar from '@/components/footer/NavBar';
import Layout from '@/components/layout/Layout';
import MyPageMain from '@/components/mypage/MyPageMain';

export default function MyPage() {
  return (
    <Layout>
      <div className="px-[22px]">
        <MyPageMain />
      </div>
      <NavBar />
    </Layout>
  );
}
