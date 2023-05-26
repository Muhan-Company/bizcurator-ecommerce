import { atom } from 'recoil';

const reqSuccessState = atom<boolean>({
  key: 'reqSuccessState',
  default: false,
});

export default reqSuccessState;
