import Link from 'next/link';

interface CategoryType {
  id: number;
  icon: JSX.Element;
  name: string;
}

export default function ProductCategory({ id, icon, name }: CategoryType) {
  return (
    <Link href={`/products/${id}?sort=newest`} className="flex flex-col items-center w-[88px] sm:w-24">
      <div className="w-10 h-10 flex items-center justify-center">{icon}</div>
      <h3 className="font-normal text-button-xs text-main">{name}</h3>
    </Link>
  );
}
