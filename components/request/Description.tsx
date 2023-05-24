interface Description {
  h: string;
  p1: string;
  p2: string;
}

export default function Description({ desc }: { desc: Description }) {
  return (
    <div className="pt-5 px-3">
      <div className="px-3 space-y-[5px]">
        <h1 className="text-body-md text-main font-bold">{desc.h}</h1>
        <p className="font-normal text-body-sm text-main">
          <span className="break-keep">{desc.p1}</span>
        </p>
        <p>
          <span className="text-body-md text-main font-bold break-keep">{desc.p2}</span>
        </p>
      </div>
    </div>
  );
}
