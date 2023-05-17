import DateFilter from '../orders/DateFilter';
import Layout from './Layout';

interface CancelReFundPageLayout {
  children: React.ReactNode;
}
export default function CancelReFundPageLayout({ children }: CancelReFundPageLayout) {
  return (
    <Layout>
      <div className="mx-3">
        <DateFilter />
        {children}
      </div>
    </Layout>
  );
}
