export default function Kakao() {
    return (
        <div className="w-full bg-gray-100  md:w-9/12 md:max-w-[800px] md:absolute md:right-0 md:top-9">
            <div className="pl-14 md:pl-8 pt-9 md:inline-block">
                <h1 className="lg:text-xl">도움이 필요하신가요?</h1>
                <span className="block text-xs lg:text-sm text-gray-400 my-3 md:mt-1 md:pb-4">평일 09:00 ~ 18:00 상담 가능
                    {/* <br />*제품교환의 경우 카톡 채널로 바로 연락 부탁드립니다. */}
                </span>
            </div>
            <button className="w-10/12 md:w-[200px] bg-yellow-300 py-4 mx-8 rounded-lg mb-3">카톡채널 상담</button>
        </div>
    )
}