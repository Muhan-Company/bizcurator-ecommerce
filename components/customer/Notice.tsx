import React, { FC, Fragment } from "react";
import NoticeList from "./NoticeList";
import { useQuery } from "@tanstack/react-query";
import { atom, useRecoilValue } from "recoil";
import axios from "axios";


interface Item {
    itemId: number;
    title: string;
    content: string;
    date: string;
    isFixed: string;
}

const lastArticleIdState = atom<number>({
    key: "lastArticleIdState",
    default: 9999,
});

const sizeState = atom<number>({
    key: "size",
    default: 10,
})

const axiosData = async (lastArticleId: number, size: number) => {
    try {
        const response = await axios.get<{
            status: string;
            code: number;
            message: string;
            result: {
                notices: Item[];
            }
        }>(
            `http://43.201.195.195:8080/api/notices?lastArticleId=${lastArticleId}&size=${size}&firstPage=true`
        );
        return response.data.result.notices;
    } catch (error) {
        throw new Error("fail data");
    }
}



const Notice: FC<{}> = () => {

    const lastArticleId = useRecoilValue(lastArticleIdState);
    const size = useRecoilValue(sizeState);

    const { isLoading, isError, data, error } = useQuery<Item[], Error>(
        [lastArticleId, size],
        () => axiosData(lastArticleId, size)
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
                <h3 className="hidden md:inline-block md:text-2xl">공지사항</h3>
                <span className="hidden md:inline-block md:text-slate-400 md:ml-4">비즈큐레이터의 소식과 정보를 알려드립니다.</span>
                <NoticeList data={data} />
            </div>
        </Fragment>
    )
}

export default Notice;