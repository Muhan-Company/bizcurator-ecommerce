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
    <div className="flex md:items-center py-[22px] border-b-[1px] border-b-gray_02">
      <div className="mr-3 md:mr-5" onClick={handleCheckboxChange}>
        {selected ? <CheckedBoxIcon /> : <CheckBoxIcon />}
      </div>
      <div className="flex grow">
        <div className="relative h-[62px] rounded-[10px] w-[62px]">
          <Image src={product_image_url} alt="thumbnail" fill className="object-cover" />
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
