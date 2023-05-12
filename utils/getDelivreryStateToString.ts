// 배송상태 데이터를 정수형태로 받아 문자형태로 변환하는 함수
export default function getDelivreryStateToString(deliveryState: number) {
  switch (deliveryState) {
    case 0:
      return '결제완료';
    case 1:
      return '배송중';
    case 2:
      return '배송완료';
    case 3:
      return '구매확정';
  }
}
