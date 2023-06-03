import ProtectRoute from '@/components/ProtectRoute';
import Footer from '@/components/footer/Footer';
import NavBar from '@/components/footer/NavBar';
import Header from '@/components/header/Header';
import Layout from '@/components/layout/Layout';
import CompanyInfo from '@/components/request/CompanyInfo';
import Description from '@/components/request/Description';
import FormTitle from '@/components/request/FormTitle';
import PartnerForm from '@/components/request/PartnerForm';
import useGetUser from '@/hooks/useGetUser';

export default function PartnerRequest() {
  const desc = {
    h: '판매 입점 의뢰서 입니다',
    p1: '판매입점을 하시면 제품구매의뢰 또는 제작의뢰를 받으실 수 있고 바로구매 물품의 업로드 제안을 받을 수 있습니다.',
    p2: '비즈큐레이터의 파트너가 되어주세요',
  };

  const info = useGetUser();

  return (
    <Layout>
      <ProtectRoute />
      <Header />
      <FormTitle title="판매입점 의뢰서" />
      <Description desc={desc} />
      <CompanyInfo />
      <div className="h-[1px] bg-gray_02 my-8"></div>
      <PartnerForm {...info} />
      <Footer />
      <NavBar />
    </Layout>
  );
}
