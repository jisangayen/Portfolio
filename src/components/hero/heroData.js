import { Github, Instagram, Linkedin, FileCode, Sliders, Terminal } from "lucide-react";

export const socialLinks = [
  { Icon: Github, href: "https://github.com/jisangayen", label: "GitHub" },
  { Icon: Linkedin, href: "https://www.linkedin.com/in/jisangayen/", label: "LinkedIn" },
  { Icon: Instagram, href: "https://www.instagram.com/jisan__hoque/", label: "Instagram" },
];

export const roles = [
  "Full-Stack Engineer",
  "React Js Developer",
  "MERN Stack Specialist",
  "Scalable Systems Developer",
];

export const tabs = [
  { id: "config", label: "jisan.config.ts", icon: FileCode },
  { id: "skills", label: "skills.json", icon: Sliders },
  { id: "terminal", label: "terminal.sh", icon: Terminal },
];

export const backgroundGlyphs = [
  { text: "</>", x: "12%", y: "18%", delay: 0, size: "text-2xl" },
  { text: "{ ... }", x: "85%", y: "22%", delay: 1.5, size: "text-lg" },
  { text: "01001", x: "8%", y: "75%", delay: 2.2, size: "text-xs" },
  { text: "const fn = () =>", x: "82%", y: "80%", delay: 0.8, size: "text-xs" },
  { text: "async / await", x: "48%", y: "12%", delay: 3, size: "text-xs" },
];

export const skillProficiencies = [
  { skill: "React / Frontend", level: "96%", color: "bg-cyan-500" },
  { skill: "Node.js & Express", level: "92%", color: "bg-emerald-500" },
  { skill: "MongoDB & Database", level: "88%", color: "bg-green-500" },
  { skill: "Tailwind CSS & UI/UX", level: "98%", color: "bg-teal-500" },
];
