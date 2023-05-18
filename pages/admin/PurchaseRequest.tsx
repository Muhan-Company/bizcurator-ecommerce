import SidebarItem from "@/components/admin/SidebarItem";
import AdminSearch from "@/components/admin/AdminSearch";
import AdminHeader from "@/components/admin/AdminHeader";



export default function PurchaseRequest() {
    return (
        <div className="flex bg-[#ebedee]">
            <SidebarItem />
            <div className="ml-80 w-[1600px]">
                <AdminHeader />
            </div>
        </div>
    )
}