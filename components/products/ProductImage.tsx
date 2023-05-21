import { Trending } from '@/pages';
import Image from 'next/image';

export default function ProductImage({ main_image_url }: Trending) {
  return (
    <div className="mt-[68px] h-[375px] relative">
      <Image src={main_image_url} alt="Product image" fill priority className="object-cover" />
    </div>
  );
}
