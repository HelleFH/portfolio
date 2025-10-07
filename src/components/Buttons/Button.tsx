import React, { ButtonHTMLAttributes } from "react";
import "./Button.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  bgColor?: string;   // optional custom background color
  fontColor?: string; // optional custom font color
}

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
