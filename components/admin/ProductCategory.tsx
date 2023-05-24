
type ProductCategoryType = {
    id: number;
    name: string;
    onSelectCategory: (category: string) => void;
    selectedCategory: string;
}

export default function ProductCategory({ id, name, onSelectCategory, selectedCategory }: ProductCategoryType) {
    const handleClick = () => {
        onSelectCategory(name); // Pass the selected category name to the parent component
        console.log(name);
    };
    return (
        <div
            onClick={handleClick}
            className={`flex flex-col w-[350px] p-2 hover:bg-slate-300 hover:rounded-t-lg  ${selectedCategory === name ? "bg-black text-[#fff] rounded-t-lg" : ""}`}>
            {name}
        </div>
    )
}