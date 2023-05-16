import { forwardRef, ButtonHTMLAttributes } from 'react';

interface CustomInputProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  value: string;
}

const CustomInput = forwardRef<HTMLButtonElement, CustomInputProps>(function CustomInput(
  { value, onClick, ...rest },
  ref,
) {
  return (
    <button className="custom-input" onClick={onClick} ref={ref} {...rest}>
      {value}
    </button>
  );
});

CustomInput.displayName = 'CustomInput';

export default CustomInput;
