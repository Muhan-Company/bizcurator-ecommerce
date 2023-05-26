import { atom } from 'recoil';

const purchaseReqState = atom<boolean>({
  key: 'purchaseReqState',
  default: false,
});

export default purchaseReqState;
