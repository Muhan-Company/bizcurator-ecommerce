import Main from "./Main"
import SideBar from "./SideBar"

export default function Home() {
    return (
        <div className="flex">
            <SideBar SideBarData={SideBar} />
            <Main />
        </div>
    )
}