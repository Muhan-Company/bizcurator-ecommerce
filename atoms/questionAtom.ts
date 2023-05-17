import { atom } from "recoil";

export const questionArticleIdState = atom<number>({
    key: "questionArticleIdState",
    default: 11,
});

export const questionizeState = atom<number>({
    key: "questionizeState",
    default: 10,
})
