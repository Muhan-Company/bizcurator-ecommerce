import useAxiosPrivate from './useAxiosPrivate';
import { useQuery } from '@tanstack/react-query';

const useGetUser = () => {
  const axiosPrivate = useAxiosPrivate();

  const getUser = async () => {
    const { data } = await axiosPrivate.get('/api/users/check');

    return data;
  };

  return useQuery({
    queryKey: ['users', 'check'],
    queryFn: getUser,
    select: (data) => data.result.info,
  });
};

export default useGetUser;
