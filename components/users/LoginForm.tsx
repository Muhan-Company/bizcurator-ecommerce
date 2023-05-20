import Link from 'next/link';
import LabeledInput from './LabeledInput';
import { SubmitHandler, useForm } from 'react-hook-form';
import { LoginFormValues } from './types';
import { ERROR_MESSAGES, REG_EXP } from '@/utils/constants';
import { postLogin } from '@/apis/users';

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    mode: 'onBlur',
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
          required={'아이디를 입력해주세요.'}
          placeholder="아이디 입력"
          register={register}
          invalid={errors.username}
          errorMessage={errors.username?.message}
          pattern={{ value: REG_EXP.SIGN_UP.EMAIL, message: ERROR_MESSAGES.SIGN_UP.ID }}
        />
        <LabeledInput
          label="password"
          title="비밀번호"
          required
          placeholder="비밀번호 입력"
          register={register}
          invalid={errors.password}
          errorMessage="비밀번호를 입력해주세요."
        />

        <div className="text-end text-label-sm font-medium text-gray_01">
          <Link href={'/'}>아이디 찾기 </Link>/<Link href={'/'}> 비밀번호 찾기</Link>
        </div>

        <input type="submit" value="로그인" className="mt-10 btn-large text-button-xs" />
        <Link href={'/signup'} className="h-[42px] mt-[10px] btn-white text-button-xs">
          회원가입
        </Link>
      </form>
    </div>
  );
}
