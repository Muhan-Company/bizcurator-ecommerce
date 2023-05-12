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
import ProductCategory from './ProductCategory';

export default function ProductCategoryList() {
  return (
    <div className="px-3 mt-20 space-y-6 block lg:hidden">
      <h1 className="font-normal text-head-xs text-main">전체 상품 보기</h1>
      <div className="grid grid-cols-4 md:grid-cols-5 gap-3 center">
        <ProductCategory id={2} icon={LampIcon({ width: '28', height: '28' })} name="객실용품" />
        <ProductCategory id={3} icon={ShowerIcon({ width: '30', height: '30' })} name="욕실용품" />
        <ProductCategory id={4} icon={ToothBrushIcon({ width: '24', height: '24' })} name="위생용품" />
        <ProductCategory id={5} icon={BedingIcon({ width: '28', height: '28' })} name="침구류" />
        <ProductCategory id={6} icon={RadioIcon({ width: '28', height: '28' })} name="가전/전자제품" />
        <ProductCategory id={7} icon={CleanerIcon({ width: '28', height: '28' })} name="청소/시설관리" />
        <ProductCategory id={8} icon={FireExtinguisherIcon({ width: '28', height: '28' })} name="소방/안전관리" />
        <ProductCategory id={9} icon={PencilIcon({ width: '24', height: '24' })} name="사무용품" />
        <ProductCategory id={10} icon={DrinkIcon({ width: '28', height: '28' })} name="음료/식품" />
        <ProductCategory id={11} icon={GiftSetIcon({ width: '25', height: '25' })} name="선물세트" />
      </div>
    </div>
  );
}
