import { useRouter } from 'next/router';
import { ChevronLeftIcon } from '../Icons';
import { useSetRecoilState } from 'recoil';
import { addCompleteModalState } from '@/atoms/modalAtoms';

export default function SubHeader({ text }: { text: string | undefined }) {
  const { back } = useRouter();
  const setShowAddCompleteModal = useSetRecoilState(addCompleteModalState);

  const goBack = () => {
    back();
    setShowAddCompleteModal(false);
  };

  return (
    <div className="relative mt-3 h-[55px]">
      <button onClick={goBack} className="absolute left-3 top-1/2 -translate-y-1/2">
        <ChevronLeftIcon width="20" height="20" color="#999999" />
      </button>
      <h2 className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">{text}</h2>
    </div>
  );
}
