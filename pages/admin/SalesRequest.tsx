import SidebarItem from "@/components/admin/SidebarItem";
import AdminSearch from "@/components/admin/AdminSearch";
import AdminHeader from "@/components/admin/AdminHeader";



export default function SalesRequest() {
    return (
        <div className="flex h-screen">
            <SidebarItem />
            <div className="ml-80 w-[1600px]">
                <AdminHeader />
            </div>
        </div>
    )
}