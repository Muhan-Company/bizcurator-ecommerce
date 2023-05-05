import { useState } from "react";

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

    const listClick = (index: number) => {
        setSelectIndex(selectIndex === index ? null : index);
    }

    return (
        <div>
            <div className="opacity-0 md:opacity-100 md:flex md:justify-between md:px-10 md:py-4 md:border-black md:border-y md:mt-4">
                <span>번호</span>
                <span>제목</span>
                <span>작성일</span>
            </div>
            {item?.map((item, index) => (
                <div
                    className="ml-3 pt-5 pb-5 border-b cursor-pointer relative md:ml-auto"
                    onClick={() => listClick(index)}
                    key={index}>
                    <span className="block md:inline-block md:ml-12">{item.id}</span>
                    <span className="text-sm md:text-base md:ml-12">{item.title}</span>
                    {selectIndex === index &&
                        <>
                            <div
                                className=" break-words py-9 px-5"
                            >
                                <h3 className="hidden md:block md:ml-8 md:mb-6">
                                    - {item.title}
                                </h3>
                                <span className="md:ml-5">
                                    {item.content}
                                </span>
                            </div>
                        </>
                    }
                    <span className="absolute top-5 right-2">{item.date}</span>
                </div>
            ))}
        </div>
    )
}