import { useEffect, useRef, useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '../Icons';
import { Category, IFormInputs } from './PurchaseForm';
import { UseFormRegister, FieldErrors } from 'react-hook-form';

interface FormType {
  title: string;
  description: string;
  register: UseFormRegister<IFormInputs>;
  errors: FieldErrors<IFormInputs>;
  categories: Category[];
  selectedCategory: Category;
  setSelectedCategory: React.Dispatch<React.SetStateAction<Category>>;
}

export default function One({ formValues }: { formValues: FormType }) {
  const { title, description, register, errors, categories, selectedCategory, setSelectedCategory } = formValues;

  const [open, setOpen] = useState<boolean>(false);

  const dropdownRef = useRef<HTMLUListElement>(null);

  const handleOutsideClick = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <>
      <div className="space-y-1.5">
        <label className="font-bold text-label-md text-main space-y-2">
          1. {title} <span className="text-red">*</span>
          <p className="font-normal text-body-sm">{description}</p>
        </label>

        <ul
          ref={dropdownRef}
          onClick={() => setOpen((prev) => !prev)}
          className={`z-10 flex flex-col gap-y-2 px-4 py-2 font-medium text-main text-body-sm w-[150px] border-[1px] border-main rounded-lg transition-all duration-300 bg-white ${
            open ? 'max-h-[435px]' : 'max-h-10 overflow-hidden'
          }`}
        >
          <li className="flex category justify-between last:border-none">
            {selectedCategory.name}
            {open ? (
              <ChevronUpIcon color="#1C1C1C" width="20" height="20" />
            ) : (
              <ChevronDownIcon color="#1C1C1C" width="20" height="20" />
            )}
          </li>
          {categories.map((category) => (
            <li
              key={category.id}
              className={`last:border-none category ${
                category.id === selectedCategory.id && 'text-gray-400 font-bold'
              }`}
              onClick={() => {
                setSelectedCategory(category);
              }}
            >
              {category.name}
            </li>
          ))}
        </ul>

        <input
          {...register('itemName')}
          className="px-4 font-normal text-main text-body-xs bg-gray_04 rounded-lg h-[50px] w-full outline-none"
        />
        {errors.itemName && <p className="text-red text-xs font-medium">{errors.itemName.message}</p>}
      </div>
    </>
  );
}
