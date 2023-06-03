import SubHeader from './SubHeader';
import TopHeader from './TopHeader';

export default function Header2({ text }: { text: string }) {
  return (
    <header className="sticky-header shadow-bottom">
      <TopHeader />
      <SubHeader text={text} />
    </header>
  );
}
