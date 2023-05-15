import { useState } from 'react';
import SubTitleLayout from './SubTitleLayout';

type AddressToBringBackProps = {
  postal_code: string;
  address: string;
  disabled?: boolean;
};

export default function AddressToBringBack({ postal_code, address, disabled }: AddressToBringBackProps) {
  const detail_address = address.split('/')[1];
  const [addressData, setAddressData] = useState({ postal_code, address, detail_address });

  const addressChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target as HTMLInputElement;
    setAddressData((prev) => ({ ...prev, [id]: value }));
  };

  return (
    <SubTitleLayout title="수거지 주소">
      <form className="mb-10 flex flex-col gap-[10px]">
        <div className="flex">
          <input
            type="text"
            value={addressData.postal_code}
            disabled
            id="postal_code"
            className="input"
            onChange={addressChangeHandler}
          />
          <button
            disabled={disabled}
            id="postal_code"
            className="w-[120px] h-[44px] ml-[10px] btn-white border-main text-button-xs btn-disabled"
            // todo: 우편번호 찾기 API 연결
            onClick={(e) => e.preventDefault()}
          >
            우편번호 찾기
          </button>
        </div>
        <input type="text" value={addressData.address} disabled className="input" onChange={addressChangeHandler} />
        <input
          type="text"
          value={addressData.detail_address ? addressData.detail_address : detail_address}
          disabled={disabled}
          id="detail_address"
          className="input"
          onChange={addressChangeHandler}
          onBlur={(e) => setAddressData((prev) => ({ ...prev, detail_address: e.target.value.trim() }))}
        />
      </form>
    </SubTitleLayout>
  );
}
