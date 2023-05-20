import { UseMutationResult, useMutation } from '@tanstack/react-query';

const useCustomMutation = <TData = unknown, TVariables = unknown>(
  mutationFn: (variables: TVariables) => Promise<TData>,
  onSuccess: () => void,
  onError?: () => void,
): UseMutationResult<TData, unknown, TVariables> => {
  const mutation = useMutation<TData, unknown, TVariables>({ mutationFn, onSuccess, onError });

  return mutation;
};

export default useCustomMutation;
