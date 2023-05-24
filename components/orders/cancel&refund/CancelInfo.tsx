import React, { useState } from 'react';
import OrderDetailLayout from '../[paymentId]/OrderDetailLayout';
import CancelReason from './CancelReason';
import RefundInfo from './RefundInfo';
import SingleButtonModal from '@/components/modals/SingleButtonModal';

export default function CancelInfo() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const modalProps = {
    content: '주문취소가 완료되었습니다.',
    link: '/cancel-refund/cancel',
    onClose: setIsModalOpen,
  };

  return (
    <OrderDetailLayout.OrderDetailItemsContentLayout title="취소 신청 정보 기입">
      <div className="mx-[10px]">
        <CancelReason />
        <RefundInfo total_money={2000000} bank_account="결제한 계좌로 바로 입금됩니다." />
      </div>
      {/* todo: 주문 취소 API 연결 (요청값: order_id, opinion) */}
      <button className="mt-[40px] btn-large" onClick={() => setIsModalOpen(!isModalOpen)}>
        주문취소 신청하기
      </button>
      {/* todo: 주문 취소 API 통신 성공시 모달 띄우기 */}
      {isModalOpen && SingleButtonModal(modalProps)}
    </OrderDetailLayout.OrderDetailItemsContentLayout>
  );
}
