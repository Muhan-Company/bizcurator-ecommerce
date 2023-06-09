import { useEffect, useState } from 'react';
import CartItem from './CartItem';
import EmptyCart from './EmptyCart';
import Link from 'next/link';
import CartDeleteModals from '../modals/CartDeleteModals';
import { createPortal } from 'react-dom';
import useGetCarts from '@/hooks/useGetCarts';
import Loader from '../Loader';
import useModal from '@/hooks/useModal';
import { useRecoilState, useRecoilValue } from 'recoil';
import { buyCompleteModalState, removeCompleteModalState, removeItemModalState } from '@/atoms/modalAtoms';
import SelectAllCheckbox from './SelectAllCheckbox';
import BuyCompleteModal from '../modals/BuyCompleteModal';
import CartPaymentAmountInfo from './CartPaymentAmountInfo';

export interface CartItemType {
  name: string;
  product_id: number;
  discount_price: number;
  regular_price: number;
  quantity: number;
  minimum_quantity: number;
  product_image_url: string;
  selected: boolean;
}

export default function CartItemList() {
  const { data: carts, isLoading, isError } = useGetCarts();
  const [showRemoveItemModal, setShowRemoveItemModal] = useRecoilState(removeItemModalState);
  const [showBuyCompleteModal, setShowBuyCompleteModal] = useRecoilState(buyCompleteModalState);
  const [cartItems, setCartItems] = useState<CartItemType[]>([]);
  const [selectedItems, setSelectedItems] = useState<CartItemType[]>([]);
  const [selectAll, setSelectAll] = useState<boolean>(false);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [totalDiscountPrice, setTotalDiscountPrice] = useState<number>(0);
  const showRemoveCompleteModal = useRecoilValue(removeCompleteModalState);
  const { openModal } = useModal(showBuyCompleteModal, setShowBuyCompleteModal);
  const { openModal: showModal } = useModal(showRemoveCompleteModal, setShowRemoveItemModal);

  useEffect(() => {
    if (carts) {
      setCartItems(carts);
    }
  }, [carts, setCartItems]);

  useEffect(() => {
    selectedItems.length === cartItems.length ? setSelectAll(true) : setSelectAll(false);
  }, [selectedItems.length, cartItems.length]);

  const toggleItem = (itemId: number, selected: boolean) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.product_id === itemId) {
        return { ...item, selected };
      }
      return item;
    });
    setCartItems(updatedCartItems);

    if (selected) {
      const selectedItem = updatedCartItems.find((item) => item.product_id === itemId);
      if (selectedItem) {
        setSelectedItems([...selectedItems, selectedItem]);
      }
    } else {
      setSelectedItems(selectedItems.filter((item) => item.product_id !== itemId));
    }
  };

  useEffect(() => {
    const totalPrice = selectedItems.reduce((acc, item) => acc + item.regular_price * item.quantity, 0);

    const totalDiscountPrice = selectedItems.reduce((acc, item) => acc + item.discount_price * item.quantity, 0);

    setTotalPrice(totalPrice);
    setTotalDiscountPrice(totalDiscountPrice);
  }, [selectedItems]);

  const handleSelectAll = () => {
    setSelectAll(!selectAll);
    const updatedCartItems = cartItems.map((item) => ({ ...item, selected: !selectAll }));
    setCartItems(updatedCartItems);

    if (!selectAll) {
      setSelectedItems(updatedCartItems);
    } else {
      setSelectedItems([]);
    }
  };

  const handleQtyChange = (itemId: number, quantity: number) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.product_id === itemId) {
        return { ...item, quantity };
      }
      return item;
    });
    setCartItems(updatedCartItems);

    const updatedSelectedItems = selectedItems.map((item) => {
      if (item.product_id === itemId) {
        return { ...item, quantity };
      }
      return item;
    });
    setSelectedItems(updatedSelectedItems);

    const totalPrice = selectedItems.reduce((acc, item) => acc + item.regular_price * item.quantity, 0);

    const totalDiscountPrice = selectedItems.reduce((acc, item) => acc + item.discount_price * item.quantity, 0);

    setTotalPrice(totalPrice);
    setTotalDiscountPrice(totalDiscountPrice);
  };

  if (isLoading) return <Loader className="h-[494px]" />;
  if (isError) return <p className="text-red center h-[494px] font-bold text-xl">장바구니 조회 실패</p>;

  return (
    <div className="relative h-[494px]">
      {cartItems?.length === 0 ? (
        <EmptyCart />
      ) : (
        <div className="pt-5 mx-3">
          <div className="flex items-center mb-[22px] pb-3 border-b-[1px] border-black">
            <SelectAllCheckbox
              total={cartItems?.length}
              selected={selectedItems.length}
              selectAll={selectAll}
              handleSelectAll={handleSelectAll}
            />
            {/* todo: 삭제 모달 연결 */}
            <button disabled={!selectedItems.length} onClick={showModal} className="ml-4 font-medium disabled-btn">
              선택삭제
            </button>
          </div>
          {cartItems?.map((item) => (
            <CartItem key={item.product_id} item={item} toggleItem={toggleItem} handleQtyChange={handleQtyChange} />
          ))}

          <CartPaymentAmountInfo totalCost={totalPrice} totalDiscount={totalDiscountPrice} />

          <div className="center gap-[7px] mt-5">
            {/* todo: 바로구매 페이지로 이동 */}
            <Link href="/products/categories/0?sort=newest" className="w-[172px] h-[50px] btn-white grow py-[19px]">
              다른 제품 보기
            </Link>
            {/* todo: 결제 페이지로 이동 */}
            <button onClick={openModal} className="w-[172px] h-[50px] btn-primary grow py-[19px]">
              구매하기
            </button>
          </div>
        </div>
      )}
      {showRemoveItemModal &&
        createPortal(<CartDeleteModals.CartItemDeleteModal selectedItems={selectedItems} />, document.body)}
      {showRemoveCompleteModal && createPortal(<CartDeleteModals.DeleteCompletedModal />, document.body)}
      {showBuyCompleteModal && createPortal(<BuyCompleteModal />, document.body)}
    </div>
  );
}
