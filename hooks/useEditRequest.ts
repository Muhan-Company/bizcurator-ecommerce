import { ReqArgs } from '@/apis/mypage';
import useAxiosPrivate from './useAxiosPrivate';
import { useMutation } from '@tanstack/react-query';
import useModal from './useModal';
import { useRecoilState } from 'recoil';
import { editCompleteModalState } from '@/atoms/modalAtoms';
import useToast from './useToast';
import useInvalidateQueries from './useInvalidateQueries';

const useEditRequest = ({ reqId, reqType }: ReqArgs) => {
  const axiosPrivate = useAxiosPrivate();
  const [showEditCompleteModal, setShowEditCompleteModal] = useRecoilState(editCompleteModalState);
  const { openModal } = useModal(showEditCompleteModal, setShowEditCompleteModal);
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
      openModal();
    },
    onError: () => showToast('수정 실패', true),
  };

  return useMutation(editRequest, mutationOptions);
};

export default useEditRequest;
