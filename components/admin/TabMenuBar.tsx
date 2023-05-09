
import AdminHeader from "./AdminHeader";
import { useState } from "react";

type TabMenuBarProps = { //변수 tabs라고 저장한 Tabstype props에 저장된 TabMenuBarData를 tabmenubarprops로 저장
    TabMenuBarData: {
        title: string;
        index: number;
        TabComponent: React.FC<{ index: number }>;
        subMenu?: boolean;
        subMenuList?: {
            title: string;
            index: number;
            TabComponent: React.FC<{ index: number }>;
        }[];
    }[];
    activeTab: number;
    onClick: (index: number) => void;

};

const TabMenuBar: React.FC<TabMenuBarProps> = ({
    TabMenuBarData,
    activeTab = 0,
    onClick,
}) => {
    const [hoveredTabIndex, setHoveredTabIndex] = useState<number | null>(null);

    const handleTabClick = (index: number) => {
        onClick(index);
        console.log(index);
    };

    const handleTabMouseEnter = (index: number) => {
        setHoveredTabIndex(index);
    };

    const handleTabMouseLeave = () => {
        setHoveredTabIndex(null);
    };

    const activeMenu = TabMenuBarData.find((menu) => menu.index === activeTab);
    console.log(TabMenuBarData.find((i) => i.index === activeTab));
    console.log(TabMenuBar);
    // console.log(activeMenu);
    const activeSubMenu = activeMenu?.subMenuList?.find(
        (subMenu) => subMenu.index
    );
    console.log(activeMenu?.subMenuList?.find((i) => i.index))

    return (
        <>
            <div className="w-80 bg-[#313C52] h-full inline-block float-left">
                <div>
                    <h1 className="py-10 pl-6 text-[22px] text-[#93CEFA]">
                        Biz Curator Manager
                    </h1>
                    <ul className="py-6 pl-6">
                        {TabMenuBarData.map((menu) => (
                            <li
                                key={menu.index}
                                className={`py-2 relative  ${activeTab === menu.index
                                    ? "bg-blue-500"
                                    : "hover:bg-gray-700"
                                    }`}
                                onMouseEnter={() => handleTabMouseEnter(menu.index)}
                                onMouseLeave={handleTabMouseLeave}
                                onClick={() => handleTabClick(menu.index)}
                            >
                                {menu.title}
                                {menu.subMenu &&
                                    hoveredTabIndex === menu.index &&
                                    menu.subMenuList && (
                                        <ul className=" mt-2 bg-gray-800 text-white">
                                            {menu.subMenuList.map((subMenu) => (
                                                <li
                                                    key={subMenu.index}
                                                    className={`py-2 px-4 ${activeTab === subMenu.index
                                                        ? "bg-blue-500"
                                                        : "hover:bg-gray-700"
                                                        }`}
                                                    onClick={() => handleTabClick(subMenu.index)}
                                                >
                                                    {subMenu.title}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="w-[1600px] ml-80">
                <AdminHeader TabMenuBarData={TabMenuBarData} activeTab={activeTab} />
                {activeSubMenu?.TabComponent && (
                    <activeSubMenu.TabComponent index={activeTab} />
                )}
                {/* activeSubMenu?.TabComponent는 현재 선택된 서브메뉴에 TabComponent 프로퍼티가 있는 경우, TabComponent를 렌더링합니다. activeSubMenu이 undefined인 경우에는 TabComponent를 렌더링하지 않습니다. 이 경우에는 activeMenu?.TabComponent를 검사합니다. */}
                {!activeSubMenu?.TabComponent && activeMenu?.TabComponent && (
                    <activeMenu.TabComponent
                        index={activeTab} />
                )}

            </div>

        </>
    );
};

export default TabMenuBar;

