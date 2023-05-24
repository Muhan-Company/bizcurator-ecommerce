import Layout from '@/components/layout/Layout';
import CancelRefundDetailInfoContainer from '@/components/cancel-refund/CancelRefundDetailInfoContainer';
import NavBar from '@/components/footer/NavBar';

export default function CancelDetail() {
  return (
    <Layout>
      <div className="mx-3 pb-[64px]">
        <CancelRefundDetailInfoContainer />
      </div>
      <NavBar />
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = [
    {
      params: { details: ['cancellations'] },
    },
    {
      params: { details: ['refunds'] },
    },
  ];
  return { paths, fallback: false };
}

export async function getStaticProps({ params }: any) {
  // Make sure params are what we expected
  console.log(params);
  return {
    props: {
      details: params.details,
    },
  };
}
