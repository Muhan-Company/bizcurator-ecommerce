import NavBar from '@/components/footer/NavBar';
import Layout from '@/components/layout/Layout';
import EditRequestContainer from '@/components/my-requests/EditRequestContainer';

export default function EditRequestPage() {
  return (
    <Layout>
      <EditRequestContainer />
      <NavBar />
    </Layout>
  );
}
