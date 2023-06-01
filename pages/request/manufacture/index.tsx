import ProtectRoute from '@/components/ProtectRoute';
import Footer from '@/components/footer/Footer';
import NavBar from '@/components/footer/NavBar';
import Header from '@/components/header/Header';
import Layout from '@/components/layout/Layout';
import Description from '@/components/request/Description';
import FormTitle from '@/components/request/FormTitle';
import ManufactureForm from '@/components/request/ManufactureForm';
import MyInfo from '@/components/request/MyInfo';
import RequestLinks from '@/components/request/RequestLinks';
import useGetUser from '@/hooks/useGetUser';

export default function ManufactureRequest() {
  const desc = {
    h: '제품 제작 의뢰',
    p1: '사업에 꼭 맞는 제품을 제작하고 싶으신가요? 졸업작품을 기획하고 계신가요?',
    p2: '제품 목업부터 실제 제작을 위한 공정을 저희와 함께해요',
  };

  const info = useGetUser();

  return (
    <Layout>
      <ProtectRoute />
      <Header />
      <FormTitle title="제품 구매 및 제작 의뢰신청서" />
      <Description desc={desc} />
      <RequestLinks />
      <MyInfo {...info} />
      <div className="h-[1px] bg-gray_02 my-8"></div>
      <ManufactureForm {...info} />
      <Footer />
      <NavBar />
    </Layout>
  );
}
