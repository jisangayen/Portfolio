import { 
  Rocket, 
  Zap, 
  Code2, 
  ShieldCheck, 
  Layers, 
  Sparkles, 
  Cpu, 
  Globe, 
  Terminal, 
  Database, 
  CheckCircle2, 
  ArrowRight, 
  Clock 
} from "lucide-react";

export const stats = [
  { 
    label: "Production Deployments", 
    number: 10, 
    suffix: "+", 
    icon: Rocket, 
    desc: "Full-stack apps shipped live", 
    accent: "from-cyan-500 to-blue-500" 
  },
  { 
    label: "Hands-on Engineering", 
    number: 2, 
    suffix: "+ yrs", 
    icon: Zap, 
    desc: "Continuous full-stack growth", 
    accent: "from-amber-500 to-orange-500" 
  },
  { 
    label: "Core Tech Stacks", 
    number: 15, 
    suffix: "+", 
    icon: Code2, 
    desc: "Frontend, backend & DB tools", 
    accent: "from-emerald-500 to-teal-500" 
  },
  { 
    label: "Code & Architecture", 
    number: 100, 
    suffix: "%", 
    icon: ShieldCheck, 
    desc: "Scalable, clean & modular", 
    accent: "from-purple-500 to-pink-500" 
  },
];

export const pillars = [
  {
    icon: Zap,
    tag: "SPEED & OPTIMIZATION",
    title: "High Performance",
    desc: "Sub-second load times, lightweight client bundles, and silky 60fps spring animations built for seamless UX.",
    color: "from-amber-500/20 via-orange-500/10 to-transparent",
    iconBg: "bg-amber-500/10 dark:bg-amber-500/20",
    iconColor: "text-amber-500",
    borderGlow: "group-hover:border-amber-500/50"
  },
  {
    icon: Layers,
    tag: "CLEAN SYSTEM DESIGN",
    title: "Scalable Architecture",
    desc: "Decoupled MVC backend modules, bulletproof JWT authentication flows, and indexed MongoDB data structures.",
    color: "from-emerald-500/20 via-teal-500/10 to-transparent",
    iconBg: "bg-emerald-500/10 dark:bg-emerald-500/20",
    iconColor: "text-PrimaryColor dark:text-PrimaryColor2",
    borderGlow: "group-hover:border-emerald-500/50"
  },
  {
    icon: Sparkles,
    tag: "DESIGN AESTHETICS",
    title: "Pixel-Perfect Craft",
    desc: "Obsessive attention to UI hierarchy, tailored responsive layouts, and cohesive luxury glassmorphic details.",
    color: "from-cyan-500/20 via-blue-500/10 to-transparent",
    iconBg: "bg-cyan-500/10 dark:bg-cyan-500/20",
    iconColor: "text-cyan-500",
    borderGlow: "group-hover:border-cyan-500/50"
  }
];

export const skillsPills = [
  { name: "React 19", category: "Frontend", level: "98%" },
  { name: "Next.js", category: "Frontend", level: "92%" },
  { name: "Node.js", category: "Backend", level: "94%" },
  { name: "Express.js", category: "Backend", level: "95%" },
  { name: "MongoDB", category: "Database", level: "90%" },
  { name: "Tailwind CSS", category: "Styling", level: "99%" },
  { name: "JavaScript ES6+", category: "Language", level: "96%" },
  { name: "RESTful APIs", category: "Architecture", level: "95%" },
  { name: "Git & GitHub", category: "DevOps", level: "94%" },
];

export const workflowSteps = [
  { step: "01", title: "Concept & Scope", desc: "Understanding objectives, system requirements & UI wireframes" },
  { step: "02", title: "Architecture & Code", desc: "Developing scalable frontend modules & resilient backend APIs" },
  { step: "03", title: "Test & Optimize", desc: "Performance profiling, responsive QA & cross-browser audit" },
  { step: "04", title: "Deploy & Scale", desc: "Production cloud dispatch with continuous monitoring" },
];
