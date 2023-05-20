import { useState } from 'react';
import { EyeOffIcon, EyeOnIcon } from '../Icons';
import { FieldError, Path, UseFormRegister, ValidationRule } from 'react-hook-form';
import { LoginFormValues } from './types';

interface LabeledInput {
  label: Path<LoginFormValues>;
  title: string;
  required?: string | ValidationRule<boolean>;
  placeholder: string;
  children?: React.ReactNode;
  inputProps?: object;
  register: UseFormRegister<LoginFormValues>;
  invalid?: FieldError;
  errorMessage?: string;
  pattern?: ValidationRule<RegExp>;
}

export default function LabeledInput({
  label,
  title,
  required,
  placeholder,
  children,
  inputProps,
  register,
  invalid,
  errorMessage,
  pattern,
}: LabeledInput) {
  const [isShowPW, setIsShowPW] = useState(false);

  return (
    <div className="flex flex-col mt-6">
      <label htmlFor={label} className="pb-[10px] text-title-xs font-bold">
        {title}
        {required && <span className="text-red">*</span>}
      </label>
      {title !== '비밀번호' ? (
        <input
          type="text"
          id={label}
          placeholder={placeholder}
          className={`input ${invalid && 'border-red'}`}
          {...inputProps}
          {...register(label, { required, pattern })}
        />
      ) : (
        <div className="relative center-between">
          <input
            type={isShowPW ? 'text' : 'password'}
            id={label}
            placeholder={placeholder}
            className={`input relative ${invalid && 'border-red'}`}
            {...inputProps}
            {...register(label, { required, pattern })}
          />
          <div className="absolute right-8 cursor-pointer" onClick={() => setIsShowPW(!isShowPW)}>
            {isShowPW ? <EyeOnIcon width="20" height="20" /> : <EyeOffIcon width="20" height="20" />}
          </div>
        </div>
      )}
      {invalid && <span className="text-label-sm text-red">{errorMessage}</span>}
      {children}
    </div>
  );
}
