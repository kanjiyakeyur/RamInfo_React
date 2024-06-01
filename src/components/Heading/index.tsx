import React from "react";

const sizes = {
  xl: "text-[90px] font-semibold md:text-5xl",
  s: "text-2xl font-bold md:text-[22px]",
  md: "text-[32px] font-semibold md:text-3xl sm:text-[28px]",
  xs: "text-[22px] font-semibold",
  lg: "text-[42px] font-bold md:text-[38px] sm:text-[32px]",
};

export type HeadingProps = Partial<{
  className: string;
  as: any;
  size: keyof typeof sizes;
}> &
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

const Heading: React.FC<React.PropsWithChildren<HeadingProps>> = ({
  children,
  className = "",
  size = "lg",
  as,
  ...restProps
}) => {
  const Component = as || "h6";

  return (
    <Component className={`text-blue_gray-900 font-rubik ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
