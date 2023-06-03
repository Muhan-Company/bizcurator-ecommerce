import { ReqArgs, getReqDetails } from '@/apis/mypage';
import { useQuery } from '@tanstack/react-query';

const useReqDetails = ({ reqId, reqType }: ReqArgs) => {
  return useQuery({
    queryKey: ['histories', reqId, reqType],
    queryFn: () => getReqDetails({ reqId, reqType }),
    select: (data) => data.result.details,
    enabled: !!reqId,
  });
};

export default useReqDetails;
