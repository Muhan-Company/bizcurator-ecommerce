import Link from 'next/link';
import { ActiveLinkProps } from '../header/ActiveLink';
import { useRouter } from 'next/router';

export default function DateFilterLink({ href, children, className }: ActiveLinkProps) {
  const { query } = useRouter();

  const regex = /filterMonth=(\d+)/;
  const match = href.match(regex);

  const queryParam = match && match[1];
  const isActive = queryParam === query.filterMonth;

  return (
    <Link href={href} className={`${className} ${isActive ? 'btn-primary' : 'btn-white'}`}>
      {children}
    </Link>
  );
}
