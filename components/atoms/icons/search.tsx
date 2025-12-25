import React, { SVGProps } from "react";

const SearchIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="black"
      {...props}
    >
      <path
        d="M16.0389 8.35804C16.0389 12.5568 12.6194 15.9661 8.39445 15.9661C4.16946 15.9661 0.75 12.5568 0.75 8.35804C0.75 4.15931 4.16946 0.75 8.39445 0.75C12.6194 0.75 16.0389 4.15931 16.0389 8.35804Z"
        strokeWidth="1.5"
      />
      <path d="M13.7458 13.686L17.5369 17.9999" strokeWidth="1.5" />
    </svg>
  );
};

export default SearchIcon;
