import { atom } from "recoil";
import { ProductInfo } from "@/utils/type/adminRegister";

export const dataAtom = atom<null>({
    key: 'dataAtom',
    default: null,
});

export const searchKeywordState = atom<string>({
    key: 'searchKeywordState',
    default: '',
});

export const cancelManageItemState = atom({
    key: 'cancelManageItemState',
    default: [],
})

//Recoil에서 사용할 atom 정의
export const productDataAtom = atom<ProductInfo | null>({
    key: "productDataAtom",
    default: null,
})

export const selectedProductState = atom<number | null>({
    key: 'selectedProductState',
    default: null,
});

export const productToModifyState = atom<ProductInfo | null>({
    key: 'productToModifyState',
    default: null,
});