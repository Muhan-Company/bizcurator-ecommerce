import { useQueryClient } from '@tanstack/react-query';

const useInvalidateQueries = () => {
  const queryClient = useQueryClient();

  const invalidateQueries = (queryKey: string[]) => {
    queryClient.invalidateQueries(queryKey);
  };

  return invalidateQueries;
};

export default useInvalidateQueries;
