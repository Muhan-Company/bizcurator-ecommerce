import { toast } from 'react-hot-toast';

export default function MyInfo() {
  let toastId: null | string = null;

  const notify = () => {
    // Clear previous toast if it exists
    if (toastId) {
      toast.remove(toastId);
    }

    // Show the new toast
    toastId = toast('수정은 마이페이지에서 가능합니다.');

    () => toastId;
  };

  return (
    <div className="mt-10 mx-3" onClick={notify}>
      <h1 className="font-bold text-gray_01 text-body-md">구매 담당자 직통번호</h1>
      <h3 className="font-normal text-body-sm text-gray_01">구매 신청 및 담당 책임자의 직통 번호</h3>
      <section className="space-y-[10px] mt-4">
        <h3 className="my-info">이름</h3>
        <h3 className="my-info">번호</h3>
      </section>
    </div>
  );
}
