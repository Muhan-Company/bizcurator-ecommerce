import Footer from '@/components/footer/Footer';
import NavBar from '@/components/footer/NavBar';
import DownHeader from '@/components/header/DownHeader';
import Layout from '@/components/layout/Layout';
import Description from '@/components/request/Description';
import FormTitle from '@/components/request/FormTitle';
import MyInfo from '@/components/request/MyInfo';

export default function Manufacture() {
  return (
    <Layout>
      <DownHeader />
      <FormTitle />
      <Description />
      <MyInfo />
      <div className="h-[1px] bg-gray_02 my-8"></div>
      <Footer />
      <NavBar />
      <MyInfo />
    </Layout>
  );
}
