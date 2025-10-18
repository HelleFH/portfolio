import React, { ButtonHTMLAttributes } from "react";
import { FaSignInAlt } from "react-icons/fa";
import { ShowLoginButtonProps } from "../../types/showLoginButton";



const ShowLoginButton: React.FC<ShowLoginButtonProps> = ({
  label = "Show Login Details",
  fontColor = "rgba(var(--cyan))",
  className,
  style,
  showIcon = true,
  ...props
}) => {
  return (
    <button
      className={`
        flex items-center gap-2 
        hover:underline transition-colors duration-200
        font-[cup-cakes] tracking-[-0.1rem]
        ${className || ""}
      `}
      style={{
        color: fontColor,
        ...style,
      }}
      {...props}
    >
      {showIcon && <FaSignInAlt size={14} />}
      <span className="whitespace-nowrap">{label}</span>
    </button>
  );
};

export default ShowLoginButton;
