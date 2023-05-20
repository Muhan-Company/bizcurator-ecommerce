import { toast } from 'react-hot-toast';

type ShowToastFunction = (message: string, isError?: boolean) => void;

const useToast = (): ShowToastFunction => {
  const showToast: ShowToastFunction = (message, isError = false) => {
    if (isError) {
      toast.error(message, {
        id: 'error',
      });
    } else {
      toast(message, {
        id: 'regular',
      });
    }
  };

  return showToast;
};

export default useToast;
