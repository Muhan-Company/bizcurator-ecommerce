import { atom } from 'recoil';

interface cancelState {
  orderId: number | null;
  opinion: string;
}
// 취소 신청 입력(요청)값
export const cancelRequestState = atom<cancelState>({
  key: 'cancelRequestState',
  default: {
    orderId: null,
    opinion: 'UNSELECTED',
  },
});

interface refundState {
  orderId: number | null;
  opinionCategory: string;
  receiveWayType: string; // "직접발송"이면 receiveAddressType 의 value값 안보내셔도 됩니다.
  receiveAddressType?: string | null; // "배송지 정보와 동일"이면 address, postalCode의 value값 안보내셔도 됩니다.
  address?: string | null;
  postalCode?: string | null;
}
// 환불 신청 입력(요청)값
export const refundRequestState = atom<refundState>({
  key: 'refundRequestState',
  default: {
    orderId: null,
    opinionCategory: 'UNSELECTED',
    receiveWayType: 'SEND_BY_USER',
    receiveAddressType: null,
    address: null,
    postalCode: null,
  },
});

// 취소, 환불 내역 조회 패이지의 활성화된 탭 상태값
export const cancelRefundTabState = atom<string>({
  key: 'cancelRefundTabState',
  default: 'cancellations',
});
