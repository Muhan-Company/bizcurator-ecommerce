type Props = {
    TabMenuBarData: {
        title: string;
        index: number;
        TabComponent: React.FC<{ index: number }>;
    }[];
    activeTab?: number;
}

const AdminHeader: React.FC<Props> = ({ TabMenuBarData, activeTab = 1 }) => {
    return (
        <>
            <div>
                <div className="bg-[#fff] flex justify-between p-6">
                    <h1 className="text-lg">
                        DashBoard
                    </h1>
                    <span className="mr-20">관리자</span>
                </div>
                <div
                    className="bg-[#fff] p-6 flex justify-between border-y">
                    <div>
                        <button>홈</button>
                        <span> / </span>
                        {TabMenuBarData.map((i) => (
                            i.index === activeTab &&
                            <button
                                key={i.index}
                                className="text-lg">
                                {i.title}
                            </button>
                        ))}
                    </div>
                    <button className="w-[120px] rounded-[10px] border mr-16">로그아웃</button>
                </div>


            </div>
        </>
    )
}

export default AdminHeader;