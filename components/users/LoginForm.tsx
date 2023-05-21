import Link from 'next/link';
import LabeledInput from './LabeledInput';
import { SubmitHandler, useForm } from 'react-hook-form';
import { LoginFormValues } from './types';
import { postLogin } from '@/apis/users';
import { loginFormSchema } from './formSchma';
import { yupResolver } from '@hookform/resolvers/yup';

export default function LoginForm({ closeModal }: { closeModal: () => void }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    mode: 'onChange',
    resolver: yupResolver(loginFormSchema),
  });

  const onSubmit: SubmitHandler<LoginFormValues> = async (data) => {
    console.log(data);
    await postLogin(data);
  };

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

        <input type="submit" value="로그인" className="mt-10 btn-large text-button-xs" />
        <Link href={'/signup'} className="h-[42px] mt-[10px] btn-white text-button-xs" onClick={closeModal}>
          회원가입
        </Link>
      </form>
    </div>
  );
}
