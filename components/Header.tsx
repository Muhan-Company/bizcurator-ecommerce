import DownHeader from './DownHeader';
import TopHeader from './TopHeader';

export default function Header() {
  return (
    <header className="shadow-md pt-2 lg:pt-5 lg:px-24 xl:px-48 space-y-3 lg:space-y-10 top-0 sticky">
      <TopHeader />
      <DownHeader />
    </header>
  );
}
