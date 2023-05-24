import { sortByState } from '@/atoms/sortByAtom';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useRecoilValue } from 'recoil';

export interface CategoryLinkProps {
  id: number;
  name: string;
}

export default function CategoryLink({ id, name }: CategoryLinkProps) {
  const sortBy = useRecoilValue(sortByState);

  const { query } = useRouter();

  const active = query.category_id === id.toString();

  return (
    <Link
      href={`/products/categories/${id}?sort=${sortBy.english}`}
      className={`${
        active ? 'text-main' : 'text-gray_01'
      } font-medium text-label-sm inline-block min-w-fit text-center`}
    >
      {name}
    </Link>
  );
}
