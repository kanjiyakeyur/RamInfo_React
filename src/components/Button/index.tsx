import React from "react";

const shapes = {
  circle: "rounded-[50%]",
  round: "rounded-[39px]",
  square: "rounded-[0px]",
} as const;
const variants = {
  fill: {
    white_A700_19: "bg-white-A700_19 text-white-A700",
    green_200: "bg-green-200",
  },
  outline: {
    white_A700_99_red_300_4c: "border-[3px] border-solid white_A700_99_red_300_4c_border bg-gradient1",
    white_A700_99_blue_500_7f_01: "border-[3px] border-solid white_A700_99_blue_500_7f_01_border bg-gradient2",
    white_A700_af_white_A700_3f:
      "border border-solid white_A700_af_white_A700_3f_border bg-gradient3 shadow-sm text-white-A700",
    lime_700: "border-lime-700 border border-solid shadow-sm text-lime-800",
  },
} as const;
const sizes = {
  md: "h-[55px] px-[34px] text-base",
  xl: "h-[68px] px-[35px] text-xl",
  sm: "h-[47px] px-3",
  lg: "h-[68px] px-[19px]",
  "2xl": "h-[78px] px-[35px] text-xl",
  xs: "h-[40px]",
} as const;

type ButtonProps = Omit<
  React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
  "onClick"
> &
  Partial<{
    className: string;
    leftIcon: React.ReactNode;
    rightIcon: React.ReactNode;
    onClick: () => void;
    shape: keyof typeof shapes;
    variant: keyof typeof variants;
    size: keyof typeof sizes;
    color: string;
  }>;
const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "outline",
  size = "2xl",
  color = "lime_700",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex flex-row items-center justify-center text-center cursor-pointer ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color as keyof (typeof variants)[typeof variant]]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

export { Button };
