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


export default function QuestionList({ item }: ItemListProps) {

    const [selectIndex, setSelectIndex] = useState<number | null>(null);


    const listClick = (index: number) => {
        setSelectIndex(selectIndex === index ? null : index);
    } // 항목을 클릭했을때 호출되는 함수이고 index를 찾아서 클릭이 된다.

    console.log(item);
    return (
        <div className="relative">
            <div className="opacity-0 md:opacity-100 md:flex md:justify-between md:px-10 md:py-4 md:border-black md:border-y md:mt-4">
                <span>번호</span>
                <span>제목</span>
                <span>작성일</span>
            </div>
            {item?.map((data, index) => (
                <div key={index}>
                    <div
                        className="pt-5 pb-5 border-b cursor-pointer relative md:ml-auto mt-4"
                        onClick={() => listClick(index)}
                    >
                        <span className="ml-3 text-sm md:text-base md:ml-12">{data.title}</span>
                        <span className="absolute top-5 right-2 text-[#999]">{data.date}</span>
                    </div>
                    {selectIndex === index && (
                        <div className="bg-[#fafafa] break-words py-9 px-5 text-xs">
                            <div>
                                <h3 className="md:block md:ml-8 md:mb-6">● {data.title}</h3>
                                <span className="md:ml-5 block py-7">{data.content}</span>
                                <span>감사합니다.</span>
                            </div>

                        </div>
                    )}
                </div>
            ))}
        </div>
    )
}