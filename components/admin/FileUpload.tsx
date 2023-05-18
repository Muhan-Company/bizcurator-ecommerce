import React, { ChangeEvent, useState, useEffect, useCallback, useRef } from "react";
import Image from 'next/image';

type FileUploadProps = {
    handleFileChange: (file: File) => void;
};

export default function FileUpload({ handleFileChange }: FileUploadProps) {
    const [fileUrl, setFileUrl] = useState<string | null>(null);
    const [file, setFile] = useState<File | null>(null);
    const inputRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        if (file) {
            setFileUrl(URL.createObjectURL(file));
        }
    }, [file]);

    const handleFileUpload = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        const fileList = event.target.files;
        if (fileList && fileList.length > 0) {
            const selectedFile = fileList[0];
            setFile(selectedFile);
            handleFileChange(selectedFile);
        }
    }, [setFile, handleFileChange]);

    const onUploadImageButtonClick = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (inputRef.current) {
            inputRef.current.click();
        }
    }, []);

    const closeImageClick = () => {
        setFileUrl("");
    }
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
