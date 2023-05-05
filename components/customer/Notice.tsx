import React, { FC, Fragment } from "react";
import NoticeList from "./NoticeList";

interface Item {
    id: number;
    title: string;
    content: string;
    date: string;
}

const dummyData: Item[] = [
    {
        id: 1, title: 'Item 1', content: '도매구매 100만 판매 돌파 이벤트를 위해 공지를 썼습니다. 본 이벤트 내용은 메인화면에 공지할 예정오니 참고 바랍니다. 도매구매 100만 판매 돌파 이벤트를 위해 공지를 썼습니다. 본 이벤트 내용은 메인화면에 공지할 예정오니 참고 바랍니다. 도매구매 100만 판매 돌파 이벤트를 위해 공지를 썼습니다. 본 이벤트 내용은 메인화면에 공지할 예정오니 참고 바랍니다. 감사합니다.', date: '2020-01-20'
    },
    {
        id: 2, title: 'Item 2', content: '222', date: '2020-01-21'
    },
    {
        id: 3, title: 'Item 3', content: '333', date: '2020-01-22'
    },
    {
        id: 4, title: 'Item 4', content: '444', date: '2020-01-23'
    },
    {
        id: 5, title: 'Item 5', content: '555', date: '2020-01-24'
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