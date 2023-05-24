import { useState } from 'react';
import axios from "axios";
import { atom, useRecoilState, RecoilEnv } from "recoil";

const dataAtom = atom<any>({
    key: 'dataAtom',
    default: null,
});


export default function DashBoardContent() {
    const [data, setData] = useRecoilState(dataAtom);
    const [isLoading, setIsLoading] = useState(true);

    const fetchData = async () => {
        const path = "http://43.201.195.195:8080";
        const response = await axios.get(`${path}/api/admins/home`);
        return response.data;
    };

    const fetchDataAndSetData = async () => {
        try {
            const responseData = await fetchData();
            console.log(responseData)
            setData(responseData.result); // Set data to responseData.result
            setIsLoading(false);
        } catch (error) {
            console.error(error);
            throw new Error("데이터를 가져오는데 실패했습니다.");
        }
    };

    if (isLoading) {
        fetchDataAndSetData();
        return <div>Loading...</div>;
    }

    if (!data) {
        return <div>Error: Failed to fetch data</div>;
    }

    const totalUserCount = data.histories.totalUserCount;
    const userCountPerDay = data.histories.userCountPerDay;

    // 총 회원 수를 k로 표시하는 함수
    const formatUserCount = (totalUserCount: number) => {
        if (totalUserCount >= 1000) {
            const roundedCount = Math.round(totalUserCount / 100) / 10;
            return `${roundedCount}k`;
        }
        return `${totalUserCount}`;
    };
    const formatPerDay = (userCountPerDay: number) => {
        if (userCountPerDay >= 1000) {
            const roundedCount = Math.round(userCountPerDay / 100) / 10;
            return `${roundedCount}k`;
        }
        return `${userCountPerDay}`;
    };
    return (
        <div className="w-[1480px] h-[700px] mt-[30px] ml-[60px] bg-[#fff]">
            <div className="margin-auto">
                <h3 className='text-[36px] pt-[80px] text-center'>Biz Curator</h3>
                <div className='flex justify-center mt-[80px] text-center'>
                    <div>{totalUserCount}<br />총 회원 수</div>
                    <div className='border-r mx-10'></div>
                    <div>{userCountPerDay}<br />하루 유입 수</div>
                </div>
                <div className='flex justify-center mt-[80px] text-white'>
                    <div className='w-[330px] h-[210px] bg-[#2f1fd3] rounded-xl mx-5'>
                        <span className='pl-5 pt-5 block'>총 회원수</span>
                        <span className='block text-[30px] text-center mt-10'>
                            {formatUserCount(totalUserCount)}
                        </span>
                    </div>
                    <div className='w-[330px] h-[210px] bg-[#5197F7] rounded-xl mx-5'>
                        <span className='pl-5 pt-5 block'>하루 유입 수</span>
                        <span className='block text-[30px] text-center mt-10'>
                            {formatPerDay(userCountPerDay)}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}