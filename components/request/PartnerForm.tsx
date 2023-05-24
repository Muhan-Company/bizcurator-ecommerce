import { useForm } from 'react-hook-form';
import { Category, categories } from './PurchaseForm';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useState } from 'react';
import NumOne from './Numbers/NumOne';
import NumTwo from './Numbers/NumTwo';
import NumThree from './Numbers/NumThree';
import useToast from '@/hooks/useToast';

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
      .typeError('설립연도를 입력하세요')
      .positive('양수를 입력하세요')
      .integer('정수를 입력하세요')
      .test('is-future-year', '유효하지 않은 년도', (value: number | undefined) => {
        const currentYear = new Date().getFullYear();

        return value! <= currentYear;
      }),
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

  const [selectedCategory, setSelectedCategory] = useState<Category>({ id: 0, name: '생산종류카테고리' });
  const [fileTypeError, setFileTypeError] = useState<boolean>(false);
  const [fileSizeError, setFileSizeError] = useState<boolean>(false);

  const [file, setFile] = useState<File | null>(null);

  const showToast = useToast();

  const onSubmit = (data: FormInputs) => {
    if (!file) {
      showToast('이미지를 업로드하세요', true);
      return;
    }

    const newData = { ...data, image: file };
    const formData = new FormData();

    formData.append('detail', newData.detail);
    formData.append('year', newData.year.toString());
    formData.append('intro', newData.intro);
    formData.append('image', newData.image);
  };

  const formValues = {
    register,
    errors,
  };

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
    file,
    setFile,
    fileSizeError,
    setFileSizeError,
    fileTypeError,
    setFileTypeError,
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mx-3 mb-40">
      <NumOne formValues1={formValues1} />
      <NumTwo formValues2={formValues2} />
      <NumThree formValues3={formValues3} />
      <input type="submit" value={'제출하기'} className="submit-btn" />
    </form>
  );
}
