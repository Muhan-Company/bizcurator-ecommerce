import AdminHeader from "@/components/admin/AdminHeader";
import AdminSearch from "@/components/admin/AdminSearch";
import SidebarItem from "@/components/admin/SidebarItem";

const Admin = () => {
    return (
        <div className="flex h-screen">
            <SidebarItem />
            <div className="ml-80 w-[1600px]">
                <AdminHeader />
                <AdminSearch />
            </div>
        </div>
    );
};

export default Admin;
