import SidebarItem from "@/components/admin/SidebarItem";
import AdminHeader from "@/components/admin/AdminHeader";
import AdminSearch from "@/components/admin/AdminSearch";
import AdminMemberManage from "@/components/admin/MemberManage";

export default function MemberManage() {
    return (
        <div className="flex bg-[#ebedee]">
            <SidebarItem />
            <div className="ml-80 w-[1600px]">
                <AdminHeader />
                <AdminSearch />
                <AdminMemberManage />
            </div>
        </div>
    )
}