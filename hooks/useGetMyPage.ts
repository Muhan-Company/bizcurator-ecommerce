import useAxiosPrivate from './useAxiosPrivate';
import { useQuery } from '@tanstack/react-query';

const useGetMyPage = () => {
  const axiosPrivate = useAxiosPrivate();

  const getMyPage = async () => {
    const { data } = await axiosPrivate.get('/api/mypages');

    return data.result.histories;
  };

  return useQuery({
    queryKey: ['mypages'],
    queryFn: getMyPage,
  });
};

export default useGetMyPage;
