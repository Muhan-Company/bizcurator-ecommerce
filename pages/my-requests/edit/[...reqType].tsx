import ProtectRoute from '@/components/ProtectRoute';
import NavBar from '@/components/footer/NavBar';
import Layout from '@/components/layout/Layout';
import EditRequestContainer from '@/components/my-requests/EditRequestContainer';

export default function EditRequestPage({ paths }: { paths: any }) {
  return (
    <Layout>
      <ProtectRoute />
      <EditRequestContainer />
      <NavBar />
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = [
    {
      params: { reqType: ['purchase'] },
    },
    {
      params: { reqType: ['make'] },
    },
    {
      params: { reqType: ['sell'] },
    },
  ];
  return { paths, fallback: false };
}

export async function getStaticProps({ params }: any) {
  return {
    props: {
      reqType: params.reqType,
    },
  };
}
