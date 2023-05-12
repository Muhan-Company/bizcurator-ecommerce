import React, { FC, Fragment } from "react";
import NoticeList from "./NoticeList";

interface Item {
    itemId: number;
    title: string;
    content: string;
    date: string;
    isFixed: string;
}

const dummyData: Item[] = [
    {
        itemId: 1, isFixed: 'isFixed', title: '[안내] 배송관련 소비자 분쟁해결 기준 안내', content: '도매구매 100만 판매 돌파 이벤트를 위해 공지를 썼습니다. 본 이벤트 내용은 메인화면에 공지할 예정오니 참고 바랍니다. 도매구매 100만 판매 돌파 이벤트를 위해 공지를 썼습니다. 본 이벤트 내용은 메인화면에 공지할 예정오니 참고 바랍니다. 도매구매 100만 판매 돌파 이벤트를 위해 공지를 썼습니다. 본 이벤트 내용은 메인화면에 공지할 예정오니 참고 바랍니다.', date: '2020-01-20'
    },
    {
        itemId: 2, isFixed: 'isFixed', title: '[이벤트] 여름이니까 아이스커피! 맥심 할인 판매', content: '222', date: '2020-01-21'
    },
    {
        itemId: 3, isFixed: 'notFixed', title: '[안내] 배송관련 소비자 분쟁해결 기준 안내', content: '333', date: '2020-01-22'
    },
    {
        itemId: 4, isFixed: 'notFixed', title: '[이벤트] 여름이니까 아이스커피! 맥심 할인 판매', content: '444', date: '2020-01-23'
    },
    {
        itemId: 5, isFixed: 'notFixed', title: '[안내] 배송관련 소비자 분쟁해결 기준 안내', content: '555', date: '2020-01-24'
    }
]

const Notice: FC<{}> = () => {
    return (
        <Fragment>
            <div className="md:absolute md:right-0 md:w-[800px]  md:mt-[88px]">
                <h3 className="hidden md:inline-block md:text-2xl">공지사항</h3>
                <span className="hidden md:inline-block md:text-slate-400 md:ml-4">비즈큐레이터의 소식과 정보를 알려드립니다.</span>
                <NoticeList item={dummyData} />
            </div>
        </Fragment>
    )
}

export default Notice;