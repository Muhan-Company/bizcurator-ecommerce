// 취소상태관리 데이터를 정수형태로 받아 문자형태로 변환하는 함수
export default function getCancelStateToString(cancelState: number) {
    switch (cancelState) {
        case 0:
            return '취소 신청 접수';
        case 1:
            return '취소 승인';
        case 2:
            return '취소 승인 거부';
    }
}
