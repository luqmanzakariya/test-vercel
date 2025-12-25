import React, { forwardRef } from "react";
import clsx from "clsx";
import type { ButtonProps } from "./types";

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    className,
    variant = "flat",
    children,
    // active,
    loading = false,
    disabled = false,
    // width,
    style,
    onClick,
    ...rest
  } = props;

  const rootClassName = clsx(
    `rounded-[10px] flex justify-center items-center cursor-pointer transition ease-in-out duration-200 focus-visible:outline-none focus:outline-none ${style}`,
    {
      "bg-bluePrimary text-white font-primary text-lg font-medium leading-[40px]":
        variant === "primary",
      "border-bluePrimary border text-bluePrimary font-primary text-lg font-medium leading-[40px]":
        variant === "secondary",
      "bg-black border-black border text-white font-primary text-lg font-medium leading-[27px]":
        variant === "black",
      "cursor-not-allowed": loading || disabled,
    },
    className
  );

  return (
    <button
      ref={ref}
      className={rootClassName}
      disabled={loading || disabled}
      onClick={onClick}
      {...rest}
    >
      {loading ? "Loading.." : children}
    </button>
  );
});

Button.displayName = "Button";

export default Button;
