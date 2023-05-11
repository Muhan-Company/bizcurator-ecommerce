import Link from 'next/link';
import { useRouter } from 'next/router';

export default function CategoryAllLink() {
  const router = useRouter();
  const isActive = !router.query.category_id;

  return (
    <Link
      href={'/products?sort=newest'}
      className={`${
        isActive ? 'text-main' : 'text-gray_01'
      } font-medium text-label-sm inline-block min-w-fit text-center`}
    >
      전체
    </Link>
  );
}
