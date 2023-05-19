export type ProductInfo = {
    category_id?: number;
    manufacturer_name: string; //제조사
    product_name: string; // 상품명
    regular_price: number; //정가
    discount_rate: number; //할인율
    min_quantity: number; //최소구매수량
    max_quantity: number;//최대 구매수랑
    // mainImage: File | null; //썸네일
    // detailImage: File | null; //상세페이지
}

export type FileUploadProps = {
    handleFileChange: (file: File) => void;
};

export type DetailPageProps = {
    handleFileChange: (detailFile: File) => void;
};
