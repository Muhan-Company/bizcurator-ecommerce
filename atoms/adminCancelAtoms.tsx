import { atom } from 'recoil';

const selectItemState = atom({
    key: 'selectItemState',
    default: [], //초기값 빈배열
})

export default selectItemState;