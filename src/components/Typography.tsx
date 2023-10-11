import React from "react";
import { cn } from "@/lib/utils";

type HeadingProps = {
  level: "h1" | "h2" | "h3" | "h4";
} & React.HTMLAttributes<HTMLHeadingElement>;
export const Heading = ({
  level,
  className,
  children,
  ...props
}: React.PropsWithChildren<HeadingProps>) => {
  const Comp = level;
  const defaultClassNames =
    level === "h1"
      ? "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl"
      : level === "h2"
      ? "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0"
      : level === "h3"
      ? "scroll-m-20 text-2xl font-semibold tracking-tight"
      : "scroll-m-20 text-xl font-semibold tracking-tight";

  return (
    <Comp {...props} className={cn(defaultClassNames, className)}>
      {children}
    </Comp>
  );
};

type ParagraphProps = {} & React.HTMLAttributes<HTMLParagraphElement>;
export const Paragraph = ({
  className,
  children,
  ...props
}: React.PropsWithChildren<ParagraphProps>) => {
  return (
    <p
      className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}
      {...props}
    >
      {children}
    </p>
  );
};

type MutedProps<T extends "p" | "span" = "p"> = {
  as?: T;
} & React.PropsWithChildren<
  React.HTMLAttributes<T extends "p" ? HTMLParagraphElement : HTMLSpanElement>
>;
export const Muted = ({
  as = "p",
  className,
  children,
  ...props
}: MutedProps) => {
  const defaultClassNames = "text-sm text-muted-foreground";
  return as === "p" ? (
    <p {...props} className={cn(defaultClassNames, className)}>
      {children}
    </p>
  ) : (
    <span {...props} className={cn(defaultClassNames, className)}>
      {children}
    </span>
  );
};
