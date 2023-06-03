import reqSuccessState from '@/atoms/reqSuccessAtom';
import ProtectRoute from '@/components/ProtectRoute';
import NavBar from '@/components/footer/NavBar';
import Header2 from '@/components/header/Header2';
import Layout from '@/components/layout/Layout';
import MyRequestsListTable from '@/components/my-requests/MyRequestsListTable';
import { RequestsStateList } from '@/components/my-requests/RequestsState';
import DateFilter from '@/components/orders/DateFilter';
import useMyRequests from '@/hooks/useMyRequests';
import useToast from '@/hooks/useToast';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';

export default function MyRequestsPage() {
  const [reqSuccess, setReqSuccess] = useRecoilState(reqSuccessState);
  const showToast = useToast();
  const { query } = useRouter();

  useEffect(() => {
    if (reqSuccess) {
      showToast('제출되었습니다.', false);
      setReqSuccess(false);
    }
  }, [reqSuccess, setReqSuccess, showToast]);
  const filterMonth = query.filterMonth;

  const { data, isLoading, isError } = useMyRequests(Number(filterMonth));
  const reqDetails = data?.result.details;

  return (
    <Layout>
      <ProtectRoute />
      <Header2 text="내 의뢰 내역" />
      <div className="mx-3 pb-[64px] mt-5">
        <DateFilter />
        <RequestsStateList />
        <MyRequestsListTable reqDetails={reqDetails} />
      </div>
      <NavBar />
    </Layout>
  );
}
