/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import MyImage from '../../images/image-84-1@2x.png';
interface Props {
  className: any;
}

export const Logo = ({ className }: Props): JSX.Element => {
  return (
    <div
      className={`flex w-[30px] h-[30px] items-center justify-center gap-[7px] p-[3.5px] relative rounded-[3.5px] border-[0.88px] border-solid border-base-border-border-primary [background:linear-gradient(180deg,rgb(255,255,255)_0%,rgb(237.31,237.31,237.31)_100%)] ${className}`}
    >
      <div className="absolute w-[28px] h-[24px] top-[3px] left-0 bg-white rounded-[1.75px] opacity-40" />
   
       <img
        className="relative w-[30px] h-[16px] ml-[-4.50px] mr-[-2.75px]"
        alt="logo"
        src={MyImage}
      />





    </div>
  );
};
