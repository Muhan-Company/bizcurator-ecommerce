import CustomerCenter from '@/components/customer/CustomerCenter';
import Footer from '@/components/footer/Footer';
import NavBar from '@/components/footer/NavBar';
import DownHeader from '@/components/header/DownHeader';
import Layout from '@/components/layout/Layout';

export default function Customer() {
  return (
    <Layout>
      <DownHeader />
      <CustomerCenter />
      <Footer />
      <NavBar />
    </Layout>
  );
}
