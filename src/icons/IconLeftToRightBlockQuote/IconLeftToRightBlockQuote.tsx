/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const IconLeftToRightBlockQuote = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M9 6L17 6" stroke="#8C8EA5" strokeLinecap="round" strokeWidth="1.5" />
      <path d="M9 12L19 12" stroke="#8C8EA5" strokeLinecap="round" strokeWidth="1.5" />
      <path d="M9 18L17 18" stroke="#8C8EA5" strokeLinecap="round" strokeWidth="1.5" />
      <path d="M5 3L5 21" stroke="#8C8EA5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
    </svg>
  );
};
