import { atom } from "recoil";

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