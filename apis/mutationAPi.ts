import { MutationFunction, useMutation } from '@tanstack/react-query';

const useCustomMutation = (mutationFn: MutationFunction) => {
  const mutation = useMutation(mutationFn);

  // Additional logic or customization can be done here

  return mutation;
};

export default useCustomMutation;
