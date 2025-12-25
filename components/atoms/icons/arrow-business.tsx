import React, { SVGProps } from "react";

function ArrowBusinessIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      {...props}
    >
      <path d="M1 18.7773L19 1" stroke="white" strokeWidth="1.5" />
      <path d="M5.28516 1.00002H18.9994V12.8516" stroke="white" strokeWidth="1.5" />
    </svg>
  );
}

export default ArrowBusinessIcon;
