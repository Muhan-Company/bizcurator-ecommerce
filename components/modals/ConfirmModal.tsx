import React, { useState } from "react";

type ConfirmModalProps = {
    onClose: () => void;
    onConfirm: () => void;
};

const ConfirmModal: React.FC<ConfirmModalProps> = ({ onClose, onConfirm }) => {
    return (
        <div className="bg-black z-50 text-white fixed inset-0 flex items-center justify-center bg-opacity-50">
            <div className="bg-white rounded-lg p-4">
                <p>저장하시겠습니까?</p>
                <div className="flex justify-end mt-4">
                    <button
                        className="bg-gray-200 px-4 py-2 rounded-lg mr-2"
                        onClick={onClose}
                    >
                        저장하지 않음
                    </button>
                    <button
                        className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                        onClick={onConfirm}
                    >
                        저장
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmModal;