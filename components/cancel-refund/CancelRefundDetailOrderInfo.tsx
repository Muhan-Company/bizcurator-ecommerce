import OrderDetailLayout from '@/components/orders/[paymentId]/OrderDetailLayout';
import CancelItemInfo from '../orders/cancel&refund/CancelRefundItemInfo';

export default function CancelRefundDetailOrderInfo() {
  const data = {
    title: '주문 제품 정보',
    image: '/img/image 68.png',
    name: '호텔용 타월',
    quantity: 2,
    cost_per_one: 1000000,
  };
  return (
    <div>
      <OrderDetailLayout.OrderDetailTextContentLayout title="주문 정보">
        <OrderDetailLayout.OrderDetailTextContent title="주문번호" value={'20230427-12345'} />
        <OrderDetailLayout.OrderDetailTextContent
          title="결제금액"
          value={(data.quantity * data.cost_per_one).toLocaleString('kr-KR') + '원'}
        />
        <OrderDetailLayout.OrderDetailTextContent title="주문상태" value={'주문취소 반려'} className="font-bold" />
      </OrderDetailLayout.OrderDetailTextContentLayout>

      <CancelItemInfo {...data} />

      <OrderDetailLayout.OrderDetailTextContentLayout title="결제 정보">
        <OrderDetailLayout.OrderDetailTextContent title="결제수단" value={'PG사, 부트페이'} />
        <OrderDetailLayout.OrderDetailTextContent
          title="총 결제금액"
          value={(data.quantity * data.cost_per_one).toLocaleString('kr-KR') + '원'}
        />
        <OrderDetailLayout.OrderDetailTextContent title="배송비" value={(3000).toLocaleString('kr-KR') + '원'} />
      </OrderDetailLayout.OrderDetailTextContentLayout>

      <OrderDetailLayout.OrderDetailTextContentLayout title="배송지 정보">
        <OrderDetailLayout.OrderDetailTextContent title="받는 사람" value={'김가가'} />
        <OrderDetailLayout.OrderDetailTextContent title="우편번호" value={14268} />
        <OrderDetailLayout.OrderDetailTextContent title="상세주소" value={'서울특별시 강남구 역삼동 123-12 111호'} />
      </OrderDetailLayout.OrderDetailTextContentLayout>
    </div>
  );
}
