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
            {item?.map((item, index) => (
                <div
                    className="ml-3 pt-5 pb-2 border-b cursor-pointer relative"
                    onClick={() => listClick(index)}
                    key={index}>
                    <span className="block">{item.id}</span>
                    <span className="text-sm">{item.title}</span>
                    {selectIndex === index &&
                        <>
                            <div
                                className=" break-words py-9 px-5"
                            >
                                {item.content}
                            </div>
                        </>
                    }
                    <span className="absolute top-5 right-2">{item.date}</span>
                </div>
            ))}
        </div>
    )
}