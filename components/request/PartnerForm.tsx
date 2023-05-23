import { useForm } from 'react-hook-form';
import { Category, categories } from './PurchaseForm';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useState } from 'react';
import NumOne from './Numbers/NumOne';
import NumTwo from './Numbers/NumTwo';
import NumThree from './Numbers/NumThree';

export interface FormInputs {
  detail: string;
  year: number;
  intro: string;
}

const PartnerSchema = yup
  .object({
    detail: yup.string().required('생산제품을 입력하세요'),
    year: yup
      .number()
      .typeError('설립연도를 입력하세요') // Custom error message for non-number values
      .positive('양수를 입력하세요')
      .integer('정수를 입력하세요'),
    intro: yup.string().required('회사에 대해 설명해주세요'),
  })
  .required();

export default function PartnerForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>({
    resolver: yupResolver(PartnerSchema),
  });

  const onSubmit = (data: FormInputs) => {
    alert(JSON.stringify(data));
  };

  const formValues = {
    register,
    errors,
  };

  const [selectedCategory, setSelectedCategory] = useState<Category>({ id: 0, name: '생산종류카테고리' });

  const formValues1 = {
    ...formValues,
    title: '생산하시는 제품의 종류를 기입해주세요',
    categories,
    selectedCategory,
    setSelectedCategory,
  };

  const formValues2 = {
    ...formValues,
    title: '2. 설립연도',
    description: '회사를 설립한 년도를 기입해주세요',
  };

  const formValues3 = {
    ...formValues,
    title: '3. 회사 소개글',
    description: '회사 소개글을 적어주세요',
    placeholder: '회사 소개글을 적어주세요',
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mx-3 mb-40">
      <NumOne formValues1={formValues1} />
      <NumTwo formValues2={formValues2} />
      <NumThree formValues3={formValues3} />
      <input
        type="submit"
        value={'제출하기'}
        className="mt-[60px] disabled:cursor-not-allowed disabled:opacity-50 bg-primary h-[60px] rounded-lg w-full text-white font-normal text-button-md"
      />
    </form>
  );
}
