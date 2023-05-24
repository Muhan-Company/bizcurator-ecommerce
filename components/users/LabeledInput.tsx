import { useState } from 'react';
import { EyeOffIcon, EyeOnIcon } from '../Icons';
import { FieldError, ValidationRule } from 'react-hook-form';

interface LabeledInput {
  label: string;
  title: string;
  required?: string | ValidationRule<boolean>;
  placeholder: string;
  children?: React.ReactNode;
  inputProps?: object;
  invalid?: FieldError;
  errorMessage?: string;
  pattern?: ValidationRule<RegExp>;
  multiple?: boolean;
}

export default function LabeledInput({
  label,
  title,
  required,
  placeholder,
  children,
  inputProps,
  invalid,
  errorMessage,
  multiple,
}: LabeledInput) {
  const [isShowPW, setIsShowPW] = useState(false);

  return (
    <div className="flex flex-col mt-6">
      <label
        htmlFor={label}
        className={`pb-[10px] text-title-xs font-bold ${required && "after:content-['*'] after:ml-0.5 after:text-red"}`}
      >
        {title}
      </label>
      {title !== '비밀번호' ? (
        <input
          type="text"
          id={label}
          placeholder={placeholder}
          className={`input ${invalid && 'border-red'}`}
          {...inputProps}
          multiple={multiple}
        />
      ) : (
        <div className="relative center-between">
          <input
            type={isShowPW ? 'text' : 'password'}
            id={label}
            placeholder={placeholder}
            className={`input relative ${invalid && 'border-red'}`}
            {...inputProps}
            multiple={multiple}
          />
          <div className="absolute right-8 cursor-pointer" onClick={() => setIsShowPW(!isShowPW)}>
            {isShowPW ? (
              <EyeOnIcon width="20" height="20" color={invalid && '#D30B0B'} />
            ) : (
              <EyeOffIcon width="20" height="20" color={invalid && '#D30B0B'} />
            )}
          </div>
        </div>
      )}
      {invalid && <span className="text-label-sm text-red">{errorMessage}</span>}
      {children}
    </div>
  );
}
