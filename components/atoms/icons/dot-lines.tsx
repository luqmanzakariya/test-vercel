import React, { SVGProps } from "react";

const DotLines = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="359"
      height="2"
      viewBox="0 0 359 2"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M0.0908203 1L358.841 1.00003" stroke="#A8A8A8" strokeDasharray="2 4" />
    </svg>
  );
};

export default DotLines;
