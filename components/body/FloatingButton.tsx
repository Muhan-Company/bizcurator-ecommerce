import { ChevronUpIcon, KaKaoLogoIcon } from '../Icons';

export default function FloatingButton() {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="fixed bottom-20 sm:bottom-3 right-3 z-10 flex flex-col items-center gap-y-3">
      <button className="bg-[#FEE500] rounded-full p-2 shadow-[0px_2px_12px_rgba(0,0,0,0.1)]">
        <KaKaoLogoIcon />
      </button>
      <button onClick={scrollToTop} className="shadow-[0px_2px_12px_rgba(0,0,0,0.1)] rounded-full bg-white p-2">
        <ChevronUpIcon />
      </button>
    </div>
  );
}
