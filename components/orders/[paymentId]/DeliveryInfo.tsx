import OrderDetailLayout from './OrderDetailLayout';

type DeliveryInfoProps = {
  buyer: string;
  postal_code: string;
  address: string;
  request_content: string;
};
export default function DeliveryInfo({ buyer, postal_code, address, request_content }: DeliveryInfoProps) {
  return (
    <OrderDetailLayout.OrderDetailTextContentLayout title="배송지 정보">
      <OrderDetailLayout.OrderDetailTextContent title="받는 사람" value={buyer} />
      <OrderDetailLayout.OrderDetailTextContent title="우편번호" value={postal_code} />
      <OrderDetailLayout.OrderDetailTextContent title="상세주소" value={address} />
      <OrderDetailLayout.OrderDetailTextContent title="배송메시지" value={request_content} />
    </OrderDetailLayout.OrderDetailTextContentLayout>
  );
}
