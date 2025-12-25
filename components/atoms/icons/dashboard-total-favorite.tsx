import React, { SVGProps } from "react";

function DashboardTotalFavoriteIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="70"
      height="70"
      viewBox="0 0 70 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      {...props}
    >
      <circle cx="35" cy="35" r="35" fill="#003049" />
      <path
        d="M46.6261 25.706C45.9895 25.0731 45.2336 24.5711 44.4016 24.2285C43.5697 23.886 42.678 23.7097 41.7774 23.7097C40.8769 23.7097 39.9852 23.886 39.1532 24.2285C38.3213 24.5711 37.5654 25.0731 36.9288 25.706L35.6075 27.0189L34.2863 25.706C33.0003 24.4282 31.2562 23.7104 29.4376 23.7104C27.619 23.7104 25.8749 24.4282 24.589 25.706C23.303 26.9838 22.5806 28.7168 22.5806 30.5239C22.5806 32.3309 23.303 34.064 24.589 35.3418L25.9102 36.6546L35.6075 46.2904L45.3049 36.6546L46.6261 35.3418C47.263 34.7092 47.7683 33.9581 48.113 33.1314C48.4577 32.3048 48.6352 31.4187 48.6352 30.5239C48.6352 29.6291 48.4577 28.743 48.113 27.9163C47.7683 27.0897 47.263 26.3386 46.6261 25.706Z"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default DashboardTotalFavoriteIcon;
