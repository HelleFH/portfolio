import { ReactNode } from "react";
import { ButtonProps } from "./button";

export interface LayoutProps {
  heroTitle: string;
  heroSubtitle: string;
  heroIntro: string;
  buttons?: ButtonProps[];
  showContactUsButton?: boolean;
  children: ReactNode;
}
