import { useGetOrderDetail } from '@/apis/orders';
import DeliveryInfo from '@/components/orders/[paymentId]/DeliveryInfo';
import OrderInfo from '@/components/orders/[paymentId]/OrderInfo';
import OrderItemInfo, { OrderItem } from '@/components/orders/[paymentId]/OrderItemInfo';
import PaymentInfo from '@/components/orders/[paymentId]/PaymentInfo';
import { useRouter } from 'next/router';

export default function OrderDetailContainer() {
  const { query } = useRouter();
  const { data } = useGetOrderDetail(Number(query?.paymentId));
  return (
    <div className="mx-3 pb-[64px]">
      <OrderInfo payment_id={data?.paymentId} total_cost={data?.totalCost} />
      {data?.orderDetailList.map((detail: OrderItem) => (
        <OrderItemInfo
          key={detail.orderId}
          orderId={detail.orderId}
          deliveryState={detail.deliveryState}
          item={detail}
        />
      ))}

      <PaymentInfo payment_method={data?.paymentMethod} total_cost={data?.totalCost} />
      <DeliveryInfo
        buyer={data?.buyer}
        postal_code={data?.postalCode}
        address={data?.address}
        request_content={data?.requestContent}
      />
    </div>
  );
}
