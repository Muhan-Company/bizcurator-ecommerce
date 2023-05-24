import OrderDetailLayout from '../orders/[paymentId]/OrderDetailLayout';

export default function RefundInfo() {
  return (
    <OrderDetailLayout.OrderDetailTextContentLayout title="주문 정보">
      <OrderDetailLayout.OrderDetailTextContent title="취소 대상" value={'호텔용 타월'} />
      <div className="flex">
        <OrderDetailLayout.OrderDetailTextContent title="환불상태" value={'환불진행중'} />
        <span className="pl-10 text-label-sm">{'2023-04-29 15:21:53'}</span>
      </div>

      <OrderDetailLayout.OrderDetailTextContent title="환불금액" value={(2000000).toLocaleString('kr-KR') + '원'} />
      <OrderDetailLayout.OrderDetailTextContent title="환불수단" value={'부트페이'} />
    </OrderDetailLayout.OrderDetailTextContentLayout>
  );
}
