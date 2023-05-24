import SidebarItem from '@/components/admin/SidebarItem';
import AdminHeader from '@/components/admin/AdminHeader';
import SearchForm from '@/components/admin/AdminSearch';
import AdminOrderCancel from '@/components/admin/OrderCancel';

export default function OrderCancel() {
  return (
    <div className="flex bg-[#ebedee] h-screen">
      <SidebarItem />
      <div className="ml-80 w-[1600px]">
        <AdminHeader />
        <AdminOrderCancel />
      </div>
    </div>
  );
}
