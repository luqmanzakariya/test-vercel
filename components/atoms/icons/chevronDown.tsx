import React, { SVGProps } from "react";

function ChevronDown(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="10"
      height="7"
      viewBox="0 0 10 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      {...props}
    >
      <path
        d="M1 0.865204L4.7925 5.32235L8.585 0.865204"
        stroke="#222222"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default ChevronDown;
