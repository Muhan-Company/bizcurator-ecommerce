import { useState } from 'react';
import DownHeader from './DownHeader';
import HeaderDropdown from './HeaderDropdown';
import TopHeader from './TopHeader';

export default function Header() {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <div>
      <header className="z-10 shadow-md bg-white pt-2 lg:pt-5 lg:px-24 xl:px-48 space-y-3 lg:space-y-10 top-0 sticky">
        <TopHeader />
        <DownHeader isHovered={isHovered} setIsHovered={setIsHovered} />
      </header>
    </div>
  );
}
