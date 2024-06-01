import React from "react";

const sizes = {
  xs: "text-sm font-normal",
  lg: "text-xl font-normal",
  s: "text-base font-normal",
  "2xl": "text-2xl font-medium md:text-[22px]",
  "3xl": "text-[26px] font-medium md:text-2xl sm:text-[22px]",
  "4xl": "text-4xl font-medium md:text-[34px] sm:text-[32px]",
  xl: "text-[22px] font-normal",
  md: "text-lg font-normal",
};

export type TextProps = Partial<{
  className: string;
  as: any;
  size: keyof typeof sizes;
}> &
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  as,
  size = "s",
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component className={`text-gray-600 font-rubik ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
