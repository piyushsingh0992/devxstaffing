/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { useReducer } from "react";
import { IconShare082 } from "../../icons/IconShare082";

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
  icon = <IconShare082 className="!relative !w-[20px] !h-[20px] !mt-[-4.00px] !mb-[-4.00px]" />,
}: Props): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, {
    state: stateProp || "normal",
  });

  return (
    <div
      className={`inline-flex items-center gap-[8px] p-[8px] h-[28px] rounded-[8px] justify-center relative ${
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
      <div className="font-paragraph-regular-small w-fit mt-[-5.00px] tracking-[var(--paragraph-regular-small-letter-spacing)] text-[length:var(--paragraph-regular-small-font-size)] [font-style:var(--paragraph-regular-small-font-style)] text-base-content-medium-emphasis font-[number:var(--paragraph-regular-small-font-weight)] leading-[var(--paragraph-regular-small-line-height)] whitespace-nowrap mb-[-3.00px] relative">
        {prop}
      </div>
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
