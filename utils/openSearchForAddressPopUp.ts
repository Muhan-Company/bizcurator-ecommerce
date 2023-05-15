import { addressState } from '@/atoms/addressAtom';
import { SetterOrUpdater } from 'recoil';

declare global {
  interface Window {
    daum: any;
  }
}
interface AddressData {
  zonecode: string;
  userSelectedType: string;
  roadAddress: string;
  jibunAddress: string;
}

export default function openSearchForAddressPopUp(setAddressData: SetterOrUpdater<addressState>) {
  new window.daum.Postcode({
    oncomplete: function (data: AddressData) {
      // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.

      // 각 주소의 노출 규칙에 따라 주소를 조합한다.
      // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
      let addr = ''; // 주소 변수

      //사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
      if (data.userSelectedType === 'R') {
        // 사용자가 도로명 주소를 선택했을 경우
        addr = data.roadAddress;
      } else {
        // 사용자가 지번 주소를 선택했을 경우(J)
        addr = data.jibunAddress;
      }

      // 우편번호와 주소 정보를 해당 필드(상태관리 스토어)에 넣는다.
      setAddressData((prev) => ({ ...prev, postalCode: data.zonecode }));
      setAddressData((prev) => ({ ...prev, address: addr }));
      // 커서를 상세주소 필드로 이동한다.
      document.getElementById('detailAddress')?.focus();
    },
  }).open();
}
