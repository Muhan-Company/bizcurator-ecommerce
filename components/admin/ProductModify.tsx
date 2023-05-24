import React, { ChangeEvent, useState } from "react";
import { useRecoilState } from "recoil";
import { productToModifyState } from "@/atoms/adminAtoms";
import axios from "axios";
import { useGetModifyDetail, ProductModifyInfo, ProductModifyProps } from "@/apis/adminProductModify";
import { ProductModifyApi } from "@/apis/SearchFormApi";
import SearchForm from "./AdminSearch";



export default function ProductModify() {
    const { data, isLoading, error } = useGetModifyDetail();
    const [, setProductToModify] = useRecoilState(productToModifyState);
    const [selectedProductId, setSelectedProductId] = useState<number | null>(null);
    const [searchResult, setSearchResult] = useState([]); // 검색 결과를 저장할 상태
    const handleSearch = (data: any) => {
        setSearchResult(data.products); // 검색 결과를 저장
    }
    console.log(searchResult);
    console.log(data);
    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: </div>;
    }
    console.log(ProductModifyApi);
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
    const displayData = searchResult.length > 0 ? searchResult : data?.products;
    return (
        <>
            <SearchForm onSearch={handleSearch} api={ProductModifyApi} />
            <div className="w-[1500px] h-[630px] mx-[60px] my-[15px] bg-white">
                <div className="w-[1300px] mx-auto py-[15px]">
                    <div>
                        <button type="button"
                            onClick={handleModifyButtonClick}
                            className="w-[140px] h-[40px] border mt-1"
                        >물품 수정
                        </button>
                        <table className="w-full mt-3 text-center">
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
                                {displayData?.map((i: ProductModifyInfo, index: number) => ( //값이 없는경우
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