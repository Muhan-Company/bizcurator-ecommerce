import SidebarItem from "@/components/admin/SidebarItem";
import AdminHeader from "@/components/admin/AdminHeader";
import AdminEntranceRequest from "@/components/admin/EntranceRequest";



export default function EntranceRequest() {
    return (
        <div className="flex bg-[#ebedee] h-screen">
            <SidebarItem />
            <div className="ml-80 w-[1600px]">
                <AdminHeader />
                <AdminEntranceRequest />
            </div>
        </div>
    )
}