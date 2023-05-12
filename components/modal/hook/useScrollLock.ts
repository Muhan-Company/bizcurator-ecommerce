import { useCallback } from 'react';

export function useScrollLock() {
  const lockScroll = useCallback(() => {
    // 모달 배경을 꽉 채우기 위해 position: relative 속성 설정
    document.body.style.position = 'relative';
    document.body.style.overflow = 'hidden';
  }, []);

  const openScroll = useCallback(() => {
    document.body.style.removeProperty('position');
    document.body.style.removeProperty('overflow');
  }, []);

  return { lockScroll, openScroll };
}
