function CartItemDeleteModal() {
  return (
    <div className="absolute center inset-0 bg-black/20 z-20">
      <div className="modal-shape flex flex-col gap-[26px] pt-[18px] pb-[5px]">
        선택한 제품을 삭제하시겠습니까?
        <div className="center gap-2">
          <button className="btn-white w-[156px] h-[50px] py-[19px]">취소</button>
          <button className="btn-primary w-[156px] h-[50px] py-[19px]">확인</button>
        </div>
      </div>
    </div>
  );
}

// todo: 3초 후에 자동으로 닫히는 기능
function CartItemDeleteCompletedModal() {
  return (
    <div className="absolute center inset-0 bg-black/20 z-20">
      <div className="modal-shape flex flex-col gap-[26px] pt-[18px] pb-[5px]">
        삭제가 완료되었습니다.
        <div className="center gap-2">
          <button className="btn-white w-[156px] h-[50px] py-[19px]">닫기</button>
        </div>
      </div>
    </div>
  );
}

const CartModals = {
  CartItemDeleteModal,
  CartItemDeleteCompletedModal,
};

export default CartModals;
