import SidebarItem from "@/components/admin/SidebarItem";
import AdminHeader from "@/components/admin/AdminHeader";
import AdminSearch from "@/components/admin/AdminSearch";
import AdminOrderRefund from "@/components/admin/OrderRefund";

export default function OrderRefund() {
    return (
        <div className="flex bg-[#ebedee]">
            <SidebarItem />
            <div className="ml-80 w-[1600px]">
                <AdminHeader />
                <AdminSearch />
                <AdminOrderRefund />
            </div>
        </div>
    )
}