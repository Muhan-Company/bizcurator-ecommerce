import TabMenuBar from "./TabMenuBar"
import Dashboard from "./Dashboard";
import OrderDelivery from "./OrderDelivery";
import React, { useState } from "react";

type TabsType = {
    title: string;
    index: number;
    Component: React.FC<{}>;
}[];
//TabsType은 title, index, component속성을가짐

const tabs: TabsType = [
    {
        title: 'Dashboard',
        index: 1,
        Component: Dashboard,
    },
    {
        title: '주문 배송',
        index: 2,
        Component: OrderDelivery,
    }
]
//tabs는 위3개의 속성을가진 객체로 이루어짐

export default function Home() {
    const [activeTab, setActiveTab] = useState<number>(tabs[0].index);
    return (
        <div>
            <TabMenuBar
                onClick={setActiveTab}
                activeTab={activeTab}
                TabMenuBarData={tabs} />
        </div>
    )
}