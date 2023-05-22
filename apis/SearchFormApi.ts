import axios from 'axios';
import axiosInstance from './config';
import { useQuery } from '@tanstack/react-query';


export const deliveryApi = async (searchTerm: string) => {
    const response = await axiosInstance.get(
        `/api/admins/orders?page=1&search=${encodeURIComponent(searchTerm)}`
    );
    return response.data.result;
};

export const memberManageApi = async (searchTerm: string) => {
    const response = await axiosInstance.get(
        `/api/admins/users?search=${encodeURIComponent(searchTerm)}`
    );
    return response.data.result;
};

export const OrderCancelManageApi = async (searchTerm: string) => {
    const response = await axiosInstance.get(
        `/api/admins/applications/cancellations?page=1&search=${encodeURIComponent(searchTerm)}`
    );
    return response.data.result;
};

export const OrderRefundManageApi = async (searchTerm: string) => {
    const response = await axiosInstance.get(
        `/api/admins/applications/refunds?page=1&search=${encodeURIComponent(searchTerm)}`
    );
    return response.data.result;
};

export const VendorApi = async (searchTerm: string) => {
    const response = await axiosInstance.get(
        `/api/admins/partners?page=1&search=${encodeURIComponent(searchTerm)}`
    );
    return response.data.result;
};

//제품구매의뢰
export const PurchaseApi = async (searchTerm: string) => {
    const response = await axiosInstance.get(
        `/api/admins/purchases?search=${encodeURIComponent(searchTerm)}`
    );
    return response.data.result;
};

//제품제작의뢰
export const SalesApi = async (searchTerm: string) => {
    const response = await axiosInstance.get(
        `/api/admins/make?page=1&search=${encodeURIComponent(searchTerm)}`
    );
    return response.data.result;
};

//판매입점의뢰
export const EntranceApi = async (searchTerm: string) => {
    const response = await axiosInstance.get(
        `/api/admins/sell?page=1&search=${encodeURIComponent(searchTerm)}`
    );
    return response.data.result;
};

//상품수정페이지 리스트
export const ProductModifyApi = async (searchTerm: string) => {
    const response = await axiosInstance.get(
        `/api/admins/products?keyword=${encodeURIComponent(searchTerm)}`
    );
    return response.data.result;
};