export function RequestsStateList() {
  return (
    <div className="pt-[25px]">
      <div className="pb-2 flex items-center">
        <RequestsState state="반려" />
        <span className="pl-2 text-label-xs text-gray_01">관리자가 의뢰서를 반려한 상태</span>
      </div>
      <div className="pb-2 flex items-center">
        <RequestsState state="승인" />
        <span className="pl-2 text-label-xs text-gray_01">관리자가 의뢰서를 승인한 상태</span>
      </div>
      <div className="flex items-center">
        <RequestsState state="대기" />
        <span className="pl-2 text-label-xs text-gray_01">관리자가 의뢰서를 읽지 않은 상태</span>
      </div>
    </div>
  );
}

interface RequestsStateProps {
  state: string;
}
export function RequestsState({ state }: RequestsStateProps) {
  const stateColor = (state: string) => {
    switch (state) {
      // REJECT
      case '반려':
        return 'bg-[#FFCECE]';
      // APPROVE
      case '승인':
        return 'bg-[#AFB7FF]';
      // WAIT
      case '대기':
        return 'bg-[#FFD6AF]';
    }
  };
  return (
    <div
      className={`w-[25px] h-[13px] p-[3px] ml-[1px] center rounded-[3px] text-[10px] leading-[14.5px] ${stateColor(
        state,
      )}`}
    >
      {state}
    </div>
  );
}
