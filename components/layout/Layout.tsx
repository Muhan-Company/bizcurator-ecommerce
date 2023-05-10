import FloatingButton from '../body/FloatingButton';
import TopHeader from '../header/TopHeader';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <TopHeader />
      {children}
      <FloatingButton />
    </>
  );
}
