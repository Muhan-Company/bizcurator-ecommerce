import Link from 'next/link';
import { useRouter } from 'next/router';

export default function NavLink({ href, children }: any) {
  const router = useRouter();
  const isActive = router.pathname === href;

  return (
    <Link href={href} className={`${isActive && 'text-main border-b-[1px] border-main'} header-link`}>
      {children}
    </Link>
  );
}
