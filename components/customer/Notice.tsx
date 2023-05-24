import React, { FC, Fragment, useMemo } from "react";
import NoticeList from "./NoticeList";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useInView } from 'react-intersection-observer'
import axiosInstance from "@/apis/config";

const Notice: FC<{}> = () => {

    const { ref, inView } = useInView()

    const { data, fetchNextPage } =
        useInfiniteQuery<any, Error>(
            ["notices"],
            async ({ pageParam = 0 }) => {
                if (!pageParam) {
                    const res = await axiosInstance.get(`/api/notices?size=10&firstPage=true`);
                    return res.data;
                }

                const res = await axiosInstance.get(`/api/notices?lastArticleId=${pageParam}&size=10&firstPage=false`);
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


    React.useEffect(() => {
        if (inView) {
            fetchNextPage();
        }
    }, [inView, fetchNextPage]);

    return (
        <Fragment>
            <div className="md:absolute md:right-0 md:w-[800px]  md:mt-[88px]">
                <h3 className="hidden md:inline-block md:text-2xl">공지사항</h3>
                <span className="hidden md:inline-block md:text-slate-400 md:ml-4">
                    비즈큐레이터의 소식과 정보를 알려드립니다.
                </span>
                <NoticeList dataList={pages} />
                <div ref={ref}></div>
            </div>
        </Fragment>
    );
};

export default Notice;