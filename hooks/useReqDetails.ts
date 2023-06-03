import { ReqArgs, getReqDetails } from '@/apis/mypage';
import { useQuery } from '@tanstack/react-query';

const useReqDetails = ({ reqId, reqType }: ReqArgs) => {
  return useQuery({
    queryKey: ['histories', reqId, reqType],
    queryFn: () => getReqDetails({ reqId, reqType }),
  });
};

export default useReqDetails;
