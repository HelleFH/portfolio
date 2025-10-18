import { ButtonHTMLAttributes } from "react";

export interface ShowLoginButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  fontColor?: string;
  showIcon?: boolean;
}