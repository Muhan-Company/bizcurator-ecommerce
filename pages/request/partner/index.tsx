import Footer from '@/components/footer/Footer';
import NavBar from '@/components/footer/NavBar';
import DownHeader from '@/components/header/DownHeader';
import Layout from '@/components/layout/Layout';
import Description from '@/components/request/Description';
import FormTitle from '@/components/request/FormTitle';

export default function PurchaseRequest() {
  const desc = {
    h: '판매 입점 의뢰서 입니다',
    p1: '판매입점을 하시면 제품구매의뢰 또는 제작의뢰를 받으 실 수 있고 바로구매 물품의 업로드제안을 받을 수 있습니다.',
    p2: '비즈큐레이터의 파트너가 되어주세요',
  };

  return (
    <Layout>
      <DownHeader />
      <FormTitle title="판매입점 의뢰서" />
      <Description desc={desc} />

      <div className="h-[1px] bg-gray_02 my-8"></div>
      <Footer />
      <NavBar />
    </Layout>
  );
}
