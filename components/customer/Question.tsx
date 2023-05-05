import React, { FC, Fragment } from "react";
import QuestionList from "./QuestionList";

interface Item {
    id: number;
    title: string;
    content: string;
    date: string;
}

const dummyData: Item[] = [
    {
        id: 1, title: '질문 1', content: '111', date: '2020-01-20'
    },
    {
        id: 2, title: '질문 2', content: '222', date: '2020-01-21'
    },
    {
        id: 3, title: '질문 3', content: '333', date: '2020-01-22'
    }
]

const Question: FC<{}> = () => {
    return (
        <Fragment>
            <div className="md:absolute md:right-0 md:w-[800px]  md:mt-[88px]">
                <h3 className="hidden md:inline-block md:text-2xl ">자주하는 질문</h3>
                <span className="hidden md:inline-block md:text-slate-400 md:ml-4">고객님들께서 자주 해주시는 질문에 대한 응답입니다.</span>
                <QuestionList item={dummyData} />
            </div>
        </Fragment>
    )
}

export default Question;