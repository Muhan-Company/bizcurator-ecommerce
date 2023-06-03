import { CheckBoxIcon, CheckedBoxIcon } from '../Icons';

type SelectAllCheckboxProps = {
  total: number;
  selected: number;
  selectAll: boolean;
  handleSelectAll: () => void;
};

export default function SelectAllCheckbox({ total, selected, selectAll, handleSelectAll }: SelectAllCheckboxProps) {
  return (
    <div className="flex items-center" onClick={handleSelectAll}>
      {selectAll ? <CheckedBoxIcon /> : <CheckBoxIcon />}
      <button className="pl-2.5 pr-4 font-medium">
        {/* todo: 선택된 개수/ 전체 개수 데이터 적용*/}
        전체선택({selected + '/' + total})
      </button>
      <div className=" text-gray_01">|{/* 가상요소 대체 */}</div>
    </div>
  );
}
