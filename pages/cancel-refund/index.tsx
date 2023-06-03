import ProtectRoute from '@/components/ProtectRoute';
import CancelRefundOrderList from '@/components/cancel-refund/CancelRefundOrderList';
import Header2 from '@/components/header/Header2';
import CancelReFundPageLayout from '@/components/layout/CancelReFundPageLayout';

export default function CancelRefundlList() {
  return (
    <>
      <ProtectRoute />
      <Header2 text="취소/환불 내역" />
      <CancelReFundPageLayout>
        <CancelRefundOrderList />
      </CancelReFundPageLayout>
    </>
  );
}
