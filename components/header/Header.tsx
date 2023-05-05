import { useState } from 'react';
import TopHeader from './TopHeader';
import DownHeader from './DownHeader';

export default function Header() {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <header className="z-10 shadow-md bg-white pt-2 lg:pt-5 lg:px-24 xl:px-48 space-y-3 lg:space-y-10 top-0 sticky">
      <TopHeader />
      <DownHeader isHovered={isHovered} setIsHovered={setIsHovered} />
    </header>
  );
}
