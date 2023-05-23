import Footer from '@/components/footer/Footer';
import NavBar from '@/components/footer/NavBar';
import DownHeader from '@/components/header/DownHeader';
import Layout from '@/components/layout/Layout';
import Description from '@/components/request/Description';
import FormTitle from '@/components/request/FormTitle';
import MyInfo from '@/components/request/MyInfo';
import PurchaseForm from '@/components/request/PurchaseForm';
import RequestLinks from '@/components/request/RequestLinks';

export default function PurchaseRequest() {
  const desc = {
    h: '제품 구매 의뢰',
    p1: '아무리 찾아도 내가 원하는 제품을 찾기 어렵나요?? 대량으로 구매하고 싶지만 도매가로 구매가 안된다구요??',
    p2: '원하시는 제품을 도매가로 찾아드리고 견적을 보내드려요',
  };

  return (
    <Layout>
      <DownHeader />
      <FormTitle title="제품 구매 및 제작 의뢰신청서" />
      <Description desc={desc} />
      <RequestLinks />
      <MyInfo />
      <div className="h-[1px] bg-gray_02 my-8"></div>
      <PurchaseForm />
      <Footer />
      <NavBar />
    </Layout>
  );
}
