import { Project } from "./project";

export interface LoginModalProps {
  show: boolean;
  onHide: () => void;
  project: Project;
  backdropClassName?: string;
  dialogClassName?: string;
  handleCopyToClipboard?: (text: string) => void;
}