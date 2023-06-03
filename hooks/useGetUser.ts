import useAxiosPrivate from './useAxiosPrivate';
import { useQuery } from '@tanstack/react-query';

const useGetUser = () => {
  const axiosPrivate = useAxiosPrivate();

  const getUser = async () => {
    const { data } = await axiosPrivate.get('/api/users/check');

    return data.result.info;
  };

  return useQuery({
    queryKey: ['users', 'check'],
    queryFn: getUser,
  });
};

export default useGetUser;
