import NavBar from '@/components/footer/NavBar';
import Layout from '@/components/layout/Layout';
import DeliveryInfo from '@/components/orders/[paymentId]/DeliveryInfo';
import OrderInfo from '@/components/orders/[paymentId]/OrderInfo';
import OrderItemInfo from '@/components/orders/[paymentId]/OrderItemInfo';
import PaymentInfo from '@/components/orders/[paymentId]/PaymentInfo';
import { useRouter } from 'next/router';
import React from 'react';

export default function OrdersDetailPage() {
  const router = useRouter();
  return (
    <Layout>
      <div className="mx-3 pb-[64px]">
        <OrderInfo payment_id={router.query.paymentId} total_cost={10000000} />
        <OrderItemInfo delivery_state={0} />
        <PaymentInfo payment_method={'PG사, 부트페이'} total_cost={10000000} />
        <DeliveryInfo
          buyer="가나다"
          postal_code={'12345'}
          address={'서울특별시 강남구 역삼동 123-12 111호'}
          request_content={'집 앞에 놓아주세요'}
        />
      </div>
      <NavBar />
    </Layout>
  );
}
