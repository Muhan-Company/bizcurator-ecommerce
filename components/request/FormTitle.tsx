export default function FormTitle({ title }: { title: string }) {
  return (
    <div className="mt-[108px] mx-3 h-[53px] bg-secondary font-medium text-main text-body-md rounded-t-lg text-center leading-[53px]">
      {title}
    </div>
  );
}
