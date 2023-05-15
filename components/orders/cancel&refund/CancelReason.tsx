import React from 'react';
import ReasonCategorySelector from './ReasonCategorySelector';
import SubTitleLayout from './SubtitleLayout';

const CANCEL_REASON = ['고객변심', '서비스 불만족', '배송지연'];

export default function CancelReason() {
  return (
    <SubTitleLayout title="취소사유">
      <p className="text-body-xs text-gray_01 break-keep">
        배송시작 전까지 한하여 주문취소가 가능합니다. <br /> 물건 교환의 경우, 취소가 아닌 카카오톡 채널로 문의주세요.
      </p>
      <div className="py-6 flex">
        <h4 className="py-[11.5px] pr-4 text-label-sm text-gray_01">사유선택</h4>
        <ReasonCategorySelector categoryValues={CANCEL_REASON} />
      </div>
    </SubTitleLayout>
  );
}
