import React, { ButtonHTMLAttributes } from "react";
import { FaArrowRight } from "react-icons/fa";
import { ReadMoreLinkProps } from "../../types/readMoreLink";



const ReadMoreLink: React.FC<ReadMoreLinkProps> = ({
  children = "Read More",
  className,
  fontColor = "rgba(var(--cyan))",
  style,
  showIcon = true,
  ...props
}) => {
  return (
    <button
      className={`
        flex items-center gap-2 
        text-[${fontColor}] 
        hover:underline transition-colors duration-200
        focus:outline-none
        ${className || ""}
      `}
      style={{
        color: fontColor,
        ...style,
      }}
      {...props}
    >
      {children}
      {showIcon && <FaArrowRight size={14} />}
    </button>
  );
};

export default ReadMoreLink;
