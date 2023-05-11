import React, { useState } from "react";
import CustomWriteModal from "../modal/CustomWriteModal";
import { createPortal } from 'react-dom';

interface Item {
    id: number;
    title: string;
    content: string;
    date: string;
}

interface ItemListProps {
    item: Item[];
}

export default function NoticeList({ item }: ItemListProps) {
    const [selectIndex, setSelectIndex] = useState<number | null>(null)
    const [writeOpenModal, setWriteOpenModal] = useState<boolean>(false);

    const listClick = (index: number) => {
        setSelectIndex(selectIndex === index ? null : index);
    }

    const writeModal = () => {
        console.log("모달");
        setWriteOpenModal(true);
    }

    return (
        <>
            <div className="relative">
                <div className="opacity-0 md:opacity-100 md:flex md:justify-between md:px-10 md:py-4 md:border-black md:border-y md:mt-4">
                    <span>번호</span>
                    <span>제목</span>
                    <span>작성일</span>
                </div>
                {item?.map((item, index) => (
                    <div
                        className="pt-5 pb-5 border-b cursor-pointer relative md:ml-auto mt-4"
                        onClick={() => listClick(index)}
                        key={index}>
                        <span className="ml-3 text-sm md:text-base md:ml-12">{item.title}</span>
                        {selectIndex === index &&
                            <>
                                <div
                                    className="bg-[#fafafa] break-words py-9 px-5"
                                >
                                    <div>
                                        <h3 className="hidden md:block md:ml-8 md:mb-6">
                                            - {item.title}
                                        </h3>
                                        <span className="text-xs md:ml-5">
                                            {item.content}
                                        </span>
                                        <span className="text-xs inline-block py-5">
                                            감사합니다.
                                        </span>
                                    </div>
                                    <button>수정</button>
                                    <button>수정</button>
                                </div>
                            </>
                        }
                        <span className="absolute top-5 right-2 text-[#999]">{item.date}</span>
                    </div>
                ))}
                <button
                    onClick={writeModal}
                    className="absolute top-2 right-2 rounded-lg border px-[14px] py-[6px] text-xs"
                >글쓰기</button>
            </div >
            {/* writeOpenModal이 true이면 createportal로 모달 렌더링 */}
            {writeOpenModal && createPortal
                (<CustomWriteModal
                    setWriteOpenModal={setWriteOpenModal}
                />,
                    document.body)}
        </>
    )
}