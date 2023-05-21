import { useRouter } from 'next/router';

export default function Search() {
  const { query } = useRouter();

  return <div>{query.q}</div>;
}
