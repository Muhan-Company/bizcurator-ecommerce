import { useSetRecoilState } from 'recoil';
import useAxiosPrivate from './useAxiosPrivate';
import useInvalidateQueries from './useInvalidateQueries';
import useToast from './useToast';
import reqSuccessState from '@/atoms/reqSuccessAtom';
import { useRouter } from 'next/router';
import { useMutation } from '@tanstack/react-query';

const usePartnerRequest = () => {
  const axiosPrivate = useAxiosPrivate();
  const showToast = useToast();
  const invalidateQueries = useInvalidateQueries();
  const setReqSuccess = useSetRecoilState(reqSuccessState);
  const { push } = useRouter();

  const requestPartner = async (formData: FormData) => {
    const { data } = await axiosPrivate.post('/api/requests/partners', formData);
    return data;
  };

  const mutationOptions = {
    onSuccess: () => {
      invalidateQueries(['requests', 'orders']);
      setReqSuccess(true);
      push('/my-requests');
    },
    onError: () => showToast('제출 실패', true),
  };

  return useMutation(requestPartner, mutationOptions);
};

export default usePartnerRequest;
