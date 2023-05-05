import React, { FC, Fragment } from "react";

const Notice: FC<{}> = () => {
    return (
        <Fragment>
            <div
                className="md:absolute md:right-0 md:w-[800px]  md:mt-[88px]"
            >
                <h3 className="md:text-2xl md:inline-block">공지사항</h3>
                <span className="md:text-slate-400 md:ml-4">비즈큐레이터의 소식과 정보를 알려드립니다.</span>
            </div>
        </Fragment>
    )
}

export default Notice;