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

export const SKILLS = ["Javascript/Typescript", "Java", "Python", "C/C++", "LaTex", "SQL"];

export const TOOLS = ["React", "Next.js", "Pandas", "Figma", "Git", "NumPy", "scikit-learn", "matplotlib", "Docker"];

export const PROJECTS: Project[] = [
  {
    name: "Predicting COVID-19 Risk",
    description: "random forests and logistical regression",
    link: "https://github.com/exkcd/csci-4622-final-project",
    id: "p1",
  },
  {
    name: "Othello",
    description: "othello/reversi in Java using OOP principles",
    link: "https://github.com/exkcd/csci-4448-final-project",
    id: "p2",
  },
  {
    name: "Mancala",
    description: "utilizing basic AI algorithms to play Mancala",
    link: "/mancala-vs-ai",
    id: "p3",
  },
];

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: "Zonit Structured Solutions",
    title: "Quality Assurance Engineer",
    start: "04/2024",
    end: "12/2024",
    link: "https://www.zonit.com/",
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

export const NAME = "Rey Stone";
export const EMAIL = "reyhstone@gmail.com";
export const ROLE = "Software Engineer";
