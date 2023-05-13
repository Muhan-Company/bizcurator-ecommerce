import TabMenuBar from "./TabMenuBar"
import Dashboard from "./Dashboard";
import OrderDelivery from "./OrderDelivery";
import OrderCancel from "./OrderCancel";
import React, { useState, FC } from "react";
import OrderRefund from "./OrderRefund";
import MemberManage from "./MemberManage";
import VendorList from "./VendorList";

//TabsType은 title, index, component속성을가짐
type SubMenuType = {
    title: string;
    index: number;
    href: string; //href속성
    TabComponent: FC<{}>;
};

type TabsType = {
    title: string;
    index: number;
    href: string;
    TabComponent: FC<{}>;
    subMenu?: boolean;
    subMenuList?: SubMenuType[];
}[];

const tabs: TabsType = [
    {
        title: 'Dashboard',
        index: 1,
        href: "/admin",
        TabComponent: Dashboard,
        subMenu: false,
    },
    {
        title: '주문 배송',
        index: 2,
        href: "/admin/OrderDelivery",
        TabComponent: OrderDelivery,
        subMenu: false,
    },
    {
        title: '주문 취소 환불',
        index: 3,
        href: "/admin",
        TabComponent: OrderCancel,
        subMenu: true,
        subMenuList: [
            {
                title: '주문 취소',
                index: 1,
                href: "/admin",
                TabComponent: OrderCancel,
            },
            {
                title: '환불 처리',
                index: 2,
                href: "/admin",
                TabComponent: OrderRefund,
            },
        ],
    },
    {
        title: '회원 관리',
        index: 4,
        href: "/admin",
        TabComponent: MemberManage,
        subMenu: false,
    },
    {
        title: '입점 판매사 리스트',
        index: 5,
        href: "/admin",
        TabComponent: VendorList,
        subMenu: false,
    },
    {
        title: '의뢰서',
        index: 6,
        href: "/admin",
        TabComponent: OrderDelivery,
        subMenu: true,
        subMenuList: [
            {
                title: '제품 구매 의뢰',
                index: 5,
                href: "/admin",
                TabComponent: OrderCancel,
            },
            {
                title: '제품 제작 의뢰',
                index: 6,
                href: "/admin",
                TabComponent: OrderCancel,
            },
            {
                title: '판매자 입점의뢰',
                index: 7,
                href: "/admin",
                TabComponent: OrderCancel,
            },
        ],
    },
    {
        title: '상품관리',
        index: 7,
        href: "/admin",
        TabComponent: OrderDelivery,
        subMenu: false,
    },
    {
        title: '자사몰',
        index: 8,
        href: "/admin",
        TabComponent: OrderDelivery,
        subMenu: false,
    }
]

export default function Home() {
    const [activeTab, setActiveTab] = useState<number>(tabs[0].index);
    const [subActiveTab, setSubActiveTab] = useState<number>(0);

    return (
        <div className="h-screen bg-gray-100">
            <TabMenuBar
                onSubMenuClick={(parentIndex, index) => {
                    setActiveTab(parentIndex)
                    setSubActiveTab(index)
                }}
                subActiveTab={subActiveTab}
                onClick={setActiveTab}
                activeTab={activeTab}
                TabMenuBarData={tabs} />
        </div>
    )
}

