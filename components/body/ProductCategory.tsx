import Link from 'next/link';

interface CategoryType {
  href: string;
  icon: JSX.Element;
  name: string;
}

export default function ProductCategory({ href, icon, name }: CategoryType) {
  return (
    <Link href={href} className="flex flex-col items-center w-24">
      <div className="w-10 h-10 flex items-center justify-center">{icon}</div>
      <h3 className="font-normal text-button-xs">{name}</h3>
    </Link>
  );
}
