import { UploadIcon } from '@/components/Icons';
import { FormValues } from './NumOne';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Loader from '@/components/Loader';

interface FormValues3 extends FormValues {
  placeholder: string;
  file: File | null;
  setFile: React.Dispatch<React.SetStateAction<File | null>>;
  fileSizeError: boolean;
  setFileSizeError: React.Dispatch<React.SetStateAction<boolean>>;
  fileTypeError: boolean;
  setFileTypeError: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function NumThree({ formValues3 }: { formValues3: FormValues3 }) {
  const {
    register,
    errors,
    title,
    description,
    placeholder,
    file,
    setFile,
    fileSizeError,
    setFileSizeError,
    fileTypeError,
    setFileTypeError,
  } = formValues3;

  const [preview, setPreview] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedfile = event.target.files && event.target.files[0];

    if (selectedfile && selectedfile.type.substring(0, 5) !== 'image') {
      setFileTypeError(true);
    } else {
      setFileTypeError(false);
    }

    if (selectedfile && selectedfile.size > 30000000) {
      setFileSizeError(true);
    } else {
      setFileSizeError(false);
    }

    if (selectedfile && selectedfile.type.substring(0, 5) === 'image' && selectedfile.size <= 30000000) {
      setFile(selectedfile);
    }
  };

  const resetFile = () => {
    setFile(null);
    setPreview('');
  };

  useEffect(() => {
    if (file) {
      setLoading(true);
      const formData = new FormData();
      formData.append('file', file);

      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
    } else {
      setPreview('');
    }
  }, [file, setPreview]);

  useEffect(() => {
    if (preview) {
      setLoading(false);
    }
  }, [setLoading, preview]);

  return (
    <div className="mt-12 gap-y-1.5 flex flex-col">
      <label className="font-bold text-label-md text-main space-y-2">
        {title} <span className="text-red">*</span>
        <p className="font-normal text-body-sm break-keep">{description}</p>
      </label>
      <div className="grid grid-cols-3 lg:grid-cols-2 h-[197px] gap-x-2">
        <section className="h-full col-span-1">
          <textarea
            className="h-full w-full bg-gray-100 p-2 resize-none text-main rounded-lg outline-none font-normal text-body-sm placeholder:text-gray_01"
            placeholder={placeholder}
            {...register('introduction')}
          />
          {errors.introduction && <p className="err-msg">{errors.introduction.message}</p>}
        </section>

        <div className="col-span-2 lg:col-span-1">
          {preview ? (
            <section onClick={resetFile} className="relative h-full rounded-lg overflow-hidden">
              <Image src={preview} alt="Preview" fill className="object-cover" />
            </section>
          ) : loading ? (
            <Loader className="h-full" />
          ) : (
            <label
              htmlFor="file"
              className="bg-gray-100 font-normal text-body-sm
              text-gray_01 center gap-x-2 text-gray h-full rounded-lg"
            >
              <UploadIcon color="#999999" />
              이미지 업로드
            </label>
          )}

          <input id="file" type="file" accept="image/*" className="hidden" onChange={handleFileChange} />
          {fileTypeError && <p className="err-msg">이미지 타입 파일을 업로드 하세요</p>}
          {fileSizeError && <p className="err-msg">파일 크기는 30,000,000 bytes 이하여야 합니다</p>}
        </div>
      </div>
    </div>
  );
}
