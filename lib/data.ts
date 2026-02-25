import { Project, Experience, Stat } from "@/types";
import { certifications } from "@/lib/certifications";

export const projects: Project[] = [
  {
    title: "Project Nexus — AI Voice Assistant",
    description:
      "A voice-controlled personal assistant built with Python. Features speech recognition, text-to-speech synthesis, Google Gemini API integration, wake-word detection, and intelligent command handling for seamless hands-free interaction.",
    techStack: ["Python", "Speech Recognition", "Google Gemini API", "TTS", "AI Integration"],
    github: "https://github.com/CodeWhizPuneet/project-nexus",
    featured: true,
  },
  {
    title: "Portfolio Website",
    description:
      "A modern, animated developer portfolio built from scratch with Next.js. Features interactive particle fields, glass-morphism design, smooth scroll animations, cursor glow effects, and a dark theme with amber accents.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/CodeWhizPuneet/portfolio",
    featured: true,
  },
  {
    title: "Matrix Chain Multiplication",
    description:
      "Dynamic Programming implementation to find the optimal parenthesization of matrix chain multiplication, minimizing total scalar multiplications. Includes step-by-step DP table visualization.",
    techStack: ["Python", "Dynamic Programming", "Algorithms"],
    github: "https://github.com/CodeWhizPuneet/mcm-project",
  },
  {
    title: "Student Database System",
    description:
      "A relational database system for academic data management with proper schema design, normalization up to 3NF, and optimized SQL queries supporting full CRUD operations.",
    techStack: ["MySQL", "SQL", "DBMS", "Schema Design"],
    github: "https://github.com/CodeWhizPuneet/db-project",
  },
];

export const experience: Experience[] = [
  {
    role: "B.E. Computer Science (AI & ML)",
    company: "Apex Institute of Technology, Mohali",
    period: "2024 — 2028",
    description:
      "Pursuing Bachelor of Engineering in Computer Science specializing in AI & Machine Learning. Building strong foundations in data structures, algorithms, OOP, and DBMS through coursework and hands-on project development.",
    techStack: ["DSA", "OOP", "DBMS", "Python", "C++", "Java"],
  },
  {
    role: "Project Development",
    company: "Self-Directed",
    period: "2024 — Present",
    description:
      "Building practical applications to strengthen programming fundamentals. Developed Project Nexus (voice-based AI assistant with Gemini API), database systems, algorithmic solutions, and this portfolio while exploring full stack development.",
    techStack: ["Python", "JavaScript", "Next.js", "Node.js", "SQL"],
  },
];

export const stats: Stat[] = [
  { value: "6", label: "Languages Learned", suffix: "+" },
  { value: String(projects.length), label: "Projects Built", suffix: "+" },
  { value: String(certifications.length), label: "Certifications", suffix: "" },
  { value: "1", label: "Year of Growth", suffix: "+" },
];

export const skills = {
  languages: ["C", "C++", "Python", "Java", "JavaScript", "SQL"],
  core: [
    "Data Structures",
    "Algorithms",
    "Object-Oriented Programming",
    "DBMS",
    "Problem Solving",
    "Analytical Thinking",
  ],
  tools: [
    "Git & GitHub",
    "VS Code",
    "Next.js",
    "Node.js",
    "MongoDB",
    "MySQL",
  ],
};