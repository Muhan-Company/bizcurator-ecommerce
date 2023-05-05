import { SideBarData } from "./SideBarData"

interface SideBarProps {
    SideBarData: {
        title: string;
        index: number;
        Component: React.FC<{}>;
    }[];
}

const SideBar: React.FC<SideBarProps> = ({ SideBarData }) => {
    return (
        <>
            <div className="w-[300px] bg-[#313C52] h-screen">
                <h1 className="py-10 pl-6 text-[22px] text-[#93CEFA]">Biz Curator Manager</h1>
                {SideBarData?.map((i, index) => (
                    <div
                        key={index}
                    >
                        {i.title}
                    </div>
                ))}
            </div>
        </>
    )
}
export default SideBar;