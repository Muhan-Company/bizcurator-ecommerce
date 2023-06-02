import { useSetRecoilState } from 'recoil';
import useAxiosPrivate from './useAxiosPrivate';
import useInvalidateQueries from './useInvalidateQueries';
import reqSuccessState from '@/atoms/reqSuccessAtom';
import { useRouter } from 'next/router';
import useToast from './useToast';
import { useMutation } from '@tanstack/react-query';

const useOrdersRequest = () => {
  const axiosPrivate = useAxiosPrivate();

  const requestOrders = async (formData: FormData) => {
    const { data } = await axiosPrivate.post('/api/requests/orders', formData);
    return data;
  };

  const invalidateQueries = useInvalidateQueries();
  const setReqSuccess = useSetRecoilState(reqSuccessState);
  const { push } = useRouter();
  const showToast = useToast();

  const mutationOptions = {
    onSuccess: () => {
      invalidateQueries(['requests', 'orders']);
      setReqSuccess(true);
      push('/my-requests');
    },
    onError: () => showToast('제출 실패', true),
  };

  return useMutation(requestOrders, mutationOptions);
};

export default useOrdersRequest;
