import { useForm } from 'react-hook-form';
import { Category, categories } from './PurchaseForm';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useState } from 'react';
import NumOne from './Numbers/NumOne';
import NumTwo from './Numbers/NumTwo';
import NumThree from './Numbers/NumThree';
import useToast from '@/hooks/useToast';
import { MyInfoProps } from './MyInfo';
import useInvalidateQueries from '@/hooks/useInvalidateQueries';
import { useSetRecoilState } from 'recoil';
import reqSuccessState from '@/atoms/reqSuccessAtom';
import { useRouter } from 'next/router';
import useCustomMutation from '@/hooks/useCustomMutation';
import { AxiosResponse } from 'axios';
import { requestPartner } from '@/apis/requestApis';
import { format } from 'date-fns';

export interface FormInputs {
  product_detail: string;
  established_year: number;
  introduction: string;
}

const PartnerSchema = yup
  .object({
    product_detail: yup.string().required('생산제품을 입력하세요'),
    established_year: yup
      .number()
      .typeError('설립연도를 입력하세요')
      .positive('양수를 입력하세요')
      .integer('정수를 입력하세요')
      .test('is-future-year', '유효하지 않은 년도', (value: number | undefined) => {
        const currentYear = new Date().getFullYear();

        return value! <= currentYear;
      }),
    introduction: yup.string().required('회사에 대해 설명해주세요'),
  })
  .required();

export default function PartnerForm({ data: info }: MyInfoProps) {
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
  const invalidateQueries = useInvalidateQueries();
  const setReqSuccess = useSetRecoilState(reqSuccessState);
  const { push } = useRouter();

  const handleSuccess = () => {
    invalidateQueries(['requests', 'partner']);
    setReqSuccess(true);
    push('/my-requests');
  };

  const { mutate, isLoading: loading } = useCustomMutation<AxiosResponse, FormData>(requestPartner, handleSuccess, () =>
    showToast('제출 실패', true),
  );

  const onSubmit = (data: FormInputs) => {
    if (!file) {
      showToast('이미지를 업로드하세요', true);
      return;
    }

    const post = {
      ...data,
      business_name: info?.business_name,
      ceo_name: info?.representative,
      business_number: info?.business_number,
      manager_phone_number: info?.manager_phone_number,
      category: selectedCategory.id,
      established_year: format(data.established_year, 'yyyy-MM-dd'),
    };

    const formData = new FormData();

    formData.append('post', new Blob([JSON.stringify(post)], { type: 'application/json' }));
    formData.append('image', file);

    mutate(formData);
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
      <input
        type="submit"
        disabled={loading}
        value={loading ? '제출 중...' : '제출하기'}
        className="disabled:opacity-50 disabled:cursor-not-allowed submit-btn"
      />{' '}
    </form>
  );
}
