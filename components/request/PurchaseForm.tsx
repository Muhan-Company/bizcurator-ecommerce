import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useEffect, useRef, useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '../Icons';

interface IFormInputs {
  itemName: string;
}

interface Category {
  id: number;
  name: string;
}

const SignupSchema = yup
  .object({
    itemName: yup.string().required(),
  })
  .required();

export default function PurchaseForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(SignupSchema),
  });

  const onSubmit = (data: IFormInputs) => {
    alert(JSON.stringify(data));
  };

  const [selectecdcategory, setSelectecdCategory] = useState<Category>({ id: 0, name: '카테고리 선택' });
  const [open, setOpen] = useState<boolean>(false);

  const dropdownRef = useRef<HTMLUListElement>(null);

  const handleOutsideClick = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  const categories = [
    {
      id: 1,
      name: '객실용품',
    },
    {
      id: 2,
      name: '욕실용품',
    },
    {
      id: 3,
      name: '위생용품',
    },
    {
      id: 4,
      name: '침구류',
    },
    {
      id: 5,
      name: '가전/전자제품',
    },
    {
      id: 6,
      name: '청소/시설관리',
    },
    {
      id: 7,
      name: '소방/안전관리',
    },
    {
      id: 8,
      name: '사무용품',
    },
    {
      id: 9,
      name: '음료/식품',
    },
    {
      id: 10,
      name: '선물세트',
    },
  ];

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mx-3 space-y-24">
      <div className="space-y-1.5 relative">
        <label className="font-bold text-label-md text-main space-y-2">
          1. 구매 희망 품목 <span className="text-red">*</span>
          <p className="font-normal text-body-sm">구매하고자 하는 상품의 카테고리를 선택하시고 상품명을 입력하세요</p>
        </label>

        <ul
          ref={dropdownRef}
          onClick={() => setOpen((prev) => !prev)}
          className={`z-10 flex flex-col gap-y-2 px-4 py-2 font-medium text-main text-body-sm w-[150px] border-[1px] border-main rounded-lg transition-all duration-300 absolute top-[75px] left-0 bg-white ${
            open ? 'max-h-[435px]' : 'max-h-10 overflow-hidden'
          }`}
        >
          <li className="flex category justify-between">
            {selectecdcategory.name}
            {open ? (
              <ChevronUpIcon color="#1C1C1C" width="20" height="20" />
            ) : (
              <ChevronDownIcon color="#1C1C1C" width="20" height="20" />
            )}
          </li>
          {categories.map((category) => (
            <li
              key={category.id}
              className="category last:border-none"
              onClick={() => {
                setSelectecdCategory(category);
              }}
            >
              {category.name}
            </li>
          ))}
        </ul>

        <input
          {...register('itemName')}
          className="absolute top-[120px] px-4 font-normal text-main text-body-xs bg-gray_04 rounded-lg h-[50px] w-full outline-none"
        />
        {errors.itemName && <p>{errors.itemName.message}</p>}
      </div>

      <button type="submit">제출하기</button>
    </form>
  );
}
