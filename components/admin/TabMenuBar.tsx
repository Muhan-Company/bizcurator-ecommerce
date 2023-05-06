import AdminHeader from "./AdminHeader";

type TabMenuBarProps = {
    TabMenuBarData: {
        title: string;
        index: number;
        Component: React.FC<{ index: number }>;
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
            <div className="w-80 bg-[#313C52] h-screen inline-block float-left">
                <h1 className="py-10 pl-6 text-[22px] text-[#93CEFA]">Biz Curator Manager</h1>
                {TabMenuBarData?.map((i, index) => (
                    <div
                        className={`bg-white
                        ${i.index === activeTab && "bg-purple-700"}`}
                        key={index}
                        onClick={() => onClick(i.index)}
                    >
                        {i.title}
                    </div>
                ))}
            </div>
            <div className="bg-gray-100 w-full">
                <AdminHeader TabMenuBarData={TabMenuBarData} />
                {TabMenu && <TabMenu.Component index={activeTab} />}
            </div>
        </>
    )
}
export default TabMenuBar;