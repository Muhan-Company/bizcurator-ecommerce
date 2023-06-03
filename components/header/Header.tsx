import DownHeader from './DownHeader';
import TopHeader from './TopHeader';

export default function Header() {
  return (
    <header className="sticky-header shadow-bottom">
      <TopHeader />
      <DownHeader />
    </header>
  );
}
