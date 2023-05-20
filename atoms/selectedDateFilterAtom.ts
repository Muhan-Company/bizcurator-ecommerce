import { atom } from 'recoil';

export const selectedDateFilterState = atom<number>({
  key: 'dateFilterState',
  default: 30 * 3,
});
