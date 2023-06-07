import { ReactNode } from 'react';
import FloatingButtons from '../home/FloatingButtons';

type LayoutProps = {
  children: ReactNode;
  className?: string;
};

export default function Layout({ children, className = 'bottom-20' }: LayoutProps) {
  return (
    <div className="layout">
      {children}
      <FloatingButtons className={className} />
    </div>
  );
}
