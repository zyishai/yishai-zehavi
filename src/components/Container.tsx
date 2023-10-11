import { cn } from "@/lib/utils";
import React from "react";

type ContainerProps = { className?: string };
const Container = ({
  className,
  children,
}: React.PropsWithChildren<ContainerProps>) => {
  return <div className={cn("max-w-[1024px]", className)}>{children}</div>;
};

export default Container;
