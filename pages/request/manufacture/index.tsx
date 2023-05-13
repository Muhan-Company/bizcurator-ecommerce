import Footer from '@/components/footer/Footer';
import NavBar from '@/components/footer/NavBar';
import DownHeader from '@/components/header/DownHeader';
import Layout from '@/components/layout/Layout';
import Description from '@/components/request/Description';
import FormTitle from '@/components/request/FormTitle';

export default function Manufacture() {
  return (
    <Layout>
      <DownHeader />
      <FormTitle />
      <Description />
      <Footer />
      <NavBar />
    </Layout>
  );
}
