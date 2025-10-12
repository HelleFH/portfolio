export interface Project {
  adminUsername: string | undefined;
  adminPassword: string | undefined;
  id: number;
  name: string;
  type?: string; // ✅ make this optional (or required if you want)
  technologies: string[];
  images: {
    400: string;
    800: string;
    1200: string;
    1600: string;
  }[];
  projectLink: string;
  githubLink: string;
  buttonText: string;
  githubButtonText: string;
  descriptionHeader?: string;
  description?: string;
  username?: string;
  password?: string;
  technologiesMore?: string[] | string;
}
