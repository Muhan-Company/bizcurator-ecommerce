import OrderDetailLayout from '../[paymentId]/OrderDetailLayout';

type RefundInfoProps = {
  total_money: number;
  bank_account: string;
};
export default function RefundInfo({ total_money, bank_account }: RefundInfoProps) {
  return (
    <div>
      <h3 className="pt-[15px] pb-5 text-title-xs font-medium">환불정보</h3>
      <OrderDetailLayout.OrderDetailTextContent
        title="환불예정금액"
        value={`${total_money.toLocaleString('kr-KR')}원`}
      />
      <OrderDetailLayout.OrderDetailTextContent title="환불계좌" value={bank_account} />
    </div>
  );
}
