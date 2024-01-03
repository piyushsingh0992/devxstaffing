/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";
import MyImage from '../../images/image-84-1@2x.png';
interface Props {
  className: any;
}

export const Logo = ({ className }: Props): JSX.Element => {
  return (
    <div className={`logo ${className}`}>
      <div className="rectangle" />
      <img className="image" alt="Image"  src={MyImage} />
    </div>
  );
};
