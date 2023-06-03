import { getMyRequests } from '@/apis/mypage';
import { useQuery } from '@tanstack/react-query';

const useMyRequests = (filter_month: number) => {
  return useQuery({
    queryKey: ['requests', 'orders'],
    queryFn: () => getMyRequests(filter_month),
    enabled: !!filter_month,
  });
};

export default useMyRequests;
