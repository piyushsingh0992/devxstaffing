/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const IconInbox = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.08331 10C2.08331 6.26806 2.08331 4.40208 3.24268 3.24271C4.40205 2.08334 6.26803 2.08334 9.99998 2.08334C13.7319 2.08334 15.5979 2.08334 16.7573 3.24271C17.9166 4.40208 17.9166 6.26806 17.9166 10C17.9166 13.732 17.9166 15.5979 16.7573 16.7573C15.5979 17.9167 13.7319 17.9167 9.99998 17.9167C6.26803 17.9167 4.40205 17.9167 3.24268 16.7573C2.08331 15.5979 2.08331 13.732 2.08331 10Z"
        stroke="#8C8EA5"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.25"
      />
      <path
        d="M17.9166 11.25H13.8119C13.1102 11.25 12.5588 11.8363 12.2495 12.456C11.9135 13.1293 11.2407 13.75 9.99998 13.75C8.75925 13.75 8.08642 13.1293 7.75043 12.456C7.44116 11.8363 6.88979 11.25 6.18803 11.25H2.08331"
        stroke="#8C8EA5"
        strokeLinejoin="round"
        strokeWidth="1.25"
      />
    </svg>
  );
};
