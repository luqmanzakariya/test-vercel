import React, { SVGProps } from "react";

const MinusIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="14"
      height="3"
      viewBox="0 0 14 3"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M0 1.5L14 1.5" stroke="white" strokeWidth="1.4" />
    </svg>
  );
};

export default MinusIcon;
