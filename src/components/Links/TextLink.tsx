import React from "react";
import { Link } from "react-router-dom";

interface TextLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to?: string; // For internal routes
  href?: string; // For external URLs
  openInNewTab?: boolean;
  children: React.ReactNode;
}

const TextLink: React.FC<TextLinkProps> = ({
  to,
  href,
  openInNewTab = false,
  className,
  children,
  ...props
}) => {
    
  const baseClasses = `
    inline relative top-[1px] ml-2 
    text-cyan-600 hover:underline 
    whitespace-break-spaces
  `;
  const combinedClass = `${baseClasses} ${className || ""}`;

  // Internal link (React Router)
  if (to) {
    return (
      <Link
        to={to}
        target={openInNewTab ? "_blank" : undefined}
        rel={openInNewTab ? "noopener noreferrer" : undefined}
        className={combinedClass}
        {...props}
      >
        {children}
      </Link>
    );
  }

  // External link
  if (href) {
    return (
      <a
        href={href}
        target={openInNewTab ? "_blank" : undefined}
        rel={openInNewTab ? "noopener noreferrer" : undefined}
        className={combinedClass}
        {...props}
      >
        {children}
      </a>
    );
  }

  return null; 
};

export default TextLink;
