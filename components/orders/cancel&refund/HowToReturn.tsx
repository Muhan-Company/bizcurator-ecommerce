import { useState } from 'react';
import Radio from './Radio';
import AddressToBringBack from './AddressToBringBack';

export default function HowToReturn() {
  const [returnRadioValue, setReturnRadioValue] = useState('직접발송');
  const [adressRadioValue, setAdressRadioValue] = useState('배송지 정보와 동일');
  return (
    <div>
      <Radio.RadioInputContainer
        title="제품 발송 방법"
        onChange={(e) => setReturnRadioValue((e.target as HTMLElement).id)}
      >
        <Radio.RadioInput name="return" label="수거신청" />
        <Radio.RadioInput name="return" label="직접발송" defaultChecked />
      </Radio.RadioInputContainer>
      {/* "수거신청" 선택시 "수거지 선택" 라디오 선택란 랜더링*/}
      {returnRadioValue === '수거신청' && (
        <div>
          <Radio.RadioInputContainer
            title="수거지 선택"
            onChange={(e) => setAdressRadioValue((e.target as HTMLElement).id)}
          >
            <Radio.RadioInput name="address" label="배송지 정보와 동일" defaultChecked />
            <Radio.RadioInput name="address" label="수거지 변경" />
          </Radio.RadioInputContainer>
          <AddressToBringBack
            postal_code={'12345'}
            address={'서울 강남구 역삼로 12 (역삼동, 오큐시스)/105호'}
            disabled={adressRadioValue === '배송지 정보와 동일'}
          />
        </div>
      )}
    </div>
  );
}
