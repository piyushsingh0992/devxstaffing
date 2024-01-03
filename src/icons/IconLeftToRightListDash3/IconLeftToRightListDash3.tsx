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

export const IconLeftToRightListDash3 = ({ color = "#8C51ED", className }: Props): JSX.Element => {
  return (
    <svg
      className={`icon-left-to-right-list-dash-3 ${className}`}
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path className="path" d="M7.5 4.16667L17.5 4.16667" stroke={color} strokeLinecap="round" strokeWidth="1.25" />
      <path className="path" d="M2.5 4.16667L4.16667 4.16667" stroke={color} strokeLinecap="round" strokeWidth="1.25" />
      <path className="path" d="M7.5 10L17.5 10" stroke={color} strokeLinecap="round" strokeWidth="1.25" />
      <path className="path" d="M2.5 10L4.16667 10" stroke={color} strokeLinecap="round" strokeWidth="1.25" />
      <path className="path" d="M7.5 15.8333L17.5 15.8333" stroke={color} strokeLinecap="round" strokeWidth="1.25" />
      <path className="path" d="M2.5 15.8333L4.16667 15.8333" stroke={color} strokeLinecap="round" strokeWidth="1.25" />
    </svg>
  );
};

IconLeftToRightListDash3.propTypes = {
  color: PropTypes.string,
};
