import { ReactNode } from "react";
import { ButtonProps } from "./button";
import { ButtonConfig } from "./buttonConfig";

export interface LayoutProps {
  heroTitle: string;
  heroSubtitle: string;
  heroIntro: string;
  buttons?: ButtonConfig[];
  showContactUsButton?: boolean;
  children: ReactNode;
}
