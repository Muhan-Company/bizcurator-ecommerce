import ProtectRoute from '@/components/ProtectRoute';
import NavBar from '@/components/footer/NavBar';
import Layout from '@/components/layout/Layout';
import OrderDetailContainer from '@/components/orders/[paymentId]/OrderDetailContainer';

import React from 'react';

export default function OrdersDetailPage() {
  return (
    <Layout>
      <ProtectRoute />
      <OrderDetailContainer />
      <NavBar />
    </Layout>
  );
}
