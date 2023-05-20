import CancelRefundOrderList from '@/components/cancel-refund/CancelRefundOrderList';
import CancelReFundPageLayout from '@/components/layout/CancelReFundPageLayout';

export default function CancelRefundlList() {
  return (
    <CancelReFundPageLayout>
      <CancelRefundOrderList />
    </CancelReFundPageLayout>
  );
}
