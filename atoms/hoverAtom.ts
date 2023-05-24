import { atom } from 'recoil';

const hoverState = atom<boolean>({
  key: 'hoverState',
  default: false,
});

export default hoverState;
