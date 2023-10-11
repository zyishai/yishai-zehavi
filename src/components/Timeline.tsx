import { cn } from "@/lib/utils";
import React from "react";
import { Separator } from "./ui/separator";

type TimelineProps = {
  className?: string;
};
const Timeline = ({
  className,
  children,
}: React.PropsWithChildren<TimelineProps>) => {
  return (
    <div className={cn("grid grid-cols-[auto,_auto,_auto]", className)}>
      {children}
    </div>
  );
};

type TimelineGroupProps = {
  year: string | number;
};
const TimelineGroup = ({
  year,
  children,
}: React.PropsWithChildren<TimelineGroupProps>) => {
  return (
    <>
      <span className="px-3 py-8 flex justify-center items-center [&:not(:last-of-type)]:border-b border-slate-300">
        <span className="transform -rotate-90">{year}</span>
      </span>
      <Separator orientation="vertical" className="bg-slate-300 w-0.5" />
      <div className="flex flex-col justify-center gap-y-8 py-8">
        {children}
      </div>
    </>
  );
};

const TimelineEntry = ({ children }: React.PropsWithChildren) => {
  return (
    <div className="flex items-center gap-x-4">
      <Separator className="relative max-w-[80px] bg-slate-300 h-0.5 [&::after]:content-[''] [&::after]:absolute [&::after]:-right-1.5 [&::after]:top-1/2 [&::after]:-translate-y-1/2 [&::after]:block [&::after]:w-2.5 [&::after]:h-2.5 [&::after]:rounded-full [&::after]:bg-slate-300" />
      <span className="leading-5">{children}</span>
    </div>
  );
};

export default Timeline;
Timeline.Group = TimelineGroup;
Timeline.Entry = TimelineEntry;
