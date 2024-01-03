/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { IconShare081 } from "../../icons/IconShare081";
import "./style.css";

interface Props {
  prop: string;
  stateProp: "hover" | "normal";
  className: any;
  icon: JSX.Element;
}

export const BtnTerciary = ({
  prop = "Label",
  stateProp,
  className,
  icon = <IconShare081 className="icon-share" />,
}: Props): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, {
    state: stateProp || "normal",
  });

  return (
    <div
      className={`btn-terciary state-${state.state} ${className}`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
    >
      {icon}
      <div className="label">{prop}</div>
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

BtnTerciary.propTypes = {
  prop: PropTypes.string,
  stateProp: PropTypes.oneOf(["hover", "normal"]),
};
