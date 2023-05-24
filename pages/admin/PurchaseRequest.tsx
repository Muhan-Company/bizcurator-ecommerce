import SidebarItem from '@/components/admin/SidebarItem';
import AdminHeader from '@/components/admin/AdminHeader';
import AdminPurchaseRequest from '@/components/admin/PurchaseRequest';

export default function PurchaseRequest() {
  return (
    <div className="flex bg-[#ebedee] h-screen">
      <SidebarItem />
      <div className="ml-80 w-[1600px]">
        <AdminHeader />
        <AdminPurchaseRequest />
      </div>
    </div>
  );
}
