import React, { FC } from "react"

type TabsProps = {
    tabs: {
        label: string;
        index: number;
        Component: FC<{ index: number }>;
    }[];
    selectedTab: number;
    onClick: (index: number) => void;
}

const CustomerTabMenu: FC<TabsProps> = ({
    tabs = [],
    selectedTab = 0,
    onClick,
}) => {
    const Panel = tabs && tabs.find((tab) => tab.index === selectedTab);
    return (
        <>
            <div className="flex md:w-[200px] md:flex-col">
                {tabs.map((tab) => (
                    <div
                        className={`text-base cursor-pointer w-1/2 md:w-full py-4 text-center mb:w-56 mb:py-5 block border border-gray-200 hover:bg-gray-200
                        ${tab.index === selectedTab && "bg-gray-200"}`}
                        key={tab.index}
                        onClick={() => onClick(tab.index)}
                    >
                        {tab.label}
                    </div>
                ))}
            </div>
            <div>
                {Panel && <Panel.Component index={selectedTab} />}
            </div>
        </>
    )
}

export default CustomerTabMenu;