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
        <div className="absolute center inset-0 bg-black/20 z-20">
            <div className="modal-shape flex flex-col gap-[26px] pt-[18px] pb-[5px]">
                선택한 공지를 삭제하시겠습니까?
                <div className="center gap-2">
                    <button className="btn-white w-[156px] h-[50px] py-[19px]">취소</button>
                    <button className="btn-primary w-[156px] h-[50px] py-[19px]">확인</button>
                </div>
            </div>
        </div>
    );
}