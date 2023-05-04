import React, { useState } from "react"
import Kakao from "./Kakao_consult"
import CustomerTabMenu from "./CustomerTabMenu"
import Notice from "./Notice";
import Question from "./Question";

type TabsType = {
    label: string;
    index: number;
    Component: React.FC<{}>;
}[];

const tabs: TabsType = [
    {
        label: "공지사항",
        index: 1,
        Component: Notice
    },
    {
        label: "자주하는 질문",
        index: 2,
        Component: Question
    }
]

export default function Customer() {
    const [selectedTab, setSelectedTab] = useState<number>(tabs[0].index)

    return (
        <div>
            <div className="lg:px-24 xl:px-48">
                <h1 className="text-black text-3xl mt-16 inline-block md:bg-red">고객센터</h1>
                <div>
                    <Kakao />
                    <div className="mt-2 md:mt-9">
                        <CustomerTabMenu
                            onClick={setSelectedTab}
                            selectedTab={selectedTab}
                            tabs={tabs}
                        />
                    </div>
                </div>
            </div>
        </div>

    )
}