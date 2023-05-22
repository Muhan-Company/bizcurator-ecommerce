import { addressState } from '@/atoms/addressAtom';
import openSearchForAddressPopUp from '@/utils/openSearchForAddressPopUp';
import { useRecoilState } from 'recoil';

type SearchAddressFormProps = {
  postalCode?: string;
  address?: string;
  detailAddress?: string;
  disabled?: boolean;
  inputProps?: object[];
  multiple?: boolean;
};

export default function SearchAddressForm({
  postalCode,
  address,
  disabled,
  inputProps,
  multiple,
}: SearchAddressFormProps) {
  // address에서 '/'로 기본주소와 상세주소 분리
  const detailAddress = address?.split('/')[1];
  const [addressData, setAddressData] = useRecoilState(addressState);

  return (
    <div className="flex flex-col gap-[10px]">
      <div className="flex">
        <input
          type="text"
          placeholder="우편번호"
          value={postalCode ?? addressData.postalCode}
          disabled
          id="postalCode"
          className="input"
          {...(inputProps && { ...inputProps[0] })}
          multiple={multiple}
        />
        <button
          disabled={disabled}
          className="w-[120px] h-[44px] ml-[10px] btn-white border-main text-button-xs btn-disabled"
          onClick={(e) => {
            e.preventDefault();
            // 주소 찾기 팝업 기능 연결
            openSearchForAddressPopUp(setAddressData);
          }}
        >
          우편번호 찾기
        </button>
      </div>
      <input
        type="text"
        placeholder="기본주소"
        value={address ?? addressData.address}
        disabled
        id="address"
        className="input"
        {...(inputProps && { ...inputProps[1] })}
        multiple={multiple}
      />
      <input
        type="text"
        placeholder="상세 주소 (선택 입력 가능)"
        value={detailAddress ?? addressData.detailAddress}
        disabled={disabled}
        id="detailAddress"
        className="input"
        {...(inputProps && { ...inputProps[2] })}
        multiple={multiple}
        onChange={(e) => setAddressData((prev) => ({ ...prev, detailAddress: e.target.value }))}
        onBlur={(e) => setAddressData((prev) => ({ ...prev, detailAddress: e.target.value.trim() }))}
      />
    </div>
  );
}
