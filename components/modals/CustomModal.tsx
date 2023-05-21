import { ConfirmModalState } from "@/atoms/modalAtoms";
import Link from "next/link";
import { useSetRecoilState } from "recoil";

type ConfirmModalProps = {
    setConfirmCheck?: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ConfirmModal({ setConfirmCheck }: ConfirmModalProps) {
    const setConfirmCheckModal = useSetRecoilState(ConfirmModalState);

    const closeModal = (e: React.MouseEvent) => {
        e.stopPropagation();
        setConfirmCheckModal(false);
        document.body.classList.remove('modal-open');

        if (setConfirmCheck) {
            setConfirmCheck(false);
        }
    }

    return (
        <>
            <div
                onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
                className="w-[351px] h-auto pt-[30px] px-3 modal-shape z-20 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex-col gap-0.5"
            >
                공지를 등록하시겠습니까?
                <div className="center gap-2 py-6">
                    {/* todo: 모달 닫기 기능 연결 */}
                    <button className="btn-white w-[156px] h-[42px] py-[16px]" onClick={closeModal}>
                        닫기
                    </button>
                    {/* todo: 장바구니 페이지 연결 & 모달 닫기 */}
                    <Link
                        href="/cart"
                        className="btn-primary w-[156px] h-[42px] py-[16px]"
                        onClick={() => document.body.classList.remove('modal-open')}
                    >
                        장바구니 확인
                    </Link>
                </div>
            </div>
            <div className="modal-box-shadow fixed inset-0 bg-black/70 z-10" onClick={closeModal}></div>
        </>
    );
}