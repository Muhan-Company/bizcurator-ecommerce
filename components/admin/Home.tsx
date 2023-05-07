import TabMenuBar from "./TabMenuBar"
import Dashboard from "./Dashboard";
import OrderDelivery from "./OrderDelivery";
import React, { useState } from "react";

type TabsType = {
    title: string;
    index: number;
    TabComponent: React.FC<{}>;
}[];
//TabsType은 title, index, component속성을가짐

const tabs: TabsType = [
    {
        title: 'Dashboard',
        index: 1,
        TabComponent: Dashboard,
    },
    {
        title: '주문 배송',
        index: 2,
        TabComponent: OrderDelivery,
    },
    {
        title: '주문 취소 환불',
        index: 3,
        TabComponent: OrderDelivery,
    },
    {
        title: '회원 관리',
        index: 4,
        TabComponent: OrderDelivery,
    },
    {
        title: '입점 판매사 리스트',
        index: 5,
        TabComponent: OrderDelivery,
    }
]
//tabs는 위3개의 속성을가진 객체로 이루어짐

export default function Home() {
    const [activeTab, setActiveTab] = useState<number>(tabs[0].index);
    return (
        <div className="h-screen bg-gray-100">
            <TabMenuBar
                onClick={setActiveTab}
                activeTab={activeTab}
                TabMenuBarData={tabs} />
        </div>
    )
}