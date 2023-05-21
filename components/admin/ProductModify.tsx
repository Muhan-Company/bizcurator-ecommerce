import AdminSearch from "./AdminSearch";
import React, { ChangeEvent, useState } from "react";
import { useRecoilState } from "recoil";
import { selectedProductState, productToModifyState } from "@/atoms/adminAtoms";
import axios from "axios";
import { useGetModifyDetail, ProductModifyInfo, ProductModifyProps } from "@/apis/adminProductModify";



export default function ProductModify({ list }: ProductModifyProps) {

    const [radioCheck, setRadioCheck] = useState<number | null>(null); //체크한 물품의 id를 저장하는상태
    const { data, isLoading, error } = useGetModifyDetail();
    const [, setProductToModify] = useRecoilState(productToModifyState);
    const [selectedProductId, setSelectedProductId] = useState<number | null>(null);

    console.log(data);
    if (isLoading) {
        return <div>Loading...</div>;
    }
    console.log(list);

    if (error) {
        return <div>Error: </div>;
    }

    const handleCheckboxChange = (productId: number) => {
        setSelectedProductId(productId);
    };

    const handleModifyButtonClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        if (selectedProductId !== null) {
            const selectedProduct = data?.products.find(data => data.id === selectedProductId);
            console.log(selectedProduct?.id);
            console.log(selectedProductId);

        }
    };

    return (
        <>
            <div className="w-[1500px] mx-[60px] my-[15px] bg-white">
                <div className="w-[1300px] mx-auto py-[15px]">
                    <div>
                        <button type="button"
                            onClick={handleModifyButtonClick}
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
                                {data?.products?.map((i: ProductModifyInfo, index) => ( //값이 없는경우
                                    <tr key={index}>
                                        <td className="py-3 border">
                                            <input
                                                className="border"
                                                type="checkbox"
                                                name="productRadio"
                                                value={i.id}
                                                checked={selectedProductId === i.id}
                                                onChange={() => handleCheckboxChange(i.id)}
                                            />
                                        </td>
                                        <ProductModifyInfo value={i.product_name} />
                                        <ProductModifyInfo value={i.manufacturer_name} />
                                        <ProductModifyInfo value={i.regular_price} />
                                        <ProductModifyInfo value={i.discount_rate} />
                                    </tr>
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