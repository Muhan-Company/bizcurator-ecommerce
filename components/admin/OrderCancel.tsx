import React from 'react';

type SubmenuProps = {
    label: string;
    content: React.ReactNode;
};

const Submenu = ({ label, content }: SubmenuProps) => {
    return (
        <div className="ml-4 py-2">
            <div className="font-bold">{`${label} 입니다`}</div>
            <div className="mt-2">{`${content}이에요`}</div>
        </div>
    );
};

export default Submenu;
