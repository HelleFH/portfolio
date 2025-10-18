import { ButtonHTMLAttributes } from "react";

export interface ReadMoreLinkProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  fontColor?: string;
  showIcon?: boolean;
}
