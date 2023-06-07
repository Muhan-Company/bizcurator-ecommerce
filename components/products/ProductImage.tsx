import { ProductDetail } from '@/pages';
import Image from 'next/image';

export default function ProductImage({ main_image_url }: ProductDetail) {
  return (
    <div className="md:aspect-square md:w-1/2 h-[375px] md:h-auto relative">
      <Image
        src={main_image_url}
        alt="Product image"
        fill
        sizes="100%"
        priority
        className="object-cover md:object-contain"
      />
    </div>
  );
}
