/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

interface Props {
  color: string;
  className: any;
}

export const IconLeftToRightBlockQuote1 = ({ color = "#8C8EA5", className }: Props): JSX.Element => {
  return (
    <svg
      className={`icon-left-to-right-block-quote-1 ${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path className="path" d="M6 4L11.3333 4" stroke={color} strokeLinecap="round" />
      <path className="path" d="M6 8L12.6667 8" stroke={color} strokeLinecap="round" />
      <path className="path" d="M6 12L11.3333 12" stroke={color} strokeLinecap="round" />
      <path className="path" d="M3.33333 2L3.33333 14" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

IconLeftToRightBlockQuote1.propTypes = {
  color: PropTypes.string,
};
