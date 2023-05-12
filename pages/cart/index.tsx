import CartItemList from '@/components/cart/CartItemList';
import NavBar from '@/components/footer/NavBar';
import Layout from '@/components/layout/Layout';

export default function Cart() {
  return (
    <Layout>
      <div className="mx-3">
        <CartItemList />
      </div>
      <NavBar />
    </Layout>
  );
}
