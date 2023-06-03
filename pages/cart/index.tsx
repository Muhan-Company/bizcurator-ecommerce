import ProtectRoute from '@/components/ProtectRoute';
import CartItemList from '@/components/cart/CartItemList';
import NavBar from '@/components/footer/NavBar';
import Header2 from '@/components/header/Header2';

export default function Cart() {
  return (
    <>
      <ProtectRoute />
      <Header2 text="장바구니" />
      <CartItemList />
      <NavBar />
    </>
  );
}
