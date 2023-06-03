import Image from 'next/image';
import { CheckBoxIcon, CheckedBoxIcon, CloseIcon } from '../Icons';
import { CartItemType } from './CartItemList';
import CartItemInfo from './CartItemInfo';
import useRemoveItems from '@/hooks/useRemoveItems';
import useToast from '@/hooks/useToast';
import useInvalidateQueries from '@/hooks/useInvalidateQueries';

type CartItemProps = {
  item: CartItemType;
  toggleItem: (itemId: number, selected: boolean) => void;
  handleQtyChange: (itemId: number, quantity: number) => void;
};

export default function CartItem({ item, toggleItem, handleQtyChange }: CartItemProps) {
  const { product_image_url, product_id, selected } = item;

  const handleCheckboxChange = () => {
    toggleItem(product_id, !selected);
  };
  const showToast = useToast();
  const invalidateQueries = useInvalidateQueries();

  const handleSuccess = () => {
    showToast('삭제가 완료되었습니다');
    invalidateQueries(['carts']);
  };

  const removeItemsMutation = useRemoveItems(handleSuccess);

  const { mutate } = removeItemsMutation;

  return (
    <div className="flex md:items-center md:w-[800px] py-[22px] border-b-[1px] border-b-gray_02">
      <div className="pr-3 md:pl-7" onClick={handleCheckboxChange}>
        {selected ? <CheckedBoxIcon /> : <CheckBoxIcon />}
      </div>
      <div className="flex grow">
        <div className="w-[86px] md:w-[120px] h-[86px] md:h-[120px] rounded-[10px] bg-gray_04 p-3 box-border">
          <Image
            src={product_image_url}
            alt="thumbnail"
            width={62}
            height={62}
            className="w-full	h-full md:object-cover"
          />
        </div>
        {/* todo: 상품 정보 props 내려주기 */}
        <CartItemInfo item={item} handleQtyChange={handleQtyChange} />
      </div>
      {/* todo: 삭제기능 연결 */}
      <div onClick={() => mutate([product_id])} className="pr-[10px] md:ml-6 md:flex md:items-center">
        <CloseIcon />
      </div>
    </div>
  );
}
