import { useQueryClient } from '@tanstack/react-query';

const useInvalidation = () => {
  const queryClient = useQueryClient();

  const invalidateQueries = (queryKey: string[]) => {
    queryClient.invalidateQueries(queryKey);
  };

  return invalidateQueries;
};

export default useInvalidation;
