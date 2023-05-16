import { atom } from 'recoil';

export interface addressState {
  postalCode: string;
  address: string;
  detailAddress?: string;
}
export const addressState = atom<addressState>({
  key: 'addressState',
  default: {
    postalCode: '',
    address: '',
    detailAddress: '',
  },
});
