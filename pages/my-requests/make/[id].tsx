import ProtectRoute from '@/components/ProtectRoute';
import NavBar from '@/components/footer/NavBar';
import Layout from '@/components/layout/Layout';
import RequestDetailContainer from '@/components/my-requests/RequestDetailContainer';

export default function MakeDetailPage() {
  return (
    <Layout>
      <ProtectRoute />
      <RequestDetailContainer />
      <NavBar />
    </Layout>
  );
}
