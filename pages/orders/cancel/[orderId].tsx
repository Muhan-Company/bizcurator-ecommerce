import Layout from '@/components/layout/Layout';
import NavBar from '@/components/footer/NavBar';
import CancelRefundOrderInfo from '@/components/orders/cancel&refund/CancelRefundOrderInfo';
import CancelRefundItemInfo from '@/components/orders/cancel&refund/CancelRefundItemInfo';
import CancelInfo from '@/components/orders/cancel&refund/CancelInfo';
export default function Cancel() {
  return (
    <Layout>
      <div className="mx-3 pb-[80px]">
        <CancelRefundOrderInfo total_cost={2000000} delivery_state={0} />
        <CancelRefundItemInfo
          title="주문취소 제품 정보"
          image={'/img/image 68.png'}
          name="호텔용 타월"
          quantity={2}
          cost_per_one={1000000}
        />
        <CancelInfo />
      </div>
      <NavBar />
    </Layout>
  );
}
