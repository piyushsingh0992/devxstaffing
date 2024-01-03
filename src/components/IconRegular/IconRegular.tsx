/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { IconMoreVertical2 } from "../../icons/IconMoreVertical2";
import "./style.css";

interface Props {
  stateProp: "hover" | "normal";
  size: "regular" | "small";
  className: any;
  icon: JSX.Element;
}

export const IconRegular = ({
  stateProp,
  size,
  className,
  icon = <IconMoreVertical2 className="icon-more-vertical" />,
}: Props): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, {
    state: stateProp || "normal",
    size: size || "regular",
  });

  return (
    <div
      className={`icon-regular ${state.state} ${className}`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
    >
      {icon}
    </div>
  );
};

function reducer(state: any, action: any) {
  switch (action) {
    case "mouse_enter":
      return {
        ...state,
        state: "hover",
      };

    case "mouse_leave":
      return {
        ...state,
        state: "normal",
      };
  }

  return state;
}

IconRegular.propTypes = {
  stateProp: PropTypes.oneOf(["hover", "normal"]),
  size: PropTypes.oneOf(["regular", "small"]),
};
