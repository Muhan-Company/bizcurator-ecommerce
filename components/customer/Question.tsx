import React, { FC, Fragment } from "react";

const Question: FC<{}> = () => {
    return (
        <Fragment>
            <div
                className="md:absolute md:right-0 md:w-[800px]  md:mt-[88px]"
            >
                <h3 className="md:text-2xl md:inline-block">자주하는 질문</h3>
                <span className="md:text-slate-400 md:ml-4">고객님들께서 자주 해주시는 질문에 대한 응답입니다.</span>
            </div>
        </Fragment>
    )
}

export default Question;