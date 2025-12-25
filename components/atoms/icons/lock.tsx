import React, { SVGProps } from "react";

function LockIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="19"
      height="21"
      viewBox="0 0 19 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      {...props}
    >
      <path
        d="M15.4 10.0832H2.8C1.80589 10.0832 1 10.889 1 11.8829V18.1817C1 19.1756 1.80589 19.9814 2.8 19.9814H15.4C16.3941 19.9814 17.2 19.1756 17.2 18.1817V11.8829C17.2 10.889 16.3941 10.0832 15.4 10.0832Z"
        stroke="#003049"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.60156 10.0833V6.48393C4.60156 5.29068 5.07567 4.1463 5.91958 3.30254C6.7635 2.45879 7.90809 1.98477 9.10156 1.98477C10.295 1.98477 11.4396 2.45879 12.2835 3.30254C13.1275 4.1463 13.6016 5.29068 13.6016 6.48393V10.0833"
        stroke="#003049"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default LockIcon;
