import OrderDetailLayout from './OrderDetailLayout';

type DeliveryInfoProps = {
  buyer: string;
  postal_code: string;
  address: string;
  request_content: string;
};
export default function DeliveryInfo({ buyer, postal_code, address, request_content }: DeliveryInfoProps) {
  return (
    <OrderDetailLayout title="배송지 정보">
      <div className="pt-[17px] pb-5">
        <div className="pb-[14px] flex text-label-sm">
          <h3 className="w-[100px] text-gray_01">받는 사람</h3>
          <span>{buyer}</span>
        </div>
        <div className="pb-[14px] flex text-label-sm">
          <h3 className="w-[100px] text-gray_01">우편번호</h3>
          <span>{postal_code}</span>
        </div>
        <div className="pb-[14px] flex text-label-sm">
          <h3 className="w-[100px] text-gray_01">상세주소</h3>
          <span>{address}</span>
        </div>
        <div className="pb-[14px] flex text-label-sm">
          <h3 className="w-[100px] text-gray_01">배송메시지</h3>
          <span>{request_content}</span>
        </div>
      </div>
    </OrderDetailLayout>
  );
}
