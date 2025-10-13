import Images from '../assets/images.tsx';

export const frontendProjects = [
  {
    id: 1,
    name: "Cloudporteurope.com",
    technologies: ["React"],
    images: [Images.CloudPortScreen],
    projectLink: "https://cloudporteurope.com",
    githubLink: "https://github.com/HelleFH/sentispec",
    buttonText: "View Project",
    githubButtonText: "GitHub",
    descriptionHeader: "A Company Website",
    description: "This is a React-based static website for a company.",
    technologiesMore: ["React", "Google integration", "Bassin integration"]
  },
  {
    id: 2,
    name: "Sentispec.ai",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    images: [Images.SentispecScreen],
    projectLink: "https://sentispec-dzzp.onrender.com/",
    githubLink: "https://github.com/HelleFH/sentispec",
    buttonText: "View Project",
    githubButtonText: "GitHub",
    descriptionHeader: "A Company Website",
    description: "This is a React-based static website for a company.",
    technologiesMore: ["React", "HubSpot APIs", "YouTube integration", "Outlook integration"]
  },
  {
    id: 3,
    name: "React Store",
    technologies: ["Firebase", "React"],
    images: [Images.ClothesStoreScreen],
    projectLink: "https://react-clothes-store.onrender.com/",
    githubLink: "https://github.com/HelleFH/react-clothes-store",
    buttonText: "View Project",
    githubButtonText: "GitHub",
    descriptionHeader: "Full-Stack E-Commerce App with Firebase Backend and Admin Panel",
    description: "A full-stack e-commerce application built with React and Firebase. It includes user authentication, real-time Firestore database integration, and a secure admin panel for managing products. Users can register, log in, edit their profiles, and browse the product catalog. Admins have full CRUD access for store inventory.",
    technologiesMore: ["Vite", "Formik", "Moment", "Yup", "Redux", "Enzyme"],
    username: "duser7707@gmail.com",
    password: "Demopassword123",
    adminUsername: "dmndmuser@gmail.com",
    adminPassword: "Demopassword123",
    projectDetails: [
      "Admin panel with full CRUD operations (products, inventory)",
      "Firebase authentication with email/password and provider support",
      "Real-time Firestore database integration",
      "Form validation using Formik and Yup",
      "Global state management with Redux",
      "Responsive design"
    ]
  },
  {
    id: 4,
    name: "Native Plant Calendar",
    technologies: ["React Native", "Node.js", "Express", "MongoDB"],
    images: [Images.MobileCalendarScreen],
    projectLink: "https://calendarappnative-1.onrender.com",
    githubLink: "https://github.com/HelleFH/PlantCalendarAppNative",
    buttonText: "View Project",
    githubButtonText: "GitHub",
    descriptionHeader: "Mobile Plant Calendar & Reminder App with React Native",
    description: "Mobile version of the Plant Calendar app. Designed for users to manage plant care directly from their phones — including reminders, photo logging, and progress tracking.",
    adminUsername: "Hellefruergaard@plantcalendar.com",
    adminPassword: "fruergaard",
    technologiesMore: [
      "React Native",
      "Expo",
      "MongoDB",
      "Express",
      "Node.js",
      "Cloudinary",
      "Moment.js"
    ],
    projectDetails: [
      "Cross-platform mobile app with React Native and Expo",
      "User authentication and persistent login using AsyncStorage",
      "Add plants with photos, names, notes, and acquisition dates",
      "Set recurring care reminders with calendar integration",
      "Log plant updates with notes and image uploads (via Cloudinary)",
      "View and filter plant history by date or plant name",
      "Backend powered by Express and MongoDB with RESTful APIs",
      "File upload support using Multer and Cloudinary for images",
      "Clean and intuitive UI with mobile-first user experience"
    ]
  }
];
