import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Category, IFormInputs, RequestSchema } from './PurchaseForm';
import useToast from '@/hooks/useToast';
import { format } from 'date-fns';
import One from '../numbers/One';
import { ReqDetails } from '../read-only/Manufactureform';
import Two from '../numbers/Two';
import Three from '../numbers/Three';
import Four from '../numbers/Four';
import Five from '../numbers/Five';
import Six from '../numbers/Six';
import useEditRequest from '@/hooks/useEditRequest';
import EditCompleteModal from '@/components/modals/EditCompleteModal';
import { createPortal } from 'react-dom';
import { useRecoilValue } from 'recoil';
import { editCompleteModalState } from '@/atoms/modalAtoms';

export default function ManufactureForm({
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
}: ReqDetails) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormInputs>({
    defaultValues: {
      product_name: productName,
      product_detail: productDetail,
      quantity,
      desired_estimate_date: desiredEstimateDate,
      desired_delivery_date: desiredDeliveryDate,
      request_message: requestContext,
    },
    resolver: yupResolver(RequestSchema),
  });

  useEffect(() => {
    reset({
      product_name: productName,
      product_detail: productDetail,
      quantity,
      desired_estimate_date: desiredEstimateDate,
      desired_delivery_date: desiredDeliveryDate,
      request_message: requestContext,
    });
  }, [reset, productName, productDetail, quantity, desiredEstimateDate, desiredDeliveryDate, requestContext]);

  useEffect(() => {
    if (category && categoryId) {
      setSelectedCategory({
        id: categoryId,
        name: category,
      });
    }
  }, [category, categoryId]);

  const categories = [
    { id: 0, name: '제작목적 선택' },
    { id: 1, name: '창업(제품판매)' },
    { id: 2, name: '작품 제작' },
    { id: 3, name: '개인적인 목적' },
  ];

  const [selectedCategory, setSelectedCategory] = useState<Category>(categories[0]);
  const [fileTypeError, setFileTypeError] = useState<boolean>(false);
  const [fileSizeError, setFileSizeError] = useState<boolean>(false);
  const [file, setFile] = useState<File | null>(null);
  const showEditCompleteModal = useRecoilValue(editCompleteModalState);

  const showToast = useToast();

  const editReqMutation = useEditRequest({ reqId: requestId, reqType: 'make' });

  const { mutate, isLoading: loading } = editReqMutation;

  const onSubmit = (data: IFormInputs) => {
    if (!file) {
      showToast('이미지를 업로드하세요', true);
      return;
    }

    const estimateDate =
      typeof data.desired_estimate_date === 'object'
        ? format(data.desired_estimate_date as Date, 'yyyy-MM-dd')
        : data.desired_estimate_date;
    const deliveryDate =
      typeof data.desired_delivery_date === 'object'
        ? format(data.desired_delivery_date as Date, 'yyyy-MM-dd')
        : data.desired_delivery_date;

    const post = {
      category: selectedCategory.name,
      productName: data.product_name,
      productDetail: data.product_detail,
      desiredEstimateDate: estimateDate,
      desiredDeliveryDate: deliveryDate,
      quantity: data.quantity,
      establishYear: 0,
      companyIntroduction: '',
      requestContext: data.request_message,
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
    title: '제품제작 의뢰',
    description: '제품을 만들고자 하는 목적을 고르고 제품 이름을 입력해주세요',
    categories,
    selectedCategory,
    setSelectedCategory,
  };

  const formValues2 = {
    ...formValues,
    title: '제작하고자 하는 제품 설명',
    description: '만들고자 하는 제품의 컨셉 또는 용도를 설명해주세요',
    productDetail,
  };

  const formValues3 = {
    ...formValues,
    title: '3. 제작 수량',
    description: '만들고자 하는 제품 예상 수량을 작성해주세요',
    quantity,
  };

  const formValues4 = {
    ...formValues,
    title: '견적 수령 희망일',
    description: '신청 문의 후, 견적을 받아보고 싶은 날짜를 작성해주세요',
    desiredEstimateDate,
  };

  const formValues5 = {
    ...formValues,
    title: '제품 배송 희망일',
    description: '희망 납품(예상)일 혹은 기한을 작성해주세요. 견적에 따라 실제 납품일은 변경될 수 있습니다.',
    desiredDeliveryDate,
  };

  const formValues6 = {
    ...formValues,
    title: '6. 제품 이미지',
    description:
      '요청사항이나 유사 컨셉의 제품 혹은 이미지나 스케치를 첨부해주세요. 만들고자 하는 제품의 크기, 두께, 재질, 특징들을 상세하게 입력해주세요(e.g, 실리콘, 아크릴7mm, 가로세로 높이: ...mm 등, 상세한요청사항을 적어주시면 요청하신 부분을 잘 반영하여 제품을 제작할 확률이 높아집니다. 상세하게 작성 부탁드립니다)',
    placeholder: '요청사항을 적어주세요',
    requestContext,
    image,
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
        <One formValues1={formValues1} />
        <Two formValues2={formValues2} />
        <Three formValues3={formValues3} />
        <Four formValues4={formValues4} />
        <Five formValues5={formValues5} />
        <Six formValues6={formValues6} />

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
