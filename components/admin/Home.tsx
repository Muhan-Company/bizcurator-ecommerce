import TabMenuBar from "./TabMenuBar"
import Dashboard from "./Dashboard";
import OrderDelivery from "./OrderDelivery";
import React, { useState } from "react";
import OrderCancel from "./OrderCancel";
import OrderRefund from "./OrderRefund";

type TabsType = {
    title: string;
    index: number;
    TabComponent: React.FC<{}>;
    subMenu?: boolean;
    subMenuList?: {
        title: string;
        index: number;
        TabComponent: React.FC<{}>;
    }[]
}[];
//TabsType은 title, index, component속성을가짐

const tabs: TabsType = [
    {
        title: 'Dashboard',
        index: 1,
        TabComponent: Dashboard,
        subMenu: false,
    },
    {
        title: '주문 배송',
        index: 2,
        TabComponent: OrderDelivery,
        subMenu: false,
    },
    {
        title: '주문 취소 환불',
        index: 3,
        TabComponent: OrderCancel,
        subMenu: true,
        subMenuList: [
            {
                title: '취소 요청 내역',
                index: 3,
                TabComponent: OrderCancel,
            },
            {
                title: '환불 요청 내역',
                index: 32,
                TabComponent: OrderRefund,
            },
        ],
    },
    {
        title: '회원 관리',
        index: 4,
        TabComponent: OrderDelivery,
        subMenu: false,
    },
    {
        title: '입점 판매사 리스트',
        index: 5,
        TabComponent: OrderDelivery,
        subMenu: true,
        subMenuList: [
            {
                title: '입점',
                index: 33,
                TabComponent: OrderDelivery,
            },
        ],
    },
    {
        title: '의뢰서',
        index: 6,
        TabComponent: OrderDelivery,
        subMenu: true,
    },
    {
        title: '상품관리',
        index: 7,
        TabComponent: OrderDelivery,
        subMenu: false,
    },
    {
        title: '자사몰',
        index: 8,
        TabComponent: OrderDelivery,
        subMenu: false,
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




