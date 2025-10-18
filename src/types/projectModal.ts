import { Project } from "./project";

export interface ProjectModalProps {
  show: boolean;
  handleClose: () => void;
  selectedProjectIndex: number | null;
  projects: Project[];
  handlePrev: () => void;
  handleNext: () => void;
}
