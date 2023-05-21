import FileUpload from "./FileUpload";
import ProductCategory from "./ProductCategory";
import { ChangeEvent, FormEvent, useState } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { atom, useRecoilState } from "recoil";
import axios from "axios";
import { ProductInfo, FileUploadProps, DetailPageProps } from "@/utils/type/adminRegister";
import { productToModifyState } from "@/atoms/adminAtoms";

export default function ProductRegister() {
    const [productToModify, setProductToModify] = useRecoilState(productToModifyState);

    const [productInfo, setProductInfo] = useState<ProductInfo>({
        category_id: 1,
        manufacturer_name: "",
        product_name: "",
        regular_price: 0,
        discount_rate: 0,
        min_quantity: 0,
        max_quantity: 0,
        mainImage: null,
        detailImage: null,
    })

    const [selectedCategory, setSelectedCategory] = useState<string>("")

    // 상품 등록 API 호출을 위한 useMutation 훅 사용
    const mutation = useMutation((formData: FormData) =>
        axios.post('http://43.201.195.195:8080/api/products', formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            }
        })
    );

    const handleSelectCategory = (category: string) => {
        setSelectedCategory(category);
    };

    const onChangeFile = (file: File, type: string) => {
        console.log(file, type);
        if (!file) {
            return;
        }

        if (type === "mainImage") {
            setProductInfo((prev) => ({ ...prev, mainImage: file }));
            console.log(`mainImage ${file}`);
        } else if (type === "detailImage") {
            setProductInfo((prev) => ({ ...prev, detailImage: file }));
            console.log(`detailImage ${file}`);
        }
    };
    const fileUploadProps: FileUploadProps = {
        handleFileChange: (file) => onChangeFile(file, "mainImage"),
    };
    const detailPageProps: DetailPageProps = {
        handleFilesChange: (file) => onChangeFile(file, "detailImage"),
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        let newValue: string | number = value;

        if (name === "min_quantity" || name === "max_quantity") {
            newValue = parseInt(value);
            if (name === "min_quantity" && newValue < 20) { //최소 구매수량을 20으로 맞춰 놓아서 20이하이면 최소 20개가 나오도록
                newValue = 20;
            } else if (name === "max_quantity" && newValue > 100) { //최대구매수량을 100으로 맞춰놓아서 100이상이면 100으로 돌아가도록
                newValue = 100;
            }
        } else if (name === "regular_price") {
            // Remove commas from the value
            const cleanedValue = value.replace(/,/g, '');

            // Convert the cleaned value to a number
            newValue = parseInt(cleanedValue);

            // Add commas to display the amount
            newValue = newValue.toLocaleString();
        }

        setProductInfo((prev) => ({
            ...prev,
            [name]: newValue
        }))
    }
    const handleSubmit = async (e: FormEvent) => {

        e.preventDefault();
        try {
            const { mainImage, detailImage, ...info } = productInfo;
            const formData = new FormData(); //string파일만 들어감(객체 저장x , 문자열만)
            // formData.append("productRequest", JSON.stringify(info)); // 수정: productRequest key를 가지는 JSON 데이터 추가
            const uploaderString = JSON.stringify(info);
            formData.append('productRequest', new Blob([uploaderString], { type: 'application/json' }));
            if (mainImage) {
                formData.append('mainImage', mainImage)
            }
            if (detailImage) {
                formData.append('detailImage', detailImage)
            }
            await mutation.mutateAsync(formData);
        } catch (error) {

        }

        return (
            <>
                <form onSubmit={handleSubmit}>
                    <div className="w-[1500px] mx-[60px] mt-[15px]">
                        <div className="rounded-xl bg-[#fff] my-3 pl-[30px] py-[10px]">
                            <div className="py-[30px] bg-[#fff]  rounded-t-xl">상품 카테고리</div>
                            <ProductCategory selectedCategory={selectedCategory} onSelectCategory={handleSelectCategory} id={1} name="객실용품" />
                            <ProductCategory selectedCategory={selectedCategory} onSelectCategory={handleSelectCategory} id={2} name="욕실용품" />
                            <ProductCategory selectedCategory={selectedCategory} onSelectCategory={handleSelectCategory} id={3} name="위생용품" />
                            <ProductCategory selectedCategory={selectedCategory} onSelectCategory={handleSelectCategory} id={4} name="침구류" />
                            <ProductCategory selectedCategory={selectedCategory} onSelectCategory={handleSelectCategory} id={5} name="가전/전자제품" />
                            <ProductCategory selectedCategory={selectedCategory} onSelectCategory={handleSelectCategory} id={6} name="청소/시설관리" />
                            <ProductCategory selectedCategory={selectedCategory} onSelectCategory={handleSelectCategory} id={7} name="소방/안전설비" />
                            <ProductCategory selectedCategory={selectedCategory} onSelectCategory={handleSelectCategory} id={8} name="사무용품" />
                            <ProductCategory selectedCategory={selectedCategory} onSelectCategory={handleSelectCategory} id={9} name="음료/식품" />
                            <ProductCategory selectedCategory={selectedCategory} onSelectCategory={handleSelectCategory} id={10} name="기타" />
                        </div>
                        <div className="rounded-xl bg-[#fff] my-3 pl-[30px] py-[10px]">
                            <div className="py-[30px] bg-[#fff]">제조사 명</div>
                            <input
                                name="manufacturer_name"
                                onChange={handleChange}
                                className="w-[1440px] block border border-black rounded-md h-10 pl-3 mb-3"
                            />
                        </div>
                        <div className="rounded-xl bg-[#fff] my-3 pl-[30px] py-[10px]">
                            <div className="py-[30px] bg-[#fff]">상품명</div>
                            <input
                                name="product_name"
                                onChange={handleChange}
                                className="w-[1440px] block border border-black rounded-md h-10 pl-3 mb-3"
                                placeholder="최대 50글자"
                            />
                        </div>
                        <div className="rounded-xl bg-[#fff] my-3 pl-[30px] py-[10px]">
                            <div className="py-[30px] bg-[#fff] border-b">
                                가격
                            </div>
                            <div className="py-[30px] bg-[#fff]">
                                <span className="inline-block w-[200px]">정가</span>
                                <input
                                    name="regular_price"
                                    onChange={handleChange}
                                    className="border border-black p-2 rounded-lg"
                                    placeholder="숫자만 입력"
                                />
                                <div className="ml-1 inline-block bg-black text-[#fff] p-2 rounded-lg">원</div>
                            </div>
                            <div className="py-[30px] bg-[#fff]">
                                <span className="inline-block w-[200px]">최소구매수량</span>
                                <input
                                    name="min_quantity"
                                    onChange={handleChange}
                                    className="border border-black p-2 rounded-lg"
                                    placeholder="20"
                                    value={productInfo.min_quantity}
                                />
                                <div className="ml-1 inline-block bg-black text-[#fff] p-2 rounded-lg">개</div>
                            </div>
                            <div className="py-[30px] bg-[#fff]">
                                <span className="inline-block w-[200px]">최대구매수량</span>
                                <input
                                    name="max_quantity"
                                    onChange={handleChange}
                                    className="border border-black p-2 rounded-lg"
                                    placeholder="100"
                                    value={productInfo.max_quantity}
                                />
                                <div className="ml-1 inline-block bg-black text-[#fff] p-2 rounded-lg">개</div>

                            </div>
                            <div className="py-[30px] bg-[#fff]">
                                <span className="inline-block w-[200px]">할인율</span>
                                <input
                                    name="discount_rate"
                                    onChange={handleChange}
                                    className="border border-black p-2 rounded-lg"
                                    placeholder="숫자만 입력" />
                                <div className="ml-1 inline-block bg-black text-[#fff] p-2 rounded-lg">%</div>
                            </div>
                        </div>
                        <div className="rounded-xl bg-[#fff] my-3 pl-[30px] py-[10px]">
                            <div className="py-[30px] bg-[#fff] border-b">
                                썸네일
                            </div>
                            <FileUpload imageChange={"mainImage"} {...fileUploadProps} handleFileChange={onChangeFile} />
                        </div>
                        <div className="rounded-xl bg-[#fff] my-3 pl-[30px] py-[10px]">
                            <div className="py-[30px] bg-[#fff] border-b">
                                상세페이지
                            </div>
                            <FileUpload imageChange={"detailImage"} {...detailPageProps} handleFileChange={onChangeFile} />
                        </div>
                        <div className="py-[50px] relative">
                            <button
                                className="absolute right-0 top-0 w-[260px] bg-[#16133A] text-[#fff] h-[61px] rounded-xl
                            hover:bg-[#c5c5c5] hover:text-[black] transition-all duration-300
                            "
                                type="submit">제출</button>
                        </div>
                    </div>
                </form>
            </>
        )
    }
}