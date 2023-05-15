import React from 'react';
import ReasonCategorySelector from './ReasonCategorySelector';
import SubTitleLayout from './SubTitleLayout';

const REFUND_REASON = ['고객변심', '서비스 불만족', '배송지연', '상품불량', '배송오류'];

export default function RefundReason() {
  return (
    <SubTitleLayout title="환불사유">
      <p className="text-body-xs text-gray_01 break-keep">
        적절한 환불사유가 아닐 시 반려될 수 있습니다. <br />
        물건 교환의 경우, 취소가 아닌 카카오톡 채널로 문의주세요
      </p>
      <div className="py-6 flex">
        <h4 className="py-[11.5px] pr-4 text-label-sm text-gray_01">사유선택</h4>
        <ReasonCategorySelector categoryValues={REFUND_REASON} />
      </div>
    </SubTitleLayout>
  );
}
