import DownHeader from './DownHeader';
import TopHeader from './TopHeader';

export default function Header() {
  return (
    <header className="max-w-xl md:max-w-3xl xl:max-w-5xl mx-auto space-y-5">
      <TopHeader />
      <DownHeader />
    </header>
  );
}
