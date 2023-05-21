import CategoryLink from './CategoryLink';

export default function CategoryFilter() {
  return (
    <div className="mt-[80px] rounded-[10px] flex overflow-x-auto bg-gray_03 mx-3 p-3 gap-x-6 scrollbar-hidden">
      <CategoryLink id={0} name="전체" />

      <CategoryLink id={1} name="객실용품" />

      <CategoryLink id={2} name="욕실용품" />

      <CategoryLink id={3} name="위생용품" />

      <CategoryLink id={4} name="침구류" />

      <CategoryLink id={5} name="가전/전자제품" />

      <CategoryLink id={6} name="청소/시설관리" />

      <CategoryLink id={7} name="소방안전관리" />

      <CategoryLink id={8} name="사무용품" />

      <CategoryLink id={9} name="음료/식품" />

      <CategoryLink id={10} name="기타" />
    </div>
  );
}
