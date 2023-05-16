import React, { ChangeEvent, useState, useEffect } from "react";
import Image from 'next/image';

type FileUploadProps = {
    handleFileChange: (file: File) => void;
};

export default function FileUpload({ handleFileChange }: FileUploadProps) {
    const [fileUrl, setFileUrl] = useState<string | null>(null);
    const [file, setFile] = useState<File | null>(null);

    useEffect(() => {
        if (file) {
            setFileUrl(URL.createObjectURL(file));
        }
    }, [file]);

    const handleFileUpload = (event: ChangeEvent<HTMLInputElement>) => {
        const fileList = event.target.files;
        if (fileList && fileList.length > 0) {
            const selectedFile = fileList[0];
            setFile(selectedFile);
            handleFileChange(selectedFile);
        }
        console.log(fileList);
        console.log(fileUrl);
        console.log(file);
    };

    return (
        <div>
            <div className="py-[30px] bg-[#fff]">
                파일 업로드
            </div>
            <div className="py-[30px] bg-[#fff]">
                {fileUrl && (
                    <Image src={fileUrl} alt="description" width={100} height={100} />
                )}
                <input
                    type="file"
                    accept=".jpg,.jpeg,.png"
                    onChange={handleFileUpload}
                />
            </div>
        </div>
    );
}
