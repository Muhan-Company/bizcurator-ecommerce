import React, { useRef, useState, ChangeEvent } from "react"
import useOnClickOutside from "../customer/UseClickOutSide";

type Item = {
    id: number;
    title: string;
    content: string;
    date: string;
    isFixed: boolean;
}

type CustomWritePropsType = {
    setWriteOpenModal: React.Dispatch<React.SetStateAction<boolean>> //useState를 통해 생성된 매개변수를 해당 상태로 변경하는 type
    item?: Item;
}
type WriteFormType = {
    title: string;
    content: string;
    isFixed: boolean; //고정공지인지아닌지 false true
}

const writeFormState: WriteFormType = { //WriteFormType의 기본값
    title: '',
    content: '',
    isFixed: false,
}

export default function CustomWriteModal({
    setWriteOpenModal,
    item,
}: CustomWritePropsType) {

    const ref = useRef<HTMLDivElement>(null); // 특정DOM요소에 접근할때 사용
    useOnClickOutside(ref, () => {
        setWriteOpenModal(false)
    })

    const [writeForm, setWriteForm] = useState<WriteFormType>(writeFormState);
    const handleChange = (e: ChangeEvent<HTMLTextAreaElement> | ChangeEvent<HTMLInputElement>) => {
        const { name, value, type } = e.target;
        if (type === "radio") {
            const isChecked = (e.target as HTMLInputElement).checked;
            setWriteForm((prev) => ({ ...prev, isFixed: isChecked }));
        } else {
            setWriteForm((prev) => ({ ...prev, [name]: value }));
        }
    };


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const isConfirmed = window.confirm("정말 저장하시겠습니까?");
        if (isConfirmed) {
            const isEmpty = Object.values(writeForm).some((value) => value === '');
            if (isEmpty) {
                alert('내용을 입력하세요');
                return;
            }
            console.log(writeForm);
        }
    };



    return (
        <div>
            {item ?
                <>
                    <form onSubmit={handleSubmit}>
                        <div className="bg-black text-sm bg-opacity-60 fixed flex inset-0 items-center justify-center h-screen z-50">
                            <div
                                className="bg-[#fff] w-full h-1/2 rounded-xl px-5"
                                ref={ref}>
                                <div className="flex items-center mt-6">
                                    <label htmlFor="title">제목<span className="text-red">*</span></label>
                                    <input
                                        type="text"
                                        name="title"
                                        id="title"
                                        className="border py-2 px-4 w-4/5 rounded-lg ml-3"
                                        placeholder="제목을 입력해주세요"
                                        value={item.title}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="flex items-center mt-6">
                                    <label htmlFor="content">내용<span className="text-red">*</span></label>
                                    <textarea
                                        name="content"
                                        id="content"
                                        className="border py-2 px-4 min-h-[150px] w-4/5 rounded-lg ml-3"
                                        placeholder="내용을 입력해주세요"
                                        value={item.content}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="flex items-center mt-6">
                                    <label>고정공지 여부<span className="text-red">*</span></label>
                                    <div className="ml-5">
                                        <label htmlFor="isFixed">고정공지로 등록</label>
                                        <input
                                            id="isFixed"
                                            name="isFixed"
                                            className="mr-5"
                                            onChange={handleChange}
                                            checked={item.isFixed === true}
                                            type="radio"
                                        />
                                        <label htmlFor="notFixed">고정공지로 미등록</label>
                                        <input
                                            id="notFixed"
                                            name="isFixed"
                                            className="mr-5"
                                            onChange={handleChange}
                                            checked={item.isFixed === false}
                                            type="radio"
                                        />
                                    </div>
                                </div>
                                <button
                                    className="rounded-lg mt-12 border-[#999] border px-[14px] py-[6px] text-sm"
                                    type="submit">수정하기</button>
                            </div>
                        </div>
                    </form>
                </> : <>
                    <form onSubmit={handleSubmit}>
                        <div className="bg-black text-sm bg-opacity-60 fixed flex inset-0 items-center justify-center h-screen z-50">
                            <div
                                className="bg-[#fff] w-full h-1/2 rounded-xl px-5"
                                ref={ref}>
                                <div className="flex items-center mt-6">
                                    <label htmlFor="title">제목<span className="text-red">*</span></label>
                                    <input
                                        type="text"
                                        name="title"
                                        id="title"
                                        className="border py-2 px-4 w-4/5 rounded-lg ml-3"
                                        placeholder="제목을 입력해주세요"
                                        value={writeForm.title}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="flex items-center mt-6">
                                    <label htmlFor="content">내용<span className="text-red">*</span></label>
                                    <textarea
                                        name="content"
                                        id="content"
                                        className="border py-2 px-4 min-h-[150px] w-4/5 rounded-lg ml-3"
                                        placeholder="내용을 입력해주세요"
                                        value={writeForm.content}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="flex items-center mt-6">
                                    <label>고정공지 여부<span className="text-red">*</span></label>
                                    <div className="ml-5">
                                        <label htmlFor="isFixed">고정공지로 등록</label>
                                        <input
                                            id="isFixed"
                                            name="isFixed"
                                            className="mr-5"
                                            onChange={handleChange}
                                            checked={writeForm.isFixed === true}
                                            type="radio"
                                        />
                                        <label htmlFor="notFixed">고정공지로 미등록</label>
                                        <input
                                            id="notFixed"
                                            name="isFixed"
                                            className="mr-5"
                                            onChange={handleChange}
                                            checked={writeForm.isFixed === false}
                                            type="radio"
                                        />
                                    </div>
                                </div>
                                <button
                                    className="rounded-lg mt-12 border-[#999] border px-[14px] py-[6px] text-sm"
                                    type="submit">등록하기</button>
                            </div>
                        </div>
                    </form>
                </>}
        </div>

    )
}