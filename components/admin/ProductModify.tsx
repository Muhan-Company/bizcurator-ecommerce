import AdminSearch from "./AdminSearch";
import { useState } from "react";
import { atom, useRecoilState } from "recoil";
import { selectedProductState, productToModifyState } from "@/atoms/adminAtoms";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import axiosInstance from "@/apis/config";
import { useGetCancelRefundDetail } from "@/apis/test";

type ProductInfo = {
    category_id: number;
    manufacturer_name: string;
    product_name: string;
    regular_price: number;
    discount_rate: number;
    min_quantity: number;
    max_quantity: number;
}

interface ProductProps {
    list: ProductInfo[];
}

export default function ProductModify({ list }: ProductProps) {


    const { data, isLoading, error } = useGetCancelRefundDetail();
    console.log(data);
    if (isLoading) {
        return <div>Loading...</div>;
    }
    console.log(list);

    if (error) {
        return <div>Error: </div>;
    }

    return (
        <>
            <AdminSearch />
            <div className="w-[1500px] mx-[60px] mt-[15px] bg-white">
                <div className="w-[1300px] mx-auto">
                    <div>
                        <button
                            className="w-[140px] h-[40px] border mt-10"
                        >물품 수정
                        </button>
                        <table className="w-full mt-10 text-center">
                            <thead>
                                <tr className="border">
                                    <th className="py-3 border-r">선택</th>
                                    <th className="px-10 py-5 border-r">카테고리</th>
                                    <th className="px-10 py-5 border-r">상품명</th>
                                    <th className="px-10 py-5 border-r">판매가격</th>
                                    <th className="px-10 py-5 border-r">제조사</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data?.products?.map((i: ProductInfo) => ( //값이 없는경우
                                    <div key={i.category_id}>
                                        <span>{i.discount_rate}</span>
                                    </div>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

type ProductInfoProps = {
    value?: string | number;
}

function ProductModifyInfo({ value }: ProductInfoProps) {
    return <td className="border">{value}</td>
}