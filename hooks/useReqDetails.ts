import { ReqArgs } from '@/apis/mypage';
import { useQuery } from '@tanstack/react-query';
import useAxiosPrivate from './useAxiosPrivate';

const useReqDetails = ({ reqId, reqType }: ReqArgs) => {
  const axiosPrivate = useAxiosPrivate();

  const getReqDetails = async ({ reqId, reqType }: ReqArgs) => {
    const { data } = await axiosPrivate.get(`/api/mypages/requests/histories/${reqId}?type=${reqType}`);

    return data;
  };

  return useQuery({
    queryKey: ['histories', reqId, reqType],
    queryFn: () => getReqDetails({ reqId, reqType }),
    select: (data) => data.result.details,
    enabled: !!reqId,
  });
};

export default useReqDetails;
