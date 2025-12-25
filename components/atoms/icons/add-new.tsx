import React, { SVGProps } from "react";

const AddNewIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="black"
      {...props}
    >
      <path d="M8 0V16" strokeWidth="1.5" />
      <path d="M0 8L16 8" strokeWidth="1.5" />
    </svg>
  );
};

export default AddNewIcon;
