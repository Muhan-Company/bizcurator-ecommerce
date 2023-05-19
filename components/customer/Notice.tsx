import React, { FC, useState, Fragment, useMemo } from "react";
import NoticeList from "./NoticeList";
import { useInfiniteQuery } from "@tanstack/react-query";
import { atom, useRecoilValue } from "recoil";
import { useInView } from 'react-intersection-observer'
import axios from "axios";
import { lastArticleIdState, sizeState } from "@/atoms/noticeAtom";
import { NoticePostType } from "@/utils/types/responseType";

const Notice: FC<{}> = () => {
    const lastArticleId = useRecoilValue(lastArticleIdState);
    const size = useRecoilValue(sizeState);
    const fetchPreviousPageAsync = async () => {
        await fetchPreviousPage();
    };

    const fetchNextPageAsync = async () => {
        await fetchNextPage();
    };

    const { ref, inView } = useInView()

    const path = "http://43.201.195.195:8080";
    const { data, isFetchingNextPage, isFetchingPreviousPage, fetchNextPage, fetchPreviousPage, hasPreviousPage } =
        useInfiniteQuery<NoticePostType[], Error>(
            ["notices"],
            async ({ pageParam = 0 }) => {
                if (!pageParam) {
                    const res = await axios.get(`${path}/api/notices?lastArticleId=999&size=10&firstPage=true`);
                    return res.data;
                }

                const res = await axios.get(`${path}/api/notices?lastArticleId=${pageParam}&size=10&firstPage=false`);
                console.log(res.data);
                return res.data;
            }
            ,
            {
                getNextPageParam: (lastPage) => {
                    const notices = lastPage?.result?.notices ?? [];
                    const lastArticleId = notices[notices.length - 1]?.id ?? undefined
                    return lastArticleId;
                },
            }
        );
    const pages = useMemo(() => {
        return data?.pages.flatMap((page) => page.result?.notices ?? []) ?? []; //2차원배열을 1차원배열로 변경해주는거
    }, [data]);

    console.log(pages);

    React.useEffect(() => {
        if (inView) {
            fetchNextPage();
            console.log(inView);
        }
    }, [inView]);

    return (
        <Fragment>
            <div className="md:absolute md:right-0 md:w-[800px]  md:mt-[88px]">
                <h3 className="hidden md:inline-block md:text-2xl">공지사항</h3>
                <span className="hidden md:inline-block md:text-slate-400 md:ml-4">
                    비즈큐레이터의 소식과 정보를 알려드립니다.
                </span>
                {/* {pages.map((i, index) => ( */}
                <NoticeList dataList={pages} />
                {/* ))} */}
                {/* <button
                    onClick={() => fetchPreviousPage()}
                    disabled={!hasPreviousPage || isFetchingPreviousPage}
                >
                    {isFetchingPreviousPage
                        ? "Loading more..."
                        : hasPreviousPage
                            ? "Load Older"
                            : "Nothing more to load"}
                </button> */}
                {/* {isFetchingNextPage ? <p>Loading...</p> } */}
                <div ref={ref}></div>
            </div>
        </Fragment>
    );
};

export default Notice;