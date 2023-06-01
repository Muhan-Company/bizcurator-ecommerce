import ProtectRoute from '@/components/ProtectRoute';
import CartItemList from '@/components/cart/CartItemList';
import NavBar from '@/components/footer/NavBar';
import Header2 from '@/components/header/Header2';
import Layout from '@/components/layout/Layout';

export default function Cart() {
  return (
    <Layout>
      <ProtectRoute />
      <Header2 text="장바구니" />
      <CartItemList />
      <NavBar />
    </Layout>
  );
}
