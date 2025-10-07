export interface Project {
  id: string; 
  type: string;
  name: string;
  descriptionHeader: string;
  images: string[];
  technologies?: string;
  projectLink?: string;
  githubLink?: string;
  buttonText?: string;
  githubButtonText?: string;
  username?: string;
  password?: string;
  adminUsername?: string;
  adminPassword?: string;
}