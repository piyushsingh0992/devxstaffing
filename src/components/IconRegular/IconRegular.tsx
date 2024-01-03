/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { useReducer } from "react";
import { IconMoreVertical3 } from "../../icons/IconMoreVertical3";

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
  icon = <IconMoreVertical3 className="!relative !w-[20px] !h-[20px]" />,
}: Props): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, {
    state: stateProp || "normal",
    size: size || "regular",
  });

  return (
    <div
      className={`inline-flex items-center gap-[8px] p-[2px] rounded-[4px] justify-center relative ${
        state.state === "hover" ? "bg-primitives-midnight-midnight-100" : ""
      } ${className}`}
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
