import React, { FC, Fragment } from "react";
import QuestionList from "./QuestionList";
import { useQuery } from "@tanstack/react-query";
import { atom, useRecoilValue } from "recoil";
import axios from "axios";
import { questionArticleIdState, questionizeState } from "@/atoms/questionAtom";

interface Item {
    id: number;
    title: string;
    content: string;
    date: string;
}

const Question: FC<{}> = () => {

    const questionArticleId = useRecoilValue(questionArticleIdState);
    const questionSize = useRecoilValue(questionizeState);

    const axiosData = async (questionArticleId: number, questionSize: number) => {
        const path = "http://43.201.195.195:8080";
        try {
            const response = await axios.get<{
                status: string;
                code: number;
                message: string;
                result: {
                    notices: Item[];
                }
            }>(
                `${path}/api/faqs?lastArticleId=${questionArticleId}&size=${questionSize}`
            );
            return response.data.result.notices;
        } catch (error) {
            throw new Error("fail data");
        }
    }

    const { isLoading, isError, data, error } = useQuery<Item[], Error>(
        [questionArticleId, questionSize],
        () => axiosData(questionArticleId, questionSize)
    );

    if (isLoading) {
        return <div>Loading...</div>;
    }
    if (isError) {
        return <div>Error: {error?.message}</div>
    }

    return (
        <Fragment>
            <div className="md:absolute md:right-0 md:w-[800px]  md:mt-[88px]">
                <h3 className="hidden md:inline-block md:text-2xl ">자주하는 질문</h3>
                <span className="hidden md:inline-block md:text-slate-400 md:ml-4">고객님들께서 자주 해주시는 질문에 대한 응답입니다.</span>
                <QuestionList item={data} />
            </div>
        </Fragment>
    )
}

export default Question;