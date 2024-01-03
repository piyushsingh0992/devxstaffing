/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const IconContact01 = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`icon-contact-01 ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect className="rect" height="20" rx="4" stroke="#8C8EA5" strokeWidth="1.5" width="17.5" x="4" y="2" />
      <path
        className="path"
        d="M10.59 13.7408C9.96125 14.162 8.31261 15.0221 9.31674 16.0983C9.80725 16.624 10.3536 17 11.0404 17H14.9596C15.6464 17 16.1928 16.624 16.6833 16.0983C17.6874 15.0221 16.0388 14.162 15.41 13.7408C13.9355 12.7531 12.0645 12.7531 10.59 13.7408Z"
        stroke="#8C8EA5"
        strokeWidth="1.5"
      />
      <path
        className="path"
        d="M15 9C15 10.1046 14.1046 11 13 11C11.8954 11 11 10.1046 11 9C11 7.89543 11.8954 7 13 7C14.1046 7 15 7.89543 15 9Z"
        stroke="#8C8EA5"
        strokeWidth="1.5"
      />
      <path
        className="path"
        d="M5 6L2.5 6M5 12L2.5 12M5 18H2.5"
        stroke="#8C8EA5"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
};
