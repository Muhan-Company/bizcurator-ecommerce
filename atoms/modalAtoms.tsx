import { atom } from 'recoil';

const logInModalState = atom<boolean>({
  key: 'logInModalState', // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});

const searchModalState = atom<boolean>({
  key: 'searchModalState',
  default: false,
});

const addCompleteModalState = atom<boolean>({
  key: 'addCompleteModalState',
  default: false,
});

const buyCompleteModalState = atom<boolean>({
  key: 'buyCompleteModalState',
  default: false,
});

export { logInModalState, searchModalState, addCompleteModalState, buyCompleteModalState };
