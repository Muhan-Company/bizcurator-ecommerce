import Footer from '@/components/footer/Footer';
import NavBar from '@/components/footer/NavBar';
import DownHeader from '@/components/header/DownHeader';
import Layout from '@/components/layout/Layout';
import Description from '@/components/request/Description';
import FormTitle from '@/components/request/FormTitle';
import PurchaseForm from '@/components/request/purchase/PurchaseForm';

export default function Purchase() {
  return (
    <Layout>
      <DownHeader />
      <FormTitle />
      <Description />
      <PurchaseForm />
      <Footer />
      <NavBar />
    </Layout>
  );
}
