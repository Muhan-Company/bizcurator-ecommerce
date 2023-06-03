import { useMutation } from '@tanstack/react-query';
import useAxiosPrivate from './useAxiosPrivate';

const useRemoveItems = (handleSuccess: () => void) => {
  const axiosPrivate = useAxiosPrivate();

  const removeCartItems = async (itemIdList: number[]) => {
    const { data } = await axiosPrivate.post('/api/carts/delete', itemIdList);

    return data;
  };

  const mutationOptions = {
    onSuccess: handleSuccess,
  };

  return useMutation(removeCartItems, mutationOptions);
};

export default useRemoveItems;
