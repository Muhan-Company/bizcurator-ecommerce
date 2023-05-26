import purchaseReqState from '@/atoms/fromAtoms';
import NavBar from '@/components/footer/NavBar';
import Layout from '@/components/layout/Layout';
import MyRequestsListContainer from '@/components/my-requests/MyRequestsListContainer';
import useToast from '@/hooks/useToast';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';

export default function MyRequestsPage() {
  const [purchaseReq, setPurchaseReq] = useRecoilState(purchaseReqState);
  const showToast = useToast();

  useEffect(() => {
    if (purchaseReq) {
      showToast('제출되었습니다.', false);
      setPurchaseReq(false);
    }
  }, [purchaseReq, setPurchaseReq, showToast]);

  return (
    <Layout>
      <div className="mx-3 pb-[64px]">
        <MyRequestsListContainer />
      </div>
      <NavBar />
    </Layout>
  );
}
