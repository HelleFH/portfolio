import React, { ButtonHTMLAttributes } from "react";
import "./Button.scss";
import { ButtonProps } from "../../types/button";



const Button: React.FC<ButtonProps> = ({
  children,
  className,
  bgColor,
  fontColor,
  style,
  ...props
}) => {
  return (
    <button
      className={`custom-button ${className || ""}`}
      style={{
        backgroundColor: bgColor,
        color: fontColor,
        ...style, 
      }}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
