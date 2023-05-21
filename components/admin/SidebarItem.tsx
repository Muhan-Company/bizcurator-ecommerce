import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { DashBoardIcon, OrderCancelIcon, OrderDeliveryIcon, MemberManageIcon, VendorListIcon, RequestIcon, ManageIcon, ItsMallIcon } from '../Icons';


const SidebarItem = () => {
    const router = useRouter();
    const [showSubmenu1, setShowSubmenu1] = useState('');

    const toggleSubMenu1 = (submenu: string) => {
        setShowSubmenu1(showSubmenu1 === submenu ? "" : submenu);
    }
    console.log(router);
    return (
        <div className="fixed h-full bg-gray-100 w-[320px] z-10">
            <nav className="fixed w-80 bg-[#313C52] h-full inline-block float-left">
                <h1 className="py-10 pl-6 text-[22px] text-[#93CEFA]">
                    Biz Curator Manager
                </h1>
                <ul>
                    <li className={`flex items-center flex-wrap text-[#fff] cursor-pointer duration-200 hover:bg-[#3F4B62]  pl-10
                    ${router.pathname === '/admin/Dashboard' && 'bg-[#3F4B62]'}`}
                    >
                        <DashBoardIcon />
                        <Link className='block py-5 w-4/5' href="/admin/Dashboard">
                            Dashboard
                        </Link>
                    </li>
                    <li className={`flex items-center flex-wrap text-[#fff] cursor-pointer duration-200 hover:bg-[#3F4B62] pl-10
                     ${router.pathname === '/admin/OrderDelivery' && 'bg-[#3F4B62]'}`}
                    >
                        <OrderDeliveryIcon />
                        <Link className='block py-5 w-4/5' href="/admin/OrderDelivery">
                            주문 배송
                        </Link>
                    </li>
                    <li
                        className={`flex items-center flex-wrap text-[#fff] py-5 cursor-pointer duration-200 hover:bg-[#3F4B62] pl-10`}
                        onClick={() => toggleSubMenu1('uses')}>
                        <OrderCancelIcon />
                        주문 취소 환불
                        {showSubmenu1 === 'uses' && (
                            <ul>
                                <li className={`mt-5 py-1 w-[250px]
                                ${router.pathname === '/admin/OrderCancel' ? 'bg-gray-800 rounded-xl' : ''}`}>
                                    <Link className='w-full block pl-10 py-1' href="/admin/OrderCancel">
                                        취소 관리
                                    </Link>
                                </li>
                                <li className={`mt-5 py-1 w-[250px]
                                ${router.pathname === '/admin/OrderRefund' ? 'bg-gray-800 rounded-xl' : ''}`}>
                                    <Link className='w-full block pl-10 py-1' href="/admin/OrderRefund">
                                        환불 관리
                                    </Link>
                                </li>
                            </ul>
                        )}
                    </li>
                    {/* router.pathname === '/admin/MemberManage' ? 'bg-[#3F4B62]' : '' */}
                    <li className={`flex items-center flex-wrap text-[#fff] cursor-pointer duration-200 hover:bg-[#3F4B62] pl-10
                    ${router.pathname === '/admin/MemberManage' && 'bg-[#3F4B62]'}
                    `}>
                        <MemberManageIcon />
                        <Link className='block py-5 w-4/5' href="/admin/MemberManage">
                            회원 관리
                        </Link>
                    </li>
                    <li className={`flex items-center flex-wrap text-[#fff] cursor-pointer duration-200 hover:bg-[#3F4B62] pl-10
                    ${router.pathname === '/admin/VendorList' && 'bg-[#3F4B62]'}
                    `}>
                        <VendorListIcon />
                        <Link className='block py-5 w-4/5' href="/admin/VendorList">
                            입점 판매사 리스트
                        </Link>
                    </li>
                    <li
                        className={`flex items-center flex-wrap text-[#fff] py-5 cursor-pointer duration-200 hover:bg-[#3F4B62] pl-10`}
                        onClick={() => toggleSubMenu1('request')}
                    >
                        <RequestIcon />
                        의뢰서
                        {showSubmenu1 === 'request' && (
                            <ul>
                                <li className={`mt-5 py-1 w-[250px]
                                ${router.pathname === '/admin/PurchaseRequest' ? 'bg-gray-800 rounded-xl' : ''}`}>
                                    <Link className='w-full block pl-10 py-1' href="/admin/PurchaseRequest">
                                        제품 구매 의뢰
                                    </Link>
                                </li>
                                <li className={`mt-5 py-1 w-[250px]
                                ${router.pathname === '/admin/SalesRequest' ? 'bg-gray-800 rounded-xl' : ''}`}>
                                    <Link className='w-full block pl-10 py-1' href="/admin/SalesRequest">
                                        제품 제작 의뢰
                                    </Link>
                                </li>
                                <li className={`mt-5 py-1 w-[250px]
                                ${router.pathname === '/admin/EntranceRequest' ? 'bg-gray-800 rounded-xl' : ''}`}>
                                    <Link className='w-full block pl-10 py-1' href="/admin/EntranceRequest">
                                        판매자 입점의뢰
                                    </Link>
                                </li>
                            </ul>
                        )}
                    </li>
                    <li
                        className={`flex items-center flex-wrap text-[#fff] py-5 cursor-pointer duration-200 hover:bg-[#3F4B62] pl-10`}
                        onClick={() => toggleSubMenu1('manage')}>
                        <ManageIcon />
                        상품 관리
                        {showSubmenu1 === 'manage' && (
                            <ul>
                                <li className={`mt-5 py-1 w-[250px]
                                ${router.pathname === '/admin/ProductRegister' ? 'bg-gray-800 rounded-xl' : ''}`}>
                                    <Link className='w-full block pl-10 py-1' href="/admin/ProductRegister">
                                        상품 등록
                                    </Link>
                                </li>
                                <li className={`mt-5 py-1 w-[250px]
                                ${router.pathname === '/admin/ProductModify' ? 'bg-gray-800 rounded-xl' : ''}`}>
                                    <Link className='w-full block pl-10 py-1' href="/admin/ProductModify">
                                        상품 수정
                                    </Link>
                                </li>
                            </ul>
                        )}
                    </li>
                    <li className={`flex items-center flex-wrap text-[#fff] cursor-pointer duration-200 hover:bg-[#3F4B62] pl-10
                    ${router.pathname === '/admin/products' && 'bg-[#3F4B62]'}
                    `}>
                        <ItsMallIcon />
                        <Link className='block py-5 w-4/5' href="/">
                            자사몰
                        </Link>
                    </li>
                    {/* 필요한 만큼 메뉴 항목을 추가합니다 */}
                </ul>
            </nav>
        </div>
    );
};

export default SidebarItem;
