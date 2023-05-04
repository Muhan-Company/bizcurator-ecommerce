import { useRouter } from 'next/router';

export default function Search() {
  const router = useRouter();

  return <div>{router.query.q}</div>;
}
