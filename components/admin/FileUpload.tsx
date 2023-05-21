import React, { ChangeEvent, useState, useEffect, useCallback, useRef } from "react";
import Image from 'next/image';
import { atom, useRecoilState } from "recoil";

type FileUploadProps = {
    handleFileChange: (file: File, type: string) => void;
    imageChange: ("mainImage" | "detailImage")
};

const mainImage = atom<string | null>({
    key: 'mainImage', // key 값을 지정합니다.
    default: null,
});

export default function FileUpload({ imageChange, handleFileChange }: FileUploadProps) {

    // const [fileUrl, setFileUrl] = useRecoilState(mainImage);
    const [fileUrl, setFileUrl] = useState<string | null>(null);
    const [file, setFile] = useState<File | null>(null);
    const inputRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        if (file) {
            setFileUrl(URL.createObjectURL(file));
        }
    }, [file, setFileUrl]);

    const handleFileUpload = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.files)
        if (!event.target.files) {
            return;
        }
        //@ts-ignore
        handleFileChange(event.target.files[0], imageChange);
        // console.log(event.target.files[0].name);
        setFile(event.target.files[0]);
    }, [imageChange]);

    const onUploadImageButtonClick = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        console.log(inputRef)
        if (inputRef.current) {
            inputRef.current.click();
        }
    }, []);

    const closeImageClick = () => {
        setFileUrl("");
    }
    console.log(fileUrl);
    return (
        <div>
            <div className="py-[30px] bg-[#fff]">
                <input
                    type="file"
                    accept=".jpg,.jpeg,.png"
                    onChange={handleFileUpload}
                    style={{ display: 'none' }}
                    ref={inputRef}
                />
                <button aria-label="이미지 업로드" onClick={onUploadImageButtonClick} className="relative border border-dashed border-black p-20">
                    파일 선택
                    {fileUrl && (
                        <Image src={fileUrl}
                            className="absolute top-0 left-0"
                            alt="썸네일"
                            width={224}
                            height={190}
                            style={{ maxWidth: '100%', maxHeight: '100%' }}
                        />
                    )}
                </button>
                <button onClick={closeImageClick} className="relative top-[-75px] left-[-20px] text-[25px] font-bold">X</button>
            </div>
        </div>
    );
}