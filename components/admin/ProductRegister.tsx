import FileUpload from "./FileUpload";
import ProductCategory from "./ProductCategory";
import { ChangeEvent, FormEvent, useState } from "react";

type ProductInfo = {
    company: string;
    name: string;
    regular_price: number;
    min_quantity: number;
    max_quantity: number;
    discount_rate: number;
    file: File | null;
}
type FileUploadProps = {
    handleFileChange: (file: File) => void;
};


export default function ProductRegister() {
    const [productInfo, setProductInfo] = useState<ProductInfo>({
        company: "",
        name: "",
        regular_price: 0,
        min_quantity: 0,
        max_quantity: 0,
        discount_rate: 0,
        file: null,
    })

    const [selectedCategory, setSelectedCategory] = useState<string>("")

    const handleSelectCategory = (category: string) => {
        setSelectedCategory(category);
    };

    const onChangeFile = (file: File) => {
        setProductInfo((prev) => ({ ...prev, file }));
    };

    const fileUploadProps: FileUploadProps = {
        handleFileChange: onChangeFile
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setProductInfo((prev) => ({
            ...prev,
            [name]: value
        }))
    }
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();


        console.log(selectedCategory);
        console.log(`카테고리, ${productInfo.company}`)
        console.log(`상품명, ${productInfo.name}`)
        console.log(`정가, ${productInfo.regular_price}`)
        console.log(`최소구매, ${productInfo.min_quantity}`)
        console.log(`최대구매, ${productInfo.max_quantity}`)
        console.log(`할인율, ${productInfo.discount_rate}`)
        console.log(`썸네일: ${productInfo.file ? productInfo.file.name : "파일이 선택되지 않았습니다."}`);

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
                        <div className="py-[30px] bg-[#fff]">상품 카테고리</div>
                        <input
                            name="company"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="rounded-xl bg-[#fff] my-3 pl-[30px] py-[10px]">
                        <div className="py-[30px] bg-[#fff]">상품명</div>
                        <input
                            name="name"
                            onChange={handleChange}
                            className="w-[1440px] mx-auto block border border-black"
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
                                placeholder="숫자만 입력" />
                            <div className="ml-1 inline-block bg-black text-[#fff] p-2 rounded-lg">개</div>
                        </div>
                        <div className="py-[30px] bg-[#fff]">
                            <span className="inline-block w-[200px]">최대구매수량</span>
                            <input
                                name="max_quantity"
                                onChange={handleChange}
                                className="border border-black p-2 rounded-lg"
                                placeholder="숫자만 입력" />
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
                        <FileUpload {...fileUploadProps} />
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