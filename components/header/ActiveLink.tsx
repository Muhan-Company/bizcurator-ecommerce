import Link from 'next/link';
import { useRouter } from 'next/router';

export interface ActiveLinkProps {
  href: string;
  children: string;
  className?: string;
}

export default function ActiveLink({ href, children, className }: ActiveLinkProps) {
  const router = useRouter();

  const isActive = router.asPath === href;

  return (
    <Link href={href} className={`${isActive && 'text-main border-b-[1px] border-main'} ${className} header-link`}>
      {children}
    </Link>
  );
}
