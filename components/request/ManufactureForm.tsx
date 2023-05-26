import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Category, IFormInputs, RequestSchema } from './PurchaseForm';
import One from './Numbers/One';
import Two from './Numbers/Two';
import Three from './Numbers/Three';
import Four from './Numbers/Four';
import Five from './Numbers/Five';
import Six from './Numbers/Six';
import useToast from '@/hooks/useToast';
import { MyInfoProps } from './MyInfo';
import useInvalidateQueries from '@/hooks/useInvalidateQueries';
import { useSetRecoilState } from 'recoil';
import { useRouter } from 'next/router';
import reqSuccessState from '@/atoms/reqSuccessAtom';
import useCustomMutation from '@/hooks/useCustomMutation';
import { AxiosResponse } from 'axios';
import { requestOrders } from '@/apis/requestApis';
import { format } from 'date-fns';

export default function ManufactureForm({ data: info }: MyInfoProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(RequestSchema),
  });

  const categories = [
    { id: 1, name: '창업(제품판매)' },
    { id: 2, name: '작품 제작' },
    { id: 3, name: '개인적인 목적' },
  ];

  const [selectedCategory, setSelectedCategory] = useState<Category>({ id: 0, name: '제작목적 선택' });
  const [fileTypeError, setFileTypeError] = useState<boolean>(false);
  const [fileSizeError, setFileSizeError] = useState<boolean>(false);
  const [file, setFile] = useState<File | null>(null);

  const showToast = useToast();
  const invalidateQueries = useInvalidateQueries();
  const setReqSuccess = useSetRecoilState(reqSuccessState);
  const { push } = useRouter();

  const handleSuccess = () => {
    invalidateQueries(['requests', 'orders']);
    setReqSuccess(true);
    push('/my-requests');
  };

  const { mutate, isLoading: loading } = useCustomMutation<AxiosResponse, FormData>(requestOrders, handleSuccess, () =>
    showToast('제출 실패', true),
  );

  const onSubmit = (data: IFormInputs) => {
    if (!file) {
      showToast('이미지를 업로드하세요', true);
      return;
    }

    if (!info) {
      showToast('제출 불가', true);
      return;
    }

    const post = {
      ...data,
      desired_estimate_date: format(data.desired_estimate_date, 'yyyy-MM-dd'),
      desired_delivery_date: format(data.desired_delivery_date, 'yyyy-MM-dd'),
      document_type: 'make',
      manager_name: info.manager,
      manager_call: info.manager_phone_number,
      category: selectedCategory.id,
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
  };

  const formValues3 = {
    ...formValues,
    title: '3. 제작 수량',
    description: '만들고자 하는 제품 예상 수량을 작성해주세요',
  };

  const formValues4 = {
    ...formValues,
    title: '견적 수령 희망일',
    description: '신청 문의 후, 견적을 받아보고 싶은 날짜를 작성해주세요',
  };

  const formValues5 = {
    ...formValues,
    title: '제품 배송 희망일',
    description: '희망 납품(예상)일 혹은 기한을 작성해주세요. 견적에 따라 실제 납품일은 변경될 수 있습니다.',
  };

  const formValues6 = {
    ...formValues,
    title: '6. 제품 이미지',
    description:
      '요청사항이나 유사 컨셉의 제품 혹은 이미지나 스케치를 첨부해주세요. 만들고자 하는 제품의 크기, 두께, 재질, 특징들을 상세하게 입력해주세요(e.g, 실리콘, 아크릴7mm, 가로세로 높이: ...mm 등, 상세한요청사항을 적어주시면 요청하신 부분을 잘 반영하여 제품을 제작할 확률이 높아집니다. 상세하게 작성 부탁드립니다)',
    placeholder: '요청사항을 적어주세요',
    file,
    setFile,
    fileSizeError,
    setFileSizeError,
    fileTypeError,
    setFileTypeError,
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mx-3 mb-40">
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
  );
}
