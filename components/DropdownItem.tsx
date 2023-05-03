import Link from 'next/link';

interface DropdownItemProps {
  href: string;
  icon: JSX.Element;
  category: string;
}

export default function DropdownItem({ href, icon, category }: DropdownItemProps) {
  return (
    <Link
      href={href}
      className="hover:bg-gray-100 duration-150 transition-colors h-12 px-3 flex items-center justify-between"
    >
      <div className="w-10 h-10 flex justify-center items-center">{icon}</div>
      <h3 className="text-label-md font-normal text-main">{category}</h3>
    </Link>
  );
}
