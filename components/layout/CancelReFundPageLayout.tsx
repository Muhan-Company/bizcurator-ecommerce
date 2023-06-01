import DateFilter from '../orders/DateFilter';
import Layout from './Layout';

interface CancelReFundPageLayout {
  children: React.ReactNode;
}
export default function CancelReFundPageLayout({ children }: CancelReFundPageLayout) {
  return (
    <Layout className="bottom-2">
      <div className="mx-3 mt-5">
        <DateFilter />
        {children}
      </div>
    </Layout>
  );
}
