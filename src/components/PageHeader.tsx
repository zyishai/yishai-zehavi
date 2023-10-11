import React from "react";

type PageHeaderProps = {
  title?: string;
};
const PageHeader = ({ title }: PageHeaderProps) => {
  return (
    <header className="py-3 border-b border-slate-200 flex justify-center items-center bg-white">
      {title ? (
        <div className="w-[480px] rounded-md py-1 bg-slate-200 flex justify-center items-center">
          <p className="text-slate-800">{title}</p>
        </div>
      ) : null}
    </header>
  );
};

export default PageHeader;
