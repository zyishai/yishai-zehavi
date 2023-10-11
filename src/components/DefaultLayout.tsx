import React from "react";
import PageHeader from "./PageHeader";
import SideNav from "./SideNav";

type DefaultLayoutProps = {
  title?: string;
};
const DefaultLayout = ({
  title,
  children,
}: React.PropsWithChildren<DefaultLayoutProps>) => {
  return (
    <main className="w-screen h-screen flex flex-col overflow-hidden">
      <PageHeader title={title} />
      <div className="flex-1 flex overflow-hidden">
        <SideNav />
        <div className="flex-1 p-4 overflow-auto">{children}</div>
      </div>
    </main>
  );
};

export default DefaultLayout;
