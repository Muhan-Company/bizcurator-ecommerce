import Link from 'next/link';
import { useRouter } from 'next/router';

export interface CategoryLinkProps {
  id: number;
  name: string;
}

export default function CategoryLink({ id, name }: CategoryLinkProps) {
  const router = useRouter();
  const isActive = router.query.category_id === id.toString();

  return (
    <Link
      href={`/products/${id}?sort=newest`}
      className={`${
        isActive ? 'text-main' : 'text-gray_01'
      } font-medium text-label-sm inline-block min-w-fit text-center`}
    >
      {name}
    </Link>
  );
}
