import DateFilter from '@/components/orders/DateFilter';
import DeliveryStateFilter from '@/components/orders/DeliveryStateFilter';
import EmptyOrderList from './EmptyOrderList';
import Order from './Order';

type OrderListProps = {
  orders?: any[];
};
export default function OrderList({ orders = [1] }: OrderListProps) {
  return (
    <div className="pt-[26px] mx-3 static">
      <DateFilter />
      <DeliveryStateFilter />
      {orders.length < 1 ? (
        <EmptyOrderList />
      ) : (
        <div>
          {/* todo: api 데이터 받아 map함수 사용 */}
          {/* todo: orderTime, paymentId props 내려주기 */}
          <Order />
        </div>
      )}
    </div>
  );
}
