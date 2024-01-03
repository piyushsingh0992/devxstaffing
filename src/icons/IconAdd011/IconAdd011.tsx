/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  color: string;
  className: any;
}

export const IconAdd011 = ({ color = "white", className }: Props): JSX.Element => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10 3.33331V16.6666" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
      <path d="M3.33331 10H16.6666" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
    </svg>
  );
};
