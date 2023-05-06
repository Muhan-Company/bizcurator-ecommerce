function CartItemDeleteModal() {
  return (
    <div className="absolute center inset-0 bg-black/20 z-20">
      <div className="modal-shape flex flex-col gap-[26px] pt-[18px]">
        선택한 제품을 삭제하시겠습니까?
        <div className="center gap-2">
          <button className="btn-white w-[156px] h-[50px] py-[19px]">취소</button>
          <button className="btn-primary w-[156px] h-[50px] py-[19px]">확인</button>
        </div>
      </div>
    </div>
  );
}

const CartModals = {
  CartItemDeleteModal,
};

export default CartModals;
