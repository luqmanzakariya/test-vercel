import React, { SVGProps } from "react";

const ZoomIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="28"
      height="27"
      viewBox="0 0 28 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M13.7951 25.5666C20.8617 25.5666 26.5902 20.0672 26.5902 13.2833C26.5902 6.49943 20.8617 1 13.7951 1C6.72857 1 1 6.49943 1 13.2833C1 20.0672 6.72857 25.5666 13.7951 25.5666Z"
        stroke="black"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.7969 8.36993V18.1966"
        stroke="black"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.67969 13.2833H18.9158"
        stroke="black"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ZoomIcon;
