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
      <Footer />
      <NavBar />
    </Layout>
  );
}
