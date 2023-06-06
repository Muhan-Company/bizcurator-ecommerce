import { ReqArgs } from '@/apis/mypage';
import useAxiosPrivate from './useAxiosPrivate';
import { useMutation } from '@tanstack/react-query';
import useModal from './useModal';
import { useSetRecoilState } from 'recoil';
import { editCompleteModalState } from '@/atoms/modalAtoms';
import useToast from './useToast';
import useInvalidateQueries from './useInvalidateQueries';

const useEditRequest = ({ reqId, reqType }: ReqArgs) => {
  const axiosPrivate = useAxiosPrivate();
  const setShowEditCompleteModal = useSetRecoilState(editCompleteModalState);
  const { showModal } = useModal(setShowEditCompleteModal);
  const showToast = useToast();
  const invalidateQueries = useInvalidateQueries();

  const editRequest = async (formData: FormData) => {
    const { data } = await axiosPrivate.put(`/api/mypages/requests/histories/${reqId}/edit?type=${reqType}`, formData);

    return data;
  };

  const mutationOptions = {
    onSuccess: () => {
      invalidateQueries(['requests', 'histories']);
      invalidateQueries(['histories', 'details']);
      showModal();
    },
    onError: () => showToast('수정 실패', true),
  };

  return useMutation(editRequest, mutationOptions);
};

export default useEditRequest;
