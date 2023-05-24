import Image from 'next/image';
import Counter from '../cart/Counter';
import AddCompleteModal from './AddCompleteModal';
import { useRecoilValue } from 'recoil';
import { addCompleteModalState } from '@/atoms/modalAtoms';
import { addToCart } from '@/apis/cartApis';
import { AxiosResponse } from 'axios';
import { AddToCartVariables } from '../products/Purchase';
import useInvalidation from '@/hooks/useInvalidateQueries';
import useCustomMutation from '@/hooks/useCustomMutation';
import useAddCompleteModal from '@/hooks/useAddCompleteModal';

interface AddToCartProps {
  id: number;
  product_name: string;
  main_image_url: string;
  sale_price: number;
  regular_price: number;
  min_quantity: number;
  setShowAddToCartModal: React.Dispatch<React.SetStateAction<boolean>>;
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
}

// todo: 클릭한 상품 data 가져와서 적용하기
export default function AddToCartModal({
  id,
  product_name,
  main_image_url,
  sale_price,
  regular_price,
  min_quantity,
  setShowAddToCartModal,
  quantity,
  setQuantity,
}: AddToCartProps) {
  const originalPrice = (regular_price * quantity).toLocaleString('ko-KR');
  const discountedPrice = (sale_price * quantity).toLocaleString('ko-KR');

  const showAddCompleteModal = useRecoilValue(addCompleteModalState);

  const closeModal = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowAddToCartModal(false);
    document.body.classList.remove('modal-open');
    setQuantity(min_quantity);
  };

  const invalidateQueries = useInvalidation();
  const showModal = useAddCompleteModal();

  const handleSuccess = () => {
    showModal();
    invalidateQueries(['carts']);
  };

  const { mutate, isLoading, isError } = useCustomMutation<AxiosResponse, AddToCartVariables>(addToCart, handleSuccess);

  return (
    <>
      {showAddCompleteModal ? (
        <AddCompleteModal setShowAddToCartModal={setShowAddToCartModal} />
      ) : (
        <>
          <div
            onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
            className="w-[351px] modal-contents h-auto pt-[30px] px-3 flex-col center modal-box-shadow"
          >
            <div className="flex w-full space-x-[22px] py-[18px]">
              {/* 상품 썸네일 */}
              <Image
                src={main_image_url}
                alt="Thumbnail"
                width={86}
                height={86}
                className="object-cover aspect-square rounded-[10px]"
              />
              {/* 상품 정보 */}
              <div>
                <h3 className="font-normal">{product_name}</h3>
                <span className="font-bold">{sale_price.toLocaleString('ko-KR')}원</span>
              </div>
            </div>
            {/* 수량 계산 */}
            <div className="w-full mb-5 px-2 py-[15px] flex items-center justify-between bg-gray_03">
              <Counter min_quantity={min_quantity} quantity={quantity} setQuantity={setQuantity} />
              <h4 className="font-medium text-main text-body-sm">총 금액</h4>
              <div className="flex flex-col text-end">
                {/* 할인적용 가격 */}
                <span className="font-bold">{discountedPrice}원</span>
                {/* 정가 */}
                <span className="text-label-sm text-gray_01 line-through">{originalPrice}원</span>
              </div>
            </div>

            <p className="text-red text-sm font-bold h-5">{isError && '장바구니 담기 실패'}</p>
            {/* <p className="text-red text-sm font-bold"></p> */}
            <div className="center gap-2 py-6">
              {/* todo: 모달 닫기 기능 연결 */}
              <button className="btn-white w-[156px] h-[42px] py-[19px]" onClick={closeModal}>
                취소
              </button>
              {/* todo: 장바구니 담기 API 연결 및 장바구니 담기 성공 모달 연결 */}
              <button
                disabled={isLoading}
                className="btn-primary w-[156px] h-[42px] py-[19px] disabled:opacity-50 disabled:cursor-pointer"
                onClick={() => mutate({ product_id: id, quantity })}
              >
                {isLoading ? '장바구니 담는 중...' : '장바구니 담기'}
              </button>
            </div>
          </div>
          <div className="modal-overlay" onClick={closeModal}></div>
        </>
      )}
    </>
  );
}
