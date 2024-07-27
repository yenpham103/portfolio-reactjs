import trelloClone from "../assets/projects/trello-clone.jpg";
import geminiClone from "../assets/projects/gemini-clone.jpg";
import portfolio from "../assets/projects/portfolio.jpg";
import liveDocs from "../assets/projects/liveDocs.jpg";

export const HERO_CONTENT = `Là một người có tư duy logic tốt và khả năng sáng tạo, tôi mong muốn trở thành một trong những lập trình viên chủ chốt của công ty để mang đến những giải pháp công nghệ tối ưu cho khách hàng. Đồng thời, tôi muốn nâng cao trình độ chuyên môn và năng lực nghề nghiệp của mình. Năng động, nhiệt tình, trung thực, cẩn thận. Phân tích, đánh giá, giải quyết vấn đề, tìm giải pháp, ra quyết định, làm việc nhóm, giao tiếp tốt`;

export const ABOUT_TEXT = `Chăm chỉ -  Trung thực - Chịu khó học hỏi - Tư duy logic - Cầu tiến trong công việc `;

export const EXPERIENCES = [
  {
    year: "3/2023 - 8/2023",
    role: "Intern Frontend Developer",
    company: "Aneed joint stock company ",
    description: `Frontend development Intern`,
    technologies: ["Javascript", "TypeScript", "Redux", "React.js", "Next.js"],
  },
  {
    year: "8/2023 - now",
    role: "Frontend Developer",
    company: "",
    description: `Freelancer`,
    technologies: [
      "HTML",
      "CSS",
      "Javascript",
      "TypeScript",
      "Reactjs",
      "NextJs",
    ],
  },
];

export const PROJECTS = [
  {
    title: "Trello Clone",
    image: trelloClone,
    url: "https://trello-web-pink.vercel.app",
    description:
      "This is a personal project on the Trello web platform with features like drag and drop, add, edit and delete tasks. Combine with BE to combine API for website",
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
  {
    title: "LiveDocs",
    image: liveDocs,
    url: "https://live-docs-dev.vercel.app",
    description:
      "Cut and complete the website interface according to Figma design, Real-time processing with liveblocks",
    technologies: ["Tailwind CSS", "TypeScript", "Nextjs"],
  },
];

export const CONTACT = {
  address: "Khương Hạ, Thanh Xuân, Hà Nội ",
  phoneNo: "0982276861",
  email: "phamyen100301@gmail.com",
};
