import CartItem from '@/components/cart/CartItem';
import React, { useState } from 'react';

export default function Cart() {
  const [isSelected, setIsSelected] = useState<boolean>(true);
  return (
    <>
      <CartItem isSelected={isSelected} setIsSelected={setIsSelected} />
    </>
  );
}
