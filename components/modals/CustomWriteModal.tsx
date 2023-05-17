import React, { useRef, useState, ChangeEvent, useEffect } from "react"
import useOnClickOutside from "@/hooks/UseOnClickOutSide"
import { atom, useRecoilValue } from "recoil";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { createPortal } from "react-dom";

type Item = {
    id: number;
    title: string;
    content: string;
    // date: string;
    isFixed: string;
}

type CustomWritePropsType = {
    setWriteOpenModal: React.Dispatch<React.SetStateAction<boolean>> //useState를 통해 생성된 매개변수를 해당 상태로 변경하는 type
    item: Item | undefined;
}

type WriteFormType = {
    id: number;
    title: string;
    content: string;
    isFixed: string | boolean; //고정공지인지아닌지 false true
    // date?: string;
}

const writeFormState: WriteFormType = { //WriteFormType의 기본값
    id: 0,
    title: '',
    content: '',
    isFixed: '',
    // date: '',
}

const accessTokenState = atom<string>({
    key: "accessTokenState",
    default: "", // 초기값은 빈 문자열이며, 실제로는 로그인 후 얻은 액세스 토큰 값으로 설정해야 합니다.
});


export default function CustomWriteModal({
    setWriteOpenModal,
    item,
}: CustomWritePropsType) {
    // console.log(item);
    const ref = useRef<HTMLDivElement>(null); // 특정DOM요소에 접근할때 사용
    useOnClickOutside(ref, () => {
        setWriteOpenModal(false)
    })
    const accessToken = useRecoilValue(accessTokenState);
    const [writeForm, setWriteForm] = useState<WriteFormType>(writeFormState);

    useEffect(() => { //item이 존재하면 writeForm에 저장되어있는 상태를 복사하고 item이 변경할때마다 업데이트
        if (item) {
            setWriteForm((writeForm) => {
                return {
                    ...writeForm,
                    id: item.id,
                    title: item.title,
                    content: item.content,
                    isFixed: item.isFixed,
                    // date: item.date,
                };
            });
        }
    }, [item]);

    const editHandleChange = (
        e: ChangeEvent<HTMLTextAreaElement> | ChangeEvent<HTMLInputElement>
    ) => {

        const { name, value, type } = e.target;
        if (type === "radio") {
            setWriteForm({
                ...writeForm,
                isFixed: value === "true" ? "true" : "false",
            });
        } else {
            setWriteForm({
                ...writeForm,
                [name]: value,
            });
        }
    };

    ///api/notices/{id}
    const editHandleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const isConfirmed = window.confirm("정말 수정하시겠습니까?");
        if (!isConfirmed) {
            return;
        }

        try {
            const id = writeForm.id;
            const response = await axios.put(`http://43.201.195.195:8080/api/notices/${id}`, writeForm, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });
            console.log(response.data);
            // 성공적으로 수정되었을 때의 동작 추가
        } catch (error) {
            console.log('수정 실패', error);
            // 수정 실패 시의 처리 추가
        }
    };




    const handleChange = (e: ChangeEvent<HTMLTextAreaElement> | ChangeEvent<HTMLInputElement>) => {
        const { id, name, value, type } = e.target;
        if (type === "radio") {
            setWriteForm((prev) => ({ ...prev, isFixed: id }));
        } else {
            setWriteForm((prev) => ({ ...prev, [name]: value }));
        }
    };

    const createNotice = async (data: WriteFormType) => {
        const response = await axios.post("http://43.201.195.195:8080/api/notices", data, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
        return response.data;
    };

    const mutation = useMutation(createNotice, { //useMutation을 통해 데이터생성(react-query)
        onSuccess: (data) => {
            console.log(data);
            // 성공적으로 저장되었을 때의 동작 추가
        },
        onError: (error) => {
            console.log(error);
            // 저장 실패 시의 처리 추가
        },
    });


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const isConfirmed = window.confirm("정말 저장하시겠습니까?");
        if (isConfirmed) {
            const isEmpty = Object.values(writeForm).some((value) => value === '');
            if (isEmpty) {
                alert('내용을 입력하세요');
                return;
            }
        }
        console.log(writeForm);
        mutation.mutate(writeForm);
    };



    return (
        <div>
            {item ?
                <>
                    <form onSubmit={editHandleSubmit}>
                        <div className="bg-black text-xs bg-opacity-60 fixed flex inset-0 items-center justify-center h-screen z-50">
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
                                        value={writeForm.title}
                                        onChange={editHandleChange}
                                    />
                                </div>
                                <div className="flex items-center mt-6">
                                    <label htmlFor="content">내용<span className="text-red">*</span></label>
                                    <textarea
                                        name="content"
                                        id="content"
                                        className="border py-2 px-4 min-h-[150px] w-4/5 rounded-lg ml-3"
                                        value={writeForm.content}
                                        onChange={editHandleChange}
                                    />
                                </div>
                                <div className="flex items-center mt-6">
                                    <label>고정공지 여부<span className="text-red">*</span></label>
                                    <div className="ml-5">
                                        <label htmlFor="true">고정공지로 등록</label>
                                        <input
                                            id="true"
                                            name="isFixed"
                                            className="mr-5"
                                            onChange={editHandleChange}
                                            checked={writeForm.isFixed === "true" || writeForm.isFixed === true} // 수정된 부분
                                            type="radio"
                                            value='true'
                                        />
                                        <label htmlFor="false">고정공지로 미등록</label>
                                        <input
                                            id="false"
                                            name="isFixed"
                                            className="mr-5"
                                            onChange={editHandleChange}
                                            checked={writeForm.isFixed === "false" || writeForm.isFixed === false} // 수정된 부분
                                            type="radio"
                                            value="false"
                                        />
                                    </div>

                                </div>
                                <button
                                    className="rounded-lg mt-12 border-[#999] border px-[14px] py-[6px] text-xs"
                                    type="submit">수정하기</button>
                            </div>
                        </div>
                    </form>
                </> : <>
                    <form onSubmit={handleSubmit}>
                        <div className="bg-black text-xs bg-opacity-60 fixed flex inset-0 items-center justify-center h-screen z-50">
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
                                        <label htmlFor="true">고정공지로 등록</label>
                                        <input
                                            id="true"
                                            name="isFixed"
                                            className="mr-5"
                                            onChange={handleChange}
                                            checked={writeForm.isFixed === 'true'}
                                            type="radio"
                                        />
                                        <label htmlFor="false">고정공지로 미등록</label>
                                        <input
                                            id="false"
                                            name="isFixed"
                                            className="mr-5"
                                            onChange={handleChange}
                                            checked={writeForm.isFixed === 'false'}
                                            type="radio"
                                        />
                                    </div>
                                </div>
                                <button
                                    className="rounded-lg mt-12 border-[#999] border px-[14px] py-[6px] text-xs"
                                    type="submit">등록하기</button>
                            </div>
                        </div>
                    </form>
                </>}
        </div>

    )
}