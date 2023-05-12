import { ChevronDownIcon, ChevronUpIcon } from '@/components/Icons';
import React, { useEffect, useRef, useState } from 'react';

type ReasonCategorySelectorProps = {
  categoryValues: string[];
};
export default function ReasonCategorySelector({ categoryValues }: ReasonCategorySelectorProps) {
  const [selectedValue, setSelectedValue] = useState('선택하세요');
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="absolute left-[80px] w-[212px] px-[11px] text-label-sm text-gray_01 border-[1px] border-[#DDD] rounded-[8px] bg-white"
      onClick={(e) => setIsOpen(!isOpen)}
    >
      <div className="pl-[6px] py-[11px] center-between">
        {selectedValue} {isOpen ? <ChevronUpIcon width="14" height="14" /> : <ChevronDownIcon width="14" height="14" />}
      </div>
      <ul className={` ${!isOpen && 'hidden'}`}>
        {categoryValues.map((reason, index) => (
          <li
            key={index}
            className="pl-[6px] py-[10px] border-b-[1px] border-b-gray_02 last:border-b-0 hover:text-main cursor-pointer"
            onClick={() => setSelectedValue(reason)}
          >
            {reason}
          </li>
        ))}
      </ul>
    </div>
  );
}
