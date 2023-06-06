import { AddToCartVariables } from '@/components/products/Purchase';
import useAxiosPrivate from './useAxiosPrivate';
import { useMutation } from '@tanstack/react-query';
import useInvalidateQueries from './useInvalidateQueries';
import useModal from './useModal';
import { useRecoilState } from 'recoil';
import { addCompleteModalState } from '@/atoms/modalAtoms';
import useToast from './useToast';

const useAddToCart = () => {
  const axiosPrivate = useAxiosPrivate();
  const [showAddCompleteModal, setShowAddCompleteModal] = useRecoilState(addCompleteModalState);
  const { openModal } = useModal(showAddCompleteModal, setShowAddCompleteModal);
  const invalidateQueries = useInvalidateQueries();
  const showToast = useToast();

  const addToCart = async ({ product_id, quantity }: AddToCartVariables) => {
    const { data } = await axiosPrivate.post('/api/carts', { product_id, quantity });
    return data;
  };

  const mutationOptions = {
    onSuccess: () => {
      openModal();
      invalidateQueries(['carts']);
    },
    onError: () => {
      showToast('장바구니 담기 실패', true);
    },
  };

  return useMutation(addToCart, mutationOptions);
};

export default useAddToCart;
