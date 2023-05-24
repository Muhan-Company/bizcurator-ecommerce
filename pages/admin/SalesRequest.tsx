import SidebarItem from "@/components/admin/SidebarItem";
import AdminHeader from "@/components/admin/AdminHeader";
import AdminSalesRequest from "@/components/admin/SalesRequest";



export default function SalesRequest() {
    return (
        <div className="flex bg-[#ebedee] h-screen">
            <SidebarItem />
            <div className="ml-80 w-[1600px]">
                <AdminHeader />
                <AdminSalesRequest />
            </div>
        </div>
    )
}