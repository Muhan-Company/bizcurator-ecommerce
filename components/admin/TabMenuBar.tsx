import AdminHeader from "./AdminHeader";
import { useState, FC } from "react";

type SubMenuType = {
    title: string;
    index: number;
    TabComponent: FC<{ index: number }>;
}

type TabMenuBarProps = {
    TabMenuBarData: {
        title: string;
        index: number;
        TabComponent: FC<{ index: number }>;
        subMenu?: boolean;
        subMenuList?: SubMenuType[];
    }[];
    subActiveTab: number;
    onSubMenuClick: (parentIndex: number, index: number) => void;
    activeTab: number;
    onClick: (index: number) => void;
};

const TabMenuBar: React.FC<TabMenuBarProps> = ({
    TabMenuBarData,
    activeTab = 0,
    onClick,
    subActiveTab = 0,
    onSubMenuClick,
}) => {
    const [hoveredTabIndex, setHoveredTabIndex] = useState<number | null>(null);

    const activeMenu = TabMenuBarData.find((menu) => menu.index === activeTab); //부모찾음
    const activeSubMenu = activeMenu?.subMenuList?.find(
        (subMenu) => subMenu.index === subActiveTab
    );


    const handleSubClick = (parentIndex: number, index: number) => {
        onSubMenuClick(parentIndex, index);
        console.log(`${parentIndex}와 ${index}`);
    }

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


    return (
        <>
            <div className="w-80 bg-[#313C52] h-full inline-block float-left">
                <div>
                    <h1 className="py-10 pl-6 text-[22px] text-[#93CEFA]">
                        Biz Curator Manager
                    </h1>
                    <ul className="py-6">
                        {TabMenuBarData.map((menu) => (
                            <li
                                key={menu.index}
                                className={`text-[#fff]  py-7 cursor-pointer duration-200 hover:bg-[#3F4B62]
                                ${menu.index === activeTab && "bg-[#3F4B62]"}`}

                                onMouseEnter={() => handleTabMouseEnter(menu.index)}
                                onMouseLeave={handleTabMouseLeave}
                                onClick={() => handleTabClick(menu.index)}
                            >
                                {menu.title}
                                {menu.subMenu && hoveredTabIndex === menu.index && menu.subMenuList && (
                                    //submenu가 true이고 hoverIndex와 menu.index값이 동일하고 menu.submenuList가 존재하면 아래 렌더링
                                    <ul className=" mt-2 text-white">
                                        {menu.subMenuList.map((subMenu) => (
                                            <li
                                                key={subMenu.index}
                                                onClick={() => handleSubClick(menu.index, subMenu.index)}
                                                className={`text-[#fff] py-1 cursor-pointer duration-200 hover:bg-white hover:text-black
                                                    ${subMenu.index === subActiveTab && menu.index === activeTab && "bg-black"}`}
                                            //메뉴index와 activeTab이 true고 submenuIndex와 subActiveTab이 true여야 배경색이 먹음
                                            //submenu쪽만 하면 submenu없는 다른 메뉴클릭시 active가 남아있음
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
            </div >
            <div className="w-[1600px] ml-80">
                <AdminHeader TabMenuBarData={TabMenuBarData} activeTab={activeTab} />
                {activeSubMenu?.TabComponent && (
                    <activeSubMenu.TabComponent index={activeTab} />
                )}
                {!activeSubMenu?.TabComponent && activeMenu?.TabComponent && !activeMenu?.subMenu && (
                    <activeMenu.TabComponent index={activeTab} />
                )}
                {/* submenu없는거 */}
            </div>
        </>
    );
};

export default TabMenuBar;
