import SidebarItem from "@/components/admin/SidebarItem";
import AdminHeader from "@/components/admin/AdminHeader";
import AdminVendorList from "@/components/admin/VendorList";

export default function VendorList() {
    return (
        <div className="flex bg-[#ebedee] h-screen">
            <SidebarItem />
            <div className="ml-80 w-[1600px]">
                <AdminHeader />
                <AdminVendorList />
            </div>
        </div>
    )
}