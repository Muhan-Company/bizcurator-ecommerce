import React, { FC, Fragment, useMemo } from "react";
import QuestionList from "./QuestionList";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";
import axiosInstance from "@/apis/config";

interface Item {
    id: number;
    title: string;
    content: string;
    date: string;
}

const Question: FC<{}> = () => {

    const { ref, inView } = useInView();

    const { data, fetchNextPage } = useInfiniteQuery<any, Error>(
        ["question"],
        async ({ pageParam = 0 }) => {
            if (!pageParam) {
                const res = await axiosInstance.get(`/api/faqs?lastArticleId=9999&size=10&firstPage=true`);
                return res.data;
            }
            const res = await axiosInstance.get(`/api/faqs?lastArticleId=${pageParam}&size=10&firstPage=false`);
            return res.data;
        },
        {
            getNextPageParam: (lastPage) => {
                const notices = lastPage?.result?.faqs ?? [];
                const lastArticleId = notices[notices.length - 1]?.id ?? undefined
                return lastArticleId;
            },
        }
    );
    const pages = useMemo(() => {
        return data?.pages.flatMap((page) => page.result?.faqs ?? []) ?? []; //2차원배열을 1차원배열로 변경해주는거
    }, [data]);


    React.useEffect(() => {
        if (inView) {
            fetchNextPage();
        }
    }, [inView, fetchNextPage]);

    return (
        <Fragment>
            <div className="md:absolute md:right-0 md:w-[800px]  md:mt-[88px]">
                <h3 className="hidden md:inline-block md:text-2xl ">자주하는 질문</h3>
                <span className="hidden md:inline-block md:text-slate-400 md:ml-4">고객님들께서 자주 해주시는 질문에 대한 응답입니다.</span>
                <QuestionList item={pages} />
                <div ref={ref}></div>
            </div>
        </Fragment>
    )
}

export default Question;