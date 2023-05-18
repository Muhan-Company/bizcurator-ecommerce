import NavBar from '@/components/footer/NavBar';
import Layout from '@/components/layout/Layout';
import MyRequestsListContainer from '@/components/my-requests/MyRequestsListContainer';

export default function MyRequestsPage() {
  return (
    <Layout>
      <div className="mx-3 pb-[64px]">
        <MyRequestsListContainer />
      </div>
      <NavBar />
    </Layout>
  );
}
