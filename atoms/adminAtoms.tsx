import { atom } from "recoil";
import { ProductInfo } from "@/utils/type/adminRegister";
import { ProductModifyInfo } from "@/apis/adminProductModify";


export const dataAtom = atom<null>({
    key: 'dataAtom', //atom의 이름
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



export const selectedProductState = atom<ProductModifyInfo | null>({
    key: "selectedProductState",
    default: null,
});

export const productToModifyState = atom<ProductInfo | null>({
    key: 'productToModifyState',
    default: null,
});