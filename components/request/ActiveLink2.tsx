import Link from 'next/link';
import { ActiveLinkProps } from '../header/ActiveLink';
import { useRouter } from 'next/router';

export default function ActiveLink2({ className, href, children }: ActiveLinkProps) {
  const router = useRouter();

  const isActive = router.asPath.includes(href);

  return (
    <Link className={`${className} ${isActive ? 'text-primary bg-secondary' : 'text-white bg-gray_02'}`} href={href}>
      {children}
    </Link>
  );
}
