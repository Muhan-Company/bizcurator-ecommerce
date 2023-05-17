import React, { FC, Fragment } from "react";
import NoticeList from "./NoticeList";
import { useQuery } from "@tanstack/react-query";
import { atom, useRecoilValue } from "recoil";
import axios from "axios";
import { lastArticleIdState, sizeState } from "@/atoms/noticeAtom";

interface Item {
    id: number;
    title: string;
    content: string;
    date: string;
    isFixed: string;
}



const Notice: FC<{}> = () => {

    const lastArticleId = useRecoilValue(lastArticleIdState);
    const size = useRecoilValue(sizeState);

    const axiosData = async (lastArticleId: number, size: number) => { //서버에서 공지사항을 받는 함수 (매개변수로 2가지를 받음)
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
                `${path}/api/notices?lastArticleId=${lastArticleId}&size=${size}&firstPage=true`
            );
            return response.data.result.notices; // 결과값으로 notices 배열을 추출함
        } catch (error) {
            throw new Error("fail data");
        }
    }
    const { isLoading, isError, data, error } = useQuery<Item[], Error>(
        [lastArticleId, size],
        () => axiosData(lastArticleId, size)
    );
    console.log(data);
    if (isLoading) {
        return <div>Loading...</div>;
    }
    if (isError) {
        return <div>Error: {error?.message}</div>
    }

    return (
        <Fragment>
            <div className="md:absolute md:right-0 md:w-[800px]  md:mt-[88px]">
                <h3 className="hidden md:inline-block md:text-2xl">공지사항</h3>
                <span className="hidden md:inline-block md:text-slate-400 md:ml-4">비즈큐레이터의 소식과 정보를 알려드립니다.</span>
                <NoticeList data={data} />
            </div>
        </Fragment>
    )
}

export default Notice;