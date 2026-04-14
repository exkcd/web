type Project = {
  name: string;
  description: string;
  link: string;
  id: string;
};

type WorkExperience = {
  company: string;
  title: string;
  start: string;
  end: string;
  link: string;
  id: string;
};

type SocialLink = {
  label: string;
  link: string;
};

type Education = {
  name: string;
  degree: string;
  start: string;
  end: string;
  courses: Array<string>;
  gpa: string;
  id: string;
};

export const SKILLS = [
  "Javascript/Typescript",
  "Java",
  "Python",
  "C/C++",
  "LaTex",
  "SQL",
];

export const TOOLS = [
  "React",
  "Next.js",
  "Pandas",
  "Figma",
  "Git",
  "NumPy",
  "scikit-learn",
  "matplotlib",
  "Docker",
];

export const PROJECTS: Project[] = [
  {
    name: "Predicting COVID-19 Risk",
    description: "Random forests and logistical regression",
    link: "https://github.com/exkcd/csci-4622-final-project",
    id: "p1",
  },
  {
    name: "Othello",
    description: "Othello/Reversi using OOP design principles",
    link: "https://github.com/exkcd/csci-4448-final-project",
    id: "p2",
  },
];

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: "Zonit Structured Solutions",
    title: "Quality Assurance Engineer",
    start: "04/2024",
    end: "12/2024",
    link: "https://www.linkedin.com/company/zonitsolutions/posts/?feedView=all",
    id: "w1",
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: "PDF",
    link: "/docs/resume.pdf",
  },
  {
    label: "Github",
    link: "https://github.com/exkcd",
  },
  {
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/reyhstone",
  },
];

export const EDUCATION: Education[] = [
  {
    name: "University of Colorado Boulder",
    degree: "B.A in Computer Science, Minor in Philosophy",
    start: "08/2023",
    end: "12/2025",
    courses: [
      "Object Oriented Analysis and Design",
      "Machine Learning",
      "Algorithms",
      "Principles of Programming Languages",
    ],
    gpa: "3.8",
    id: "ed1",
  },
];

export const NAME = "Rey Stone";
export const EMAIL = "reyhstone@gmail.com";
export const ROLE = "Software Engineer";
