import trelloClone from "../assets/projects/trello-clone.jpg";
import geminiClone from "../assets/projects/gemini-clone.jpg";
import portfolio from "../assets/projects/portfolio.jpg";

export const HERO_CONTENT = `As a person with good logical thinking and creative ability, I hope to become one of the company's key programmers to bring optimal technology solutions to customers. At the same time, I want to improve my professional qualifications and career capacity. Active, enthusiastic, honest, careful. Analyze, evaluate, solve problems, find solutions, make decisions, work in groups, communicate well`;

export const ABOUT_TEXT = `As a person with good logical thinking and creative ability, I hope to become one of the company's key programmers to bring optimal technology solutions to customers. At the same time, I want to improve my professional qualifications and career capacity
. Active, enthusiastic, honest, careful
. Analyze, evaluate, solve problems, find solutions, make decisions, work in groups, communicate well`;

export const EXPERIENCES = [
  {
    year: "2024 - Present",
    role: "Student",
    company: "Studying at F8 Center",
    description: `Studying fullstack at F8.`,
    technologies: ["Javascript", "TypeScript", "React.js", "Next.js"],
  },
  {
    year: "2023 - 2024",
    role: "Intern Frontend Developer",
    company: "F88",
    description: `Web development internship`,
    technologies: ["HTML", "CSS", "Javascript", "React"],
  },
];

export const PROJECTS = [
  {
    title: "Trello Clone",
    image: trelloClone,
    url: "https://trello-web-pink.vercel.app",
    description:
      "This is a personal project on the Trello web platform with features like drag and drop, add, edit and delete tasks.",
    technologies: ["Material UI", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Gemini Clone",
    image: geminiClone,
    url: "https://gemini-clone-jas.vercel.app",
    description: "This is a project based on the idea of Chat Gemini",
    technologies: ["HTML", "CSS", "React", "Gemini-1.5-flash"],
  },
  {
    title: "Portfolio Website",
    image: portfolio,
    url: "https://yenpham-portfolio.vercel.app",
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["Tailwind CSS", "React"],
  },
];

export const CONTACT = {
  address: "Khương Hạ, Thanh Xuân, Hà Nội ",
  phoneNo: "0982276861",
  email: "phamyen100301@gmail.com",
};
