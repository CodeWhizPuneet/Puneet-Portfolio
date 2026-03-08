import { Project, Experience, Stat } from "@/types";
import { certifications } from "@/lib/certifications";

export const projects: Project[] = [
  {
    title: "Terminal Police",
    description:
      "A VS Code extension that plays an instant audio alert whenever terminal commands fail or errors appear. Features real-time error detection, custom sound support, smart debouncing, cross-platform compatibility, and Command Palette integration. Published on the VS Code Marketplace.",
    techStack: ["TypeScript", "VS Code API", "Node.js"],
    github: "https://github.com/CodeWhizPuneet/Terminal-Police",
    featured: true,
  },
  {
    title: "Portfolio Website",
    description:
      "A modern, animated developer portfolio built from scratch with Next.js. Features interactive particle fields, glass-morphism design, smooth scroll animations, cursor glow effects, and a dark theme with amber accents.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/CodeWhizPuneet/Puneet-Portfolio",
    live: "https://puneet-portfolio-lime.vercel.app",
    featured: true,
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
      "Building practical applications to strengthen programming fundamentals. Developed Terminal Police (a VS Code extension for real-time terminal error alerts), database systems, algorithmic solutions, and this portfolio while exploring full stack development.",
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
  /* AI/ML track — technologies actively being studied */
  aiml: [
    "Machine Learning (fundamentals)",
    "Neural Networks",
    "Google Gemini API",
    "Retrieval-Augmented Generation",
    "Prompt Engineering",
    "NumPy & Pandas",
  ],
};