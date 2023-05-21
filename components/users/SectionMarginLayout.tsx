import React from 'react';

export default function SectionMarginLayout({ children }: { children: React.ReactNode }) {
  return <section className="px-7 py-[46px] flex flex-col border-b border-b-gray_02">{children}</section>;
}
