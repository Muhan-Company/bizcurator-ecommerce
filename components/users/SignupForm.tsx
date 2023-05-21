import React, { useEffect } from 'react';
import LabeledInput from './LabeledInput';
import { SubmitHandler, useForm } from 'react-hook-form';
import { SignupFormValues } from './types';
import { yupResolver } from '@hookform/resolvers/yup';
import { signupFormSchema } from './formSchma';
import SectionMarginLayout from './SectionMarginLayout';
import SearchAddressForm from '../SearchAddressForm';
import { useRecoilState, useRecoilValue } from 'recoil';
import { addressState } from '@/atoms/addressAtom';
import { postSignup } from '@/apis/users';

export default function SignupForm() {
  const [addressData, setAddressData] = useRecoilState(addressState);
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormValues>({
    mode: 'onChange',
    resolver: yupResolver(signupFormSchema),
    defaultValues: {
      username: 'asd@asd.com',
      password: 'abc123!@',
      password_confirm: 'abc123!@',
      business_name: '가나다',
      representative: '라마바',
      business_number: '123-45-6789',
      postalCode: '12345',
      address: '서울 강남',
      // detailAddress: ,
      // business_registration_Image: string;
      manager: '나나나',
      manager_email: 'asd@asd.com',
      manager_phone_number: '12312341234',
    },
    // 회원정보 수정에서 사용 예정
    // defaultValues: async () => fetch('/api-endpoint');
  });

  useEffect(() => {
    setValue('postalCode', addressData.postalCode);
    setValue('address', addressData.address);
    setValue('detailAddress', addressData.detailAddress);
  }, [setValue, addressData]);

  const onSubmit: SubmitHandler<SignupFormValues> = async (data) => {
    const formData = new FormData();
    formData.append('business_registration_Image', data.business_registration_Image[0]);

    // 요청값에 맞게 변환
    let dataSet = {};
    for (const value in data) {
      if (value === 'postalCode') {
        dataSet = { ...dataSet, postal_code: data.postalCode };
      } else if (value === 'detailAddress') {
        dataSet = { ...dataSet, address: data.address + '/' + data.detailAddress };
      } else {
        dataSet = { ...dataSet, [value]: data[value] };
      }
    }
    console.log(dataSet);
    // await postSignup(data);
    console.log(data.business_registration_Image[0]);
    console.log(formData);
    console.log(data);
  };
  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    console.log(e);
    console.log(e.currentTarget.files);
    const files = e.currentTarget.files;
    console.log(files);
    // files.map((file: string | Blob) => formData.append('files', file));
    // await postSignup(data);
    console.log(formData);
  };

  return (
    // <form onSubmit={handleFormSubmit} encType="multipart/form-data">
    <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
      {/* 기본 로그인 정보 */}
      <SectionMarginLayout>
        <label
          htmlFor="username"
          className="pb-[10px] text-title-xs font-bold after:content-['*'] after:ml-0.5 after:text-red"
        >
          메일주소
        </label>
        <div className="flex">
          <input
            type="text"
            multiple
            id="username"
            placeholder="메일주소 입력"
            className={`input ${errors.username && 'border-red'}`}
            {...register('username')}
          />
          <button
            disabled={errors.username && true}
            className="w-[92px] h-11 ml-2 text-button-xs btn-primary shrink-0 btn-disabled"
            onClick={(e) => e.preventDefault()}
          >
            인증받기
          </button>
        </div>
        {errors.username && <span className="text-label-sm text-red">{errors.username?.message}</span>}
        <LabeledInput
          label="password"
          title="비밀번호"
          required={'비밀번호를 입력해주세요.'}
          placeholder="비밀번호 입력"
          inputProps={register('password')}
          invalid={errors.password}
          errorMessage={errors.password?.message}
        >
          {!errors.password && (
            <span className="text-label-xs text-gray_01 font-medium">
              비밀번호는 영문, 숫자, 특수문자를 포함하여 8자 이상으로 입력해주세요
            </span>
          )}
        </LabeledInput>

        <LabeledInput
          label="password_confirm"
          title="비밀번호"
          required={'비밀번호를 재입력해주세요.'}
          placeholder="비밀번호 재입력"
          inputProps={register('password_confirm')}
          invalid={errors.password_confirm}
          errorMessage={errors.password_confirm?.message}
        />
      </SectionMarginLayout>

      {/* 사업자 정보 */}
      <SectionMarginLayout>
        <h3 className="text-title-[20px] font-bold">사업자 정보</h3>
        <LabeledInput
          label="business_name"
          title="상호명"
          required
          placeholder="상호명 입력"
          inputProps={register('business_name')}
          invalid={errors.business_name}
          errorMessage={errors.business_name?.message}
        />
        <LabeledInput
          label="representative"
          title="대표자명"
          required
          placeholder="대표자명 입력"
          inputProps={register('representative')}
          invalid={errors.representative}
          errorMessage={errors.representative?.message}
        />
        <label
          htmlFor="business_number"
          className="pb-[10px] mt-6 text-title-xs font-bold after:content-['*'] after:ml-0.5 after:text-red"
        >
          사업자 번호
        </label>
        <div className="flex">
          <input
            type="text"
            multiple
            id="business_number"
            placeholder="사업자 번호"
            className={`input ${errors.business_number && 'border-red'}`}
            {...register('business_number')}
          />
          <button
            disabled={errors.business_number && true}
            className="w-[120px] h-11 ml-2 text-button-xs btn-white border-main shrink-0 btn-disabled"
            onClick={(e) => e.preventDefault()}
          >
            사업자 번호 인증
          </button>
        </div>
        {errors.business_number && <span className="text-label-sm text-red">{errors.business_number?.message}</span>}

        <label
          htmlFor="business_number"
          className="mb-[10px] mt-6 block text-title-xs font-bold after:content-['*'] after:ml-0.5 after:text-red"
        >
          주소
        </label>
        <SearchAddressForm
          inputProps={[
            { ...register('postalCode', { required: true }) },
            { ...register('address', { required: true }) },
            { ...register('detailAddress') },
          ]}
        />
        <label
          htmlFor="business_registration_Image"
          className="pb-[10px] mt-6 text-title-xs font-bold after:content-['*'] after:ml-0.5 after:text-red"
        >
          사업자등록증 첨부
        </label>
        <div className="relative">
          <input
            type="file"
            multiple
            id="business_registration_Image"
            // placeholder="파일명"
            className={`input w-[64%] file:border-main file:absolute file:top-0 file:right-0 file:btn-white file:w-[120px] file:h-11 ${
              errors.business_registration_Image && 'border-red'
            }`}
            {...register('business_registration_Image')}
          />
        </div>

        {errors.business_registration_Image && (
          <span className="text-label-sm text-red">{errors.business_registration_Image?.message}</span>
        )}
      </SectionMarginLayout>

      {/* 구매 담당자 정보 */}
      <SectionMarginLayout>
        <h3 className="text-title-[20px] font-bold">구매 담당자 정보</h3>
        <LabeledInput
          label="manager"
          title="담당자 이름"
          required
          placeholder="담당자 이름 입력"
          inputProps={register('manager')}
          invalid={errors.manager}
          errorMessage={errors.manager?.message}
        />
        <LabeledInput
          label="manager_email"
          title="메일주소"
          required
          placeholder="메일주소 입력"
          inputProps={register('manager_email')}
          invalid={errors.manager_email}
          errorMessage={errors.manager_email?.message}
        />
        <LabeledInput
          label="manager_phone_number"
          title="전화번호"
          required
          placeholder="전화번호 ‘-’ 없이 입력"
          inputProps={register('manager_phone_number')}
          invalid={errors.manager_phone_number}
          errorMessage={errors.manager_phone_number?.message}
        />
      </SectionMarginLayout>
      <div className="mx-7 py-5  center">
        <button className="btn-large text-button-xs">가입하기</button>
      </div>
    </form>
  );
}
