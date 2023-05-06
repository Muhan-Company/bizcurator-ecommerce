type Props = {
    TabMenuBarData: {
        title: string;
        index: number;
        Component: React.FC<{ index: number }>;
    }[];

}

const AdminHeader: React.FC<Props> = ({ TabMenuBarData }) => {
    // const filter = TabMenuBarData.filter((i) => i.index === active)
    return (
        <>
            <div>
                {TabMenuBarData.map((i) => (
                    <div
                        className="bg-red"
                        key={i.index}>
                        {i.title}
                    </div>
                ))}
            </div>
            <span>ㅇㄹㅇㄹ</span>
        </>
    )
}

export default AdminHeader;