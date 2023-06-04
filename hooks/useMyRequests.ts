import { useQuery } from '@tanstack/react-query';
import useAxiosPrivate from './useAxiosPrivate';
import { ReqDetail } from '@/components/my-requests/MyRequestsListTable';

const useMyRequests = (filter_month: number) => {
  const axiosPrivate = useAxiosPrivate();

  const getMyRequests = async (filter_month: number) => {
    const { data } = await axiosPrivate.get(`/api/mypages/requests/histories?filter-month=${filter_month}`);

    return data;
  };

  return useQuery({
    queryKey: ['requests', 'histories'],
    queryFn: () => getMyRequests(filter_month),
    enabled: !!filter_month,
    select: (data) => {
      const detailsList = data.result.details;

      return detailsList.sort((a: ReqDetail, b: ReqDetail) => Number(b.createdAt) - Number(a.createdAt));
    },
  });
};

export default useMyRequests;
