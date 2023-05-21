import AdminSearch from "./AdminSearch";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { selectedProductState, productToModifyState } from "@/atoms/adminAtoms";
import axios from "axios";
import { useGetModifyDetail, ProductModifyInfo, ProductModifyProps } from "@/apis/adminProductModify";



export default function ProductModify({ list }: ProductModifyProps) {
    const [radioCheck, setRadioCheck] = useState<number | null>(null); //체크한 물품의 id를 저장하는상태
    const { data, isLoading, error } = useGetModifyDetail();
    const [selectedProductId, setSelectedProductId] = useRecoilState<ProductModifyInfo | null>(selectedProductState);
    const [, setProductToModify] = useRecoilState(productToModifyState);

    const handleRadioChange = (id: number) => {
        setSelectedProductId(id);
        console.log(id);
        console.log(selectedProductId);
        // setProductToModify(selectedProduct);

        const selectedProduct = data?.products.find((product: ProductModifyInfo) => product.category_id === id);
        console.log(selectedProduct);
        if (selectedProduct) {
            setProductToModify(selectedProduct);
            console.log(selectedProduct);
        }

        setRadioCheck(id);
    };



    const handleModifyButtonClick = () => {
        console.log("123");
        if (radioCheck !== null) {
            const selectedProduct = list.find(item => item.category_id === radioCheck);
            if (selectedProduct) {
                // 선택한 물품 정보를 API로 전송하는 로직을 작성합니다.
                // axios 또는 fetch 등을 사용하여 API 호출을 수행할 수 있습니다.
                axios.post("/api/product/modify", selectedProduct)
                    .then(response => {
                        console.log("API response:", response.data);
                        // 필요한 처리를 수행합니다.
                    })
                    .catch(error => {
                        console.error("API error:", error);
                        // 에러 처리를 수행합니다.
                    });
            }
        }
    };
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
                                                type="radio"
                                                name="productRadio"
                                                checked={radioCheck === i.category_id}
                                                onChange={() => handleRadioChange(i.category_id)}
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