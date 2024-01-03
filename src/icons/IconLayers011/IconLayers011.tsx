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

export const IconLayers011 = ({ color = "#8C8EA5", className }: Props): JSX.Element => {
  return (
    <svg
      className={`icon-layers-01-1 ${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M5.76199 2.09704L4.62544 2.62239C2.87515 3.43144 2 3.83596 2 4.49998C2 5.164 2.87515 5.56852 4.62544 6.37757L5.76199 6.90292C6.86349 7.41207 7.41425 7.66665 8 7.66665C8.58575 7.66665 9.13651 7.41207 10.238 6.90292L11.3746 6.37757C13.1249 5.56852 14 5.164 14 4.49998C14 3.83596 13.1249 3.43144 11.3746 2.62239L10.238 2.09704C9.13651 1.58789 8.58575 1.33331 8 1.33331C7.41425 1.33331 6.86349 1.58789 5.76199 2.09704Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className="path"
        d="M13.8587 7.39813C13.9529 7.53064 14 7.66874 14 7.82061C14 8.47518 13.1249 8.87394 11.3746 9.67146L10.238 10.1893C9.13651 10.6912 8.58575 10.9422 8 10.9422C7.41425 10.9422 6.86349 10.6912 5.76199 10.1893L4.62544 9.67147C2.87515 8.87394 2 8.47518 2 7.82061C2 7.66874 2.04711 7.53064 2.14133 7.39813"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className="path"
        d="M13.5844 10.8441C13.8615 11.0647 14 11.2846 14 11.5451C14 12.1996 13.1249 12.5984 11.3746 13.3959L10.238 13.9138C9.13651 14.4157 8.58575 14.6666 8 14.6666C7.41425 14.6666 6.86349 14.4157 5.76199 13.9138L4.62544 13.3959C2.87515 12.5984 2 12.1996 2 11.5451C2 11.2846 2.13852 11.0647 2.41556 10.8441"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

IconLayers011.propTypes = {
  color: PropTypes.string,
};
