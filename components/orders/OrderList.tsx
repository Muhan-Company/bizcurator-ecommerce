import DateFilter from '@/components/orders/DateFilter';
import DeliveryStateFilter from '@/components/orders/DeliveryStateFilter';
import EmptyOrderList from './EmptyOrderList';
import Order, { OrderProps } from './Order';
import { useRecoilValue } from 'recoil';
import { selectedDateFilterState } from '@/atoms/selectedDateFilterAtom';
import { useGetOrderList } from '@/apis/orders';
import { useRouter } from 'next/router';

export default function OrderList() {
  const selectedDateFilter = useRecoilValue(selectedDateFilterState);
  const { query } = useRouter();

  const { data } = useGetOrderList(query?.state, selectedDateFilter);
  console.log(data);
  return (
    <div className="pt-[26px] mx-3">
      <DateFilter />
      <DeliveryStateFilter />

      {data?.length < 1 ? (
        <div className="flex">
          <EmptyOrderList />
        </div>
      ) : (
        <div>
          {data?.map((order: OrderProps) => (
            <Order
              key={order?.paymentId}
              orderTime={order.orderInfo[0].orderTime}
              paymentId={order?.paymentId}
              orderInfo={order.orderInfo}
            />
          ))}
        </div>
      )}
    </div>
  );
}
