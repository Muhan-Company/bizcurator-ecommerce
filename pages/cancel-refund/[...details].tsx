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
