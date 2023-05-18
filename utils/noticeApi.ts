import { atom } from "recoil";

export const ARBITRARY_LARGEST_LAST_QUESTIONPOST_ID = atom<number>({
    key: 'ARBITRARY_LARGEST_LAST_QUESTIONPOST_ID',
    default: 10,
});
export const INFINITE_SCROLL_LOAD_SIZE = atom<number>({
    key: 'INFINITE_SCROLL_LOAD_SIZE',
    default: 10,
});