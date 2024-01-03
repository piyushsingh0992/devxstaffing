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

export const IconSetting052 = ({ color = "#8C8EA5", className }: Props): JSX.Element => {
  return (
    <svg
      className={`icon-setting-05-2 ${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M1.66667 8.00002C1.66667 5.01446 1.66667 3.52168 2.59416 2.59418C3.52166 1.66669 5.01444 1.66669 8 1.66669C10.9856 1.66669 12.4783 1.66669 13.4058 2.59418C14.3333 3.52168 14.3333 5.01446 14.3333 8.00002C14.3333 10.9856 14.3333 12.4784 13.4058 13.4059C12.4783 14.3334 10.9856 14.3334 8 14.3334C5.01444 14.3334 3.52166 14.3334 2.59416 13.4059C1.66667 12.4784 1.66667 10.9856 1.66667 8.00002Z"
        stroke={color}
        strokeLinejoin="round"
      />
      <path
        className="path"
        d="M5.66667 6.66669C5.11438 6.66669 4.66667 6.21897 4.66667 5.66669C4.66667 5.1144 5.11438 4.66669 5.66667 4.66669C6.21895 4.66669 6.66667 5.1144 6.66667 5.66669C6.66667 6.21897 6.21895 6.66669 5.66667 6.66669Z"
        stroke={color}
      />
      <path
        className="path"
        d="M10.3333 11.3333C10.8856 11.3333 11.3333 10.8856 11.3333 10.3333C11.3333 9.78103 10.8856 9.33331 10.3333 9.33331C9.78105 9.33331 9.33333 9.78103 9.33333 10.3333C9.33333 10.8856 9.78105 11.3333 10.3333 11.3333Z"
        stroke={color}
      />
      <path className="path" d="M6.66667 5.66669L11.3333 5.66669" stroke={color} strokeLinecap="round" />
      <path className="path" d="M9.33333 10.3333L4.66667 10.3333" stroke={color} strokeLinecap="round" />
    </svg>
  );
};

IconSetting052.propTypes = {
  color: PropTypes.string,
};
