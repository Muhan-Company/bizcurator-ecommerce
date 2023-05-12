import { useRouter } from 'next/router';
import Layout from '@/components/layout/Layout';
import NavBar from '@/components/footer/NavBar';
import CancelOrderInfo from '@/components/orders/cancel/CancelOrderInfo';
import CancelItemInfo from '@/components/orders/cancel/CancelItemInfo';
import CancelInfo from '@/components/orders/cancel/CancelInfo';
export default function Cancel() {
  return (
    <Layout>
      <div className="mx-3 pb-[80px]">
        <CancelOrderInfo total_cost={2000000} delivery_state={0} />
        <CancelItemInfo image={'/img/image 68.png'} name="호텔용 타월" quantity={2} cost_per_one={1000000} />
        <CancelInfo />
      </div>
      <NavBar />
    </Layout>
  );
}
