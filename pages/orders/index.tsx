import NavBar from '@/components/footer/NavBar';
import Layout from '@/components/layout/Layout';
import OrderList from '@/components/orders/OrderList';

export default function Orders() {
  return (
    // 주문내역이 뷰포트 세로폭을 채울만큼 생성되면 NavBar에 의해 가려져 padding값 추가함
    <div className="relative pb-[64px]">
      <Layout>
        <OrderList />
        <NavBar />
      </Layout>
    </div>
  );
}
