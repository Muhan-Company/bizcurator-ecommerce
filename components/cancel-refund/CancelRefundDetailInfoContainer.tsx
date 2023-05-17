import CancelRefundDetailOrderInfo from './CancelRefundDetailOrderInfo';
import RefundInfo from './RefundInfo';
import OrderDetailLayout from '../orders/[paymentId]/OrderDetailLayout';
import { useRouter } from 'next/router';
import { useGetCancelRefundDetail } from '@/apis/cancel&refund';

export default function CancelRefundDetailInfoContainer() {
  const { query } = useRouter();
  const title = query.details?.includes('cancellations') ? '주문취소' : '환불';
  const [detail, id] = query!.details as string[];

  const { data } = useGetCancelRefundDetail(detail, id);

  return (
    <div>
      {
        /* 상태값 반려일 경우 랜더링*/
        <OrderDetailLayout.OrderDetailTextContentLayout title={`${title} 반려 사유`}>
          <p className="text-body-xs">{'이미 배송이 진행되었기 때문에 주문취소가 어렵습니다.'}</p>
        </OrderDetailLayout.OrderDetailTextContentLayout>
      }
      {/* 상태값 승인일 경우 랜더링*/ <RefundInfo />}
      <CancelRefundDetailOrderInfo />
    </div>
  );
}
