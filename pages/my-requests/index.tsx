import reqSuccessState from '@/atoms/reqSuccessAtom';
import NavBar from '@/components/footer/NavBar';
import Layout from '@/components/layout/Layout';
import MyRequestsListContainer from '@/components/my-requests/MyRequestsListContainer';
import useToast from '@/hooks/useToast';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';

export default function MyRequestsPage() {
  const [reqSuccess, setReqSuccess] = useRecoilState(reqSuccessState);
  const showToast = useToast();

  useEffect(() => {
    if (reqSuccess) {
      showToast('제출되었습니다.', false);
      setReqSuccess(false);
    }
  }, [reqSuccess, setReqSuccess, showToast]);

  return (
    <Layout>
      <div className="mx-3 pb-[64px]">
        <MyRequestsListContainer />
      </div>
      <NavBar />
    </Layout>
  );
}
