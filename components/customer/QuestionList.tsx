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
    return (
        <div>
            {item?.map(item => (
                <div key={item.id}>
                    <span>{item.title}</span>
                    <span>{item.content}</span>
                    <span>{item.date}</span>
                </div>
            ))}
        </div>
    )
}