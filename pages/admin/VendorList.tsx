import SidebarItem from "@/components/admin/SidebarItem";
import AdminHeader from "@/components/admin/AdminHeader";
import AdminSearch from "@/components/admin/AdminSearch";
import AdminVendorList from "@/components/admin/VendorList";

export default function VendorList() {
    return (
        <div className="flex h-screen">
            <SidebarItem />
            <div className="ml-80 w-[1600px]">
                <AdminHeader />
                <AdminSearch />
                <AdminVendorList />
            </div>
        </div>
    )
}