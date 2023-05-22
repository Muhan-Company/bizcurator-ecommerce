import { UploadIcon } from '@/components/Icons';

interface FormValues6 {
  title: string;
  description: string;
  request: string;
  setRequest: React.Dispatch<React.SetStateAction<string>>;
}

export default function Six({ formValues6 }: { formValues6: FormValues6 }) {
  const { title, description, request, setRequest } = formValues6;

  return (
    <div className="mt-12 gap-y-1.5 flex flex-col">
      <label className="font-bold text-label-md text-main space-y-2">
        6. {title} <span className="text-red">*</span>
        <p className="font-normal text-body-sm">{description}</p>
      </label>
      <div className="flex items-center h-[197px] gap-x-2">
        <textarea
          className="bg-gray_04 p-2 resize-none text-main h-full w-1/3 rounded-lg outline-none font-normal text-body-sm placeholder:text-gray_01"
          placeholder="요청사항을 적어주세요"
          value={request}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setRequest(e.target.value)}
        />

        <label
          htmlFor="file"
          className="bg-gray_04 font-normal text-body-sm
          text-gray_01 flex justify-center items-center gap-x-2 text-gray h-full w-2/3 rounded-lg"
        >
          <UploadIcon color="#999999" />
          이미지 업로드
        </label>
        <input id="file" type="file" className="hidden" />
      </div>
    </div>
  );
}
