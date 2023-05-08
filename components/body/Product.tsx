import Image from 'next/image';
import { Cart } from '../Icons';

export default function Product() {
  return (
    <div>
      <div className="w-[111px] h-[111px] relative">
        <Image src={'/img/tissue.png'} alt="Product" fill className="object-cover" />
        <button className="w-7 h-7 bg-white/50 rounded-full absolute flex justify-center items-center bottom-[10px] right-[10px]">
          <Cart className="w-4 h-4 text-main" />
        </button>
      </div>
      <div className="space-y-1">
        <h3 className="font-medium text-title-xs text-main">
          두루마리 휴지 <br /> 24롤
        </h3>
        <h3 className="font-noraml text-title-xs text-main">가격비공개</h3>
      </div>
    </div>
  );
}
