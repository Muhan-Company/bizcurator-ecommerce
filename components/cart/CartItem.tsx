import Image from 'next/image';
import { CheckBoxIcon, CheckedBoxIcon, CloseIcon } from '../Icons';
import CartItemInfo from './CartItemInfo';

type CartItemPropsType = {
  isSelected: boolean;
  setIsSelected: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function CartItem({ isSelected, setIsSelected }: CartItemPropsType) {
  return (
    <div className="flex md:items-center md:w-[800px] py-[22px] border-b-[1px] border-b-gray_02">
      <div className="pr-3 md:pl-7" onClick={() => setIsSelected(!isSelected)}>
        {isSelected ? <CheckedBoxIcon /> : <CheckBoxIcon />}
      </div>
      <div className="flex grow">
        <div className="w-[86px] md:w-[120px] h-[86px] md:h-[120px] rounded-[10px] bg-gray_04 p-3 box-content">
          <Image
            src="/img/image 68.png"
            alt="thumbnail"
            width={62}
            height={62}
            className="w-full	h-full md:object-cover"
          />
        </div>
        {/* todo: 상품 정보 props 내려주기 */}
        <CartItemInfo />
      </div>
      {/* todo: 삭제기능 연결 */}
      <div className="pr-[10px] md:ml-6 md:flex md:items-center">
        <CloseIcon />
      </div>
    </div>
  );
}