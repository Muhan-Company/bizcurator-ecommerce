import { atom } from 'recoil';

const searchBarState = atom<boolean>({
  key: 'searchBarState',
  default: false,
});

export default searchBarState;
