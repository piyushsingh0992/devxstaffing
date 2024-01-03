/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const IconLeftToRightListDash = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`icon-left-to-right-list-dash ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path className="path" d="M9 5L21 5" stroke="#8C8EA5" strokeLinecap="round" strokeWidth="1.5" />
      <path className="path" d="M3 5L5 5" stroke="#8C8EA5" strokeLinecap="round" strokeWidth="1.5" />
      <path className="path" d="M9 12L21 12" stroke="#8C8EA5" strokeLinecap="round" strokeWidth="1.5" />
      <path className="path" d="M3 12L5 12" stroke="#8C8EA5" strokeLinecap="round" strokeWidth="1.5" />
      <path className="path" d="M9 19L21 19" stroke="#8C8EA5" strokeLinecap="round" strokeWidth="1.5" />
      <path className="path" d="M3 19L5 19" stroke="#8C8EA5" strokeLinecap="round" strokeWidth="1.5" />
    </svg>
  );
};
