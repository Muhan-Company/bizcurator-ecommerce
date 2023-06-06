import { removeCompleteModalState, removeItemModalState } from '@/atoms/modalAtoms';
import useModal from '@/hooks/useModal';
import { useRecoilState } from 'recoil';
import { CartItemType } from '../cart/CartItemList';
import useInvalidateQueries from '@/hooks/useInvalidateQueries';
import { useEffect } from 'react';
import useRemoveItems from '@/hooks/useRemoveItems';

function CartItemDeleteModal({ selectedItems }: { selectedItems: CartItemType[] }) {
  const [showRemoveItemModal, setShowRemoveItemModal] = useRecoilState(removeItemModalState);
  const [showRemoveCompleteModal, setShowRemoveCompleteModal] = useRecoilState(removeCompleteModalState);

  const { closeModal } = useModal(showRemoveItemModal, setShowRemoveItemModal);
  const { openModal } = useModal(showRemoveCompleteModal, setShowRemoveCompleteModal);
  const invalidateQueries = useInvalidateQueries();

  const handleSuccess = () => {
    closeModal();
    openModal();
    invalidateQueries(['carts']);
  };

  const itemIdList = selectedItems.map((item) => item.product_id);

  const removeItemsMutation = useRemoveItems(handleSuccess);

  const { mutate } = removeItemsMutation;

  return (
    <>
      <div className="modal-contents w-[351px] h-[156px] center flex-col space-y-[26px]">
        <p className="font-medium">선택한 제품을 삭제하시겠습니까?</p>
        <div className="center space-x-2">
          <button onClick={closeModal} className="btn-white w-[156px] h-[50px] py-[19px]">
            취소
          </button>
          <button onClick={() => mutate(itemIdList)} className="btn-primary w-[156px] h-[50px] py-[19px]">
            확인
          </button>
        </div>
      </div>
      <div className="modal-overlay"></div>
    </>
  );
}

// todo: 3초 후에 자동으로 닫히는 기능
function DeleteCompletedModal() {
  const [showRemoveCompleteModal, setShowRemoveCompleteModal] = useRecoilState(removeCompleteModalState);

  const { closeModal } = useModal(showRemoveCompleteModal, setShowRemoveCompleteModal);

  useEffect(() => {
    setTimeout(() => {
      closeModal();
    }, 3000);
  }, [closeModal]);

  return (
    <div className="absolute center inset-0 bg-black/20 z-20">
      <div className="modal-shape flex flex-col gap-[26px] pt-[18px] pb-[5px]">
        삭제가 완료되었습니다.
        <div className="center gap-2">
          <button onClick={closeModal} className="btn-white w-[156px] h-[50px] py-[19px]">
            닫기
          </button>
        </div>
      </div>
    </div>
  );
}

const CartDeleteModals = {
  CartItemDeleteModal,
  DeleteCompletedModal,
};

export default CartDeleteModals;
