import OrderDetailLayout from './OrderDetailLayout';

type PaymentInfoProps = {
  payment_method: string;
  total_cost: number;
};
export default function PaymentInfo({ payment_method, total_cost }: PaymentInfoProps) {
  return (
    <OrderDetailLayout title="결제 정보">
      <div className="w-[180px] pt-[17px] pb-5">
        <div className="pb-[14px] flex text-label-sm">
          <h3 className="w-[100px] text-gray_01">결제수단</h3>
          <span>{payment_method}</span>
        </div>
        <div className="flex text-label-sm">
          <h3 className="w-[100px] text-gray_01">총 결제금액</h3>
          <span>{total_cost.toLocaleString('kr-KR')}원</span>
        </div>
      </div>
    </OrderDetailLayout>
  );
}
