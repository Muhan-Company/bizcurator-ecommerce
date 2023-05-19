export type ProductInfo = {
    category_id: number;
    manufacturer_name: string;
    product_name: string;
    regular_price: number;
    discount_rate: number;
    min_quantity: number;
    max_quantity: number;
}

export type FileUploadProps = {
    handleFileChange: (file: File) => void;
};

export type DetailPageProps = {
    handleFileChange: (file: File) => void;
};
