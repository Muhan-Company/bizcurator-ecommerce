import SidebarItem from "@/components/admin/SidebarItem";
import AdminSearch from "@/components/admin/AdminSearch";
import AdminHeader from "@/components/admin/AdminHeader";
import DashBoardContent from "@/components/admin/DashboardContent";



export default function Dashboard() {
    return (
        <div className="flex bg-[#ebedee] h-screen">
            <SidebarItem />
            <div className="ml-80 w-[1600px]">
                <AdminHeader />
                <DashBoardContent />
            </div>
        </div>
    )
}