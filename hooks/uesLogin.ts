import { login } from '@/apis/users';
import { useMutation } from '@tanstack/react-query';

const useLogin = () => {
  const mutationOptions = {
    onSuccess: () => {
      window.location.reload();
    },
  };

  return useMutation(login, mutationOptions);
};

export default useLogin;
