import OrderDetailLayout from './OrderDetailLayout';

type PaymentInfoProps = {
  payment_method: string;
  total_cost: number;
};
export default function PaymentInfo({ payment_method, total_cost }: PaymentInfoProps) {
  return (
    <OrderDetailLayout.OrderDetailTextContentLayout title="결제 정보">
      <OrderDetailLayout.OrderDetailTextContent title="결제수단" value={payment_method} />
      <OrderDetailLayout.OrderDetailTextContent
        title="총 결제금액"
        value={total_cost?.toLocaleString('kr-KR') + '원'}
      />
    </OrderDetailLayout.OrderDetailTextContentLayout>
  );
}
