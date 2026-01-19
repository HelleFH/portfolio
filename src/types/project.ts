export interface Project {
  projectDetails: string[];
  adminUsername: string | undefined;
  adminPassword: string | undefined;
  id: number;
  name: string;
  technologies?: string[];
  images: {
    400: string;
    800: string;
    1200: string;
    1600: string;
  }[];
  projectLink: string;
  githubLink: string;
  buttonText: string;
  slug?: string;
  githubButtonText: string;
  descriptionHeader?: string;
    descriptionTagline?: string;

  description?: string;
  username?: string;
  password?: string;
  technologiesMore?: string[] | string;

 

}
