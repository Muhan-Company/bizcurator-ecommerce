import FloatingButtons from '../body/FloatingButtons';
import TopHeader from '../header/TopHeader';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <TopHeader />
      {children}
      <FloatingButtons />
    </>
  );
}
