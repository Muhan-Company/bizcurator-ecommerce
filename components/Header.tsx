import DownHeader from './DownHeader';
import TopHeader from './TopHeader';

export default function Header() {
  return (
    <header className="py-2 md:py-5 max-w-xl md:max-w-2xl xl:max-w-5xl mx-auto space-y-3 md:space-y-10 top-0 sticky">
      <TopHeader />
      <DownHeader />
    </header>
  );
}
