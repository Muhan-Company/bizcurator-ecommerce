import CustomerCenter from '@/components/customer/CustomerCenter';
import NavBar from '@/components/footer/NavBar';
import Header2 from '@/components/header/Header2';
import Layout from '@/components/layout/Layout';

export default function Customer() {
  return (
    <Layout>
      <Header2 text="고객센터" />
      <CustomerCenter />
      <NavBar />
    </Layout>
  );
}
