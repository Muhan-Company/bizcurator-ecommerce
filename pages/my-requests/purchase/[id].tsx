import NavBar from '@/components/footer/NavBar';
import Layout from '@/components/layout/Layout';
import RequestDetailContainer from '@/components/my-requests/RequestDetailContainer';

export default function PurchaseDetailPage() {
  return (
    <Layout>
      <RequestDetailContainer />
      <NavBar />
    </Layout>
  );
}
