import React, { useState } from 'react';
import OrderDetailLayout from '../[paymentId]/OrderDetailLayout';
import SingleButtonModal from '@/components/modal/SingleButtonModal';
import RefundInfo from './RefundInfo';
import RefundReason from './RefundReason';
import HowToReturn from './HowToReturn';

export default function RefundRequestInfo() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const modalProps = {
    content: '환불 신청이 완료되었습니다.',
    link: '/cancel-refund/refund',
    onClose: setIsModalOpen,
  };

  return (
    <OrderDetailLayout.OrderDetailItemsContentLayout title="환불 신청 정보 기입">
      <div className="mx-[10px]">
        <RefundReason />
        <HowToReturn />
        <RefundInfo
          total_money={2000000}
          bank_account="환불 금액은 배송비를 제외한 후 결제한 계좌로 다시 환불됩니다."
        />
      </div>
      {/* todo: 주문 취소 API 연결 (요청값: order_id, opinion_category, receive_category, address, total_money, bank_account) */}
      <button className="mt-[40px] btn-large" onClick={() => setIsModalOpen(!isModalOpen)}>
        환불 신청하기
      </button>
      {/* todo: 주문 취소 API 통신 성공시 모달 띄우기 */}
      {isModalOpen && SingleButtonModal(modalProps)}
    </OrderDetailLayout.OrderDetailItemsContentLayout>
  );
}
