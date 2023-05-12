import { createPortal } from 'react-dom';
import { useScrollLock } from './hook/useScrollLock';
import { useRouter } from 'next/router';
type SingleButtonModalProps = {
  content: string;
  link?: string;
  onClose: React.Dispatch<React.SetStateAction<boolean>>;
};
function Modal({ content, link, onClose }: SingleButtonModalProps) {
  const { replace } = useRouter();
  const { lockScroll, openScroll } = useScrollLock();
  lockScroll();
  return (
    <div className="modal-background">
      <div className="modal-shape flex flex-col gap-[26px] pt-[18px] pb-[5px]">
        {content}
        <div className="center">
          <button
            className="btn-white w-[156px] h-[50px] py-[19px]"
            onClick={() => {
              onClose(false);
              openScroll();
              // 뒤로가기로 이미 API 통신한 페이지로 접근하지 못하도록
              // 모달이 뜬 현재 페이지를 history에 남기지 않기 위해 replace 사용
              link && replace(link);
            }}
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
}

const SingleButtonModal = ({ content, link, onClose }: SingleButtonModalProps) =>
  createPortal(<Modal content={content} link={link} onClose={onClose} />, document.body);

export default SingleButtonModal;
