import {
  BedingIcon,
  CleanerIcon,
  DrinkIcon,
  FireExtinguisherIcon,
  GiftSetIcon,
  LampIcon,
  PencilIcon,
  RadioIcon,
  ShowerIcon,
  ToothBrushIcon,
} from '../Icons';
import DropdownItem from './DropdownItem';

export default function HeaderDropdown({ isHovered }: { isHovered: boolean }) {
  return (
    <div
      className={`hidden ${
        isHovered ? 'lg:opacity-100' : 'lg:opacity-0 pointer-events-none'
      } duration-150 absolute top-[calc(100%)] -left-[92px] xl:-left-[190px] lg:block lg:ml-24 xl:ml-48 w-64 bg-white shadow-[-1px_4px_10px_rgba(0,0,0,0.08)]`}
    >
      <DropdownItem
        href="/products/categories/1?sort=newest"
        icon={LampIcon({ color: '#999999', width: '28', height: '28' })}
        category="객실용품"
      />
      <DropdownItem
        href="/products/categories/2?sort=newest"
        icon={ShowerIcon({ color: '#999999', width: '30', height: '30' })}
        category="욕실용품"
      />
      <DropdownItem
        href="/products/categories/3?sort=newest"
        icon={ToothBrushIcon({ color: '#999999', width: '24', height: '24' })}
        category="위생용품"
      />
      <DropdownItem
        href="/products/categories/4?sort=newest"
        icon={BedingIcon({ color: '#999999', width: '28', height: '28' })}
        category="침구류"
      />
      <DropdownItem
        href="/products/categories/5?sort=newest"
        icon={RadioIcon({ color: '#999999', width: '28', height: '28' })}
        category="가전/전자제품"
      />
      <DropdownItem
        href="/products/categories/6?sort=newest"
        icon={CleanerIcon({ color: '#999999', width: '28', height: '28' })}
        category="청소/시설관리"
      />
      <DropdownItem
        href="/products/categories/7?sort=newest"
        icon={FireExtinguisherIcon({ color: '#999999', width: '28', height: '28' })}
        category="소방/안전관리"
      />
      <DropdownItem
        href="/products/categories/8?sort=newest"
        icon={PencilIcon({ color: '#999999', width: '24', height: '24' })}
        category="사무용품"
      />
      <DropdownItem
        href="/products/categories/9?sort=newest"
        icon={DrinkIcon({ color: '#999999', width: '28', height: '28' })}
        category="음료/식품"
      />
      <DropdownItem
        href="/products/categories/10?sort=newest"
        icon={GiftSetIcon({ color: '#999999', width: '25', height: '25' })}
        category="기타"
      />
    </div>
  );
}
