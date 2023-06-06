import { useForm } from 'react-hook-form';
import { Category, categories } from './PurchaseForm';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useEffect, useState } from 'react';
import useToast from '@/hooks/useToast';
import NumOne from '../numbers/NumOne';
import { ReqDetails } from '../read-only/Manufactureform';
import { FormInputs } from '../PartnerForm';
import NumTwo from '../numbers/NumTwo';
import NumThree from '../numbers/NumThree';
import { useRecoilValue } from 'recoil';
import { editCompleteModalState } from '@/atoms/modalAtoms';
import useEditRequest from '@/hooks/useEditRequest';
import { createPortal } from 'react-dom';
import EditCompleteModal from '@/components/modals/EditCompleteModal';

const PartnerSchema = yup
  .object({
    product_detail: yup.string().required('생산제품을 입력하세요'),
    establish_year: yup
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

export default function PartnerForm({
  category,
  categoryId,
  desiredDeliveryDate,
  desiredEstimateDate,
  image,
  productDetail,
  productName,
  quantity,
  requestContext,
  requestId,
  establishYear,
  companyIntroduction,
}: ReqDetails) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormInputs>({
    resolver: yupResolver(PartnerSchema),
  });

  const [selectedCategory, setSelectedCategory] = useState<Category>({ id: 0, name: '생산종류카테고리' });
  const [fileTypeError, setFileTypeError] = useState<boolean>(false);
  const [fileSizeError, setFileSizeError] = useState<boolean>(false);
  const [file, setFile] = useState<File | null>(null);
  const showToast = useToast();

  useEffect(() => {
    reset({
      product_detail: productDetail,
      establish_year: establishYear,
      introduction: companyIntroduction,
    });
  }, [reset, productDetail, establishYear, companyIntroduction]);

  useEffect(() => {
    if (category && categoryId) {
      setSelectedCategory({
        id: categoryId,
        name: category,
      });
    }
  }, [category, categoryId]);

  const showEditCompleteModal = useRecoilValue(editCompleteModalState);
  const editReqMutation = useEditRequest({ reqId: requestId, reqType: 'sell' });

  const { mutate, isLoading: loading } = editReqMutation;

  const onSubmit = (data: FormInputs) => {
    if (!file) {
      showToast('이미지를 업로드하세요', true);
      return;
    }

    const post = {
      category: selectedCategory.name,
      productName,
      productDetail: data.product_detail,
      desiredEstimateDate,
      desiredDeliveryDate,
      quantity,
      establishYear: data.establish_year,
      companyIntroduction: data.introduction,
      requestContext,
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
    establish_year: establishYear,
  };

  const formValues3 = {
    ...formValues,
    title: '3. 회사 소개글',
    description: '회사 소개글을 적어주세요',
    placeholder: '회사 소개글을 적어주세요',
    introduction: companyIntroduction,
    file,
    setFile,
    fileSizeError,
    setFileSizeError,
    fileTypeError,
    setFileTypeError,
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="mx-3 mb-40 mt-8">
        <NumOne formValues1={formValues1} />
        <NumTwo formValues2={formValues2} />
        <NumThree formValues3={formValues3} />
        <input
          type="submit"
          disabled={loading}
          value={loading ? '제출 중...' : '제출하기'}
          className="disabled:opacity-50 disabled:cursor-not-allowed submit-btn"
        />
      </form>
      {showEditCompleteModal && createPortal(<EditCompleteModal />, document.body)}
    </>
  );
}
