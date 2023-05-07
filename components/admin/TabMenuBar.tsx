import AdminHeader from "./AdminHeader";

type TabMenuBarProps = {
    TabMenuBarData: {
        title: string;
        index: number;
        TabComponent: React.FC<{ index: number }>;
    }[];
    activeTab: number;
    onClick: (index: number) => void;
}

const TabMenuBar: React.FC<TabMenuBarProps> = ({
    TabMenuBarData,
    activeTab = 0,
    onClick,
}) => {
    const TabMenu = TabMenuBarData && TabMenuBarData.find((menu) => menu.index === activeTab);

    return (
        <>
            <div className="w-80 bg-[#313C52] h-full inline-block float-left">
                <h1 className="py-10 pl-6 text-[22px] text-[#93CEFA]">Biz Curator Manager</h1>
                {TabMenuBarData?.map((i, index) => (
                    <div
                        className={`text-[#fff] py-7
                        ${i.index === activeTab && "bg-[#3F4B62]"}`}
                        key={index}
                        onClick={() => onClick(i.index)}
                    >
                        {i.title}
                    </div>
                ))}
            </div>
            <div className="w-[1600px] ml-80">
                <AdminHeader
                    TabMenuBarData={TabMenuBarData}
                    activeTab={activeTab}
                />
                {TabMenu && <TabMenu.TabComponent index={activeTab} />}
            </div>
        </>
    )
}
export default TabMenuBar;