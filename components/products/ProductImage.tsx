import { ProductDetail } from '@/pages';
import Image from 'next/image';

export default function ProductImage({ main_image_url }: ProductDetail) {
  return (
    <div className="h-[375px] relative">
      <Image src={main_image_url} alt="Product image" fill priority className="object-cover" />
    </div>
  );
}
