import Link from 'next/link';
import LabeledInput from './LabeledInput';
import { SubmitHandler, useForm } from 'react-hook-form';
import { LoginFormValues } from './types';
import { login } from '@/apis/users';
import { loginFormSchema } from './formSchma';
import { yupResolver } from '@hookform/resolvers/yup';
import useCustomMutation from '@/hooks/useCustomMutation';
import { useEffect } from 'react';
import { setTokensCookie } from '@/utils/cookie';
import { AxiosError } from 'axios';

export default function LoginForm({ closeModal }: { closeModal: () => void }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    mode: 'onChange',
    resolver: yupResolver(loginFormSchema),
  });

  const handleSuccess = () => {
    window.location.reload();
  };

  const { mutate, data: userData, isLoading, error, isSuccess } = useCustomMutation(login, handleSuccess);

  const onSubmit: SubmitHandler<LoginFormValues> = (data) => {
    mutate(data);
  };

  useEffect(() => {
    if (isSuccess) {
      const { accessToken, refreshToken } = userData.result.login.token_dto;

      setTokensCookie({ accessToken, refreshToken });

      closeModal();
    }
  }, [userData, isSuccess, error, closeModal]);

  return (
    <div className="px-4 py-9">
      <h2 className="text-[20px] font-bold">로그인</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <LabeledInput
          label="username"
          title="아이디"
          required
          placeholder="아이디 입력"
          inputProps={register('username')}
          invalid={errors.username}
          errorMessage={errors.username?.message}
        />
        <LabeledInput
          label="password"
          title="비밀번호"
          required
          placeholder="비밀번호 입력"
          inputProps={register('password')}
          invalid={errors.password}
          errorMessage={errors.password?.message}
        />

        <div className="text-end text-label-sm font-medium text-gray_01">
          <Link href={'/'}>아이디 찾기 </Link>/<Link href={'/'}> 비밀번호 찾기</Link>
        </div>

        {error instanceof AxiosError && (
          <p className="text-red font-medium text-sm mt-3 break-keep">
            {error.response?.data.errors ? error.response?.data.errors[0].message : error.response?.data.message}
          </p>
        )}

        <input
          type="submit"
          value={`${isLoading ? '로그인 중...' : '로그인'}`}
          className="mt-10 btn-large text-button-xs disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={isLoading}
        />
        <Link href={'/signup'} className="h-[42px] mt-[10px] btn-white text-button-xs" onClick={closeModal}>
          회원가입
        </Link>
      </form>
    </div>
  );
}
