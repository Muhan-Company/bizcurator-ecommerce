import { useSetRecoilState } from 'recoil';
import useAxiosPrivate from './useAxiosPrivate';
import useInvalidateQueries from './useInvalidateQueries';
import reqSuccessState from '@/atoms/reqSuccessAtom';
import { useRouter } from 'next/router';
import useToast from './useToast';
import { useMutation } from '@tanstack/react-query';

const useOrdersRequest = () => {
  const axiosPrivate = useAxiosPrivate();
  const invalidateQueries = useInvalidateQueries();
  const setReqSuccess = useSetRecoilState(reqSuccessState);
  const { push } = useRouter();
  const showToast = useToast();

  const requestOrders = async (formData: FormData) => {
    const { data } = await axiosPrivate.post('/api/requests/orders', formData);
    return data;
  };

  const mutationOptions = {
    onSuccess: () => {
      invalidateQueries(['requests', 'histories']);
      invalidateQueries(['histories', 'details']);
      setReqSuccess(true);
      push('/my-requests?filterMonth=30');
    },
    onError: () => showToast('제출 실패', true),
  };

  return useMutation(requestOrders, mutationOptions);
};

export default useOrdersRequest;
