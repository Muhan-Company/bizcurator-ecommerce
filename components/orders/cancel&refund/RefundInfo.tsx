import SubTitleLayout from './SubtitleLayout';
import OrderDetailLayout from '../[paymentId]/OrderDetailLayout';

type RefundInfoProps = {
  total_money: number;
  bank_account: string;
};
export default function RefundInfo({ total_money, bank_account }: RefundInfoProps) {
  return (
    <SubTitleLayout title="환불정보">
      <OrderDetailLayout.OrderDetailTextContent
        title="환불예정금액"
        value={`${total_money.toLocaleString('kr-KR')}원`}
      />
      <OrderDetailLayout.OrderDetailTextContent title="환불계좌" value={bank_account} className="break-keep" />
    </SubTitleLayout>
  );
}
