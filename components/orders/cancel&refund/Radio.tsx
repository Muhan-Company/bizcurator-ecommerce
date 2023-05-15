import { FormEventHandler } from 'react';
import SubTitleLayout from './SubtitleLayout';

type RadioInputContainerProps = {
  title: string;
  children: React.ReactNode;
  onChange: FormEventHandler;
};
function RadioInputContainer({ title, children, onChange }: RadioInputContainerProps) {
  return (
    <SubTitleLayout title={title}>
      <div className="mb-10 flex text-gray_01 text-label-sm" onChange={onChange}>
        {children}
      </div>
    </SubTitleLayout>
  );
}

type RadioInputProps = {
  name: string;
  label: string;
  defaultChecked?: boolean;
};
function RadioInput({ name, label, defaultChecked }: RadioInputProps) {
  return (
    <div className="flex items-center mr-9 hover:text-main">
      <input
        type="radio"
        id={label}
        name={name}
        value={label}
        defaultChecked={defaultChecked}
        className="peer/radio radio-custom"
      />
      <label htmlFor={label} className="peer-checked/radio:text-main">
        {label}
      </label>
    </div>
  );
}

const Radio = {
  RadioInputContainer,
  RadioInput,
};

export default Radio;
