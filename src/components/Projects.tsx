import { motion } from "framer-motion";
import {
  Github,
  Cpu,
  Users,
  Lock,
  Brain,
  FileText,
  Sparkles,
  BarChart3,
  Database,
  Workflow,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "ResumeFit-AI",
    subtitle: "AI-Powered Resume & ATS Analyzer",
    description:
      "Analyzes resumes against job descriptions, generates ATS scores, detects skill gaps, and provides personalized recommendations using Gemini AI.",
    icon: FileText,
    tags: ["Next.js", "TypeScript", "Gemini AI", "PDF Parsing"],
    color: "from-primary to-secondary",
    featured: true,
  },

  

  {
    title: "AI Crop Disease Diagnosis",
    subtitle: "Computer Vision for Plant Health Monitoring",
    description:
      "AI-powered crop disease detection system that analyzes leaf images and identifies plant diseases using deep learning models.",
    icon: Brain,
    tags: ["Deep Learning", "Computer Vision", "TensorFlow", "CNN"],
    color: "from-primary to-cyber",
  },

  {
    title: "Peblo AI Notes Workspace",
    subtitle: "AI-Powered Productivity Platform",
    description:
      "Full-stack SaaS workspace featuring AI-generated insights, autosave architecture, analytics dashboards, public sharing, and modern note management.",
    icon: Sparkles,
    tags: ["Next.js", "Prisma", "PostgreSQL", "Gemini AI"],
    color: "from-primary to-cyber",
  },

  {
    title: "StackSave",
    subtitle: "AI Spend Audit Platform",
    description:
      "Production-grade platform that audits SaaS and AI subscription spending, identifies waste, and recommends optimization opportunities.",
    icon: BarChart3,
    tags: ["React", "TypeScript", "Analytics"],
    color: "from-secondary to-primary",
  },

  {
    title: "FlowDo",
    subtitle: "Modern Task Management Platform",
    description:
      "Full-stack task management application with authentication, protected routes, optimistic updates, and responsive dashboards.",
    icon: Database,
    tags: ["Next.js", "Strapi", "JWT", "Tailwind"],
    color: "from-secondary to-cyber",
  },

  {
    title: "AutoStream Agent",
    subtitle: "Social-to-Lead AI Workflow",
    description:
      "LangGraph-powered conversational AI agent combining RAG, lead qualification, tool execution, and workflow orchestration.",
    icon: Workflow,
    tags: ["LangGraph", "RAG", "LLM", "Automation"],
    color: "from-cyber to-secondary",
  },

  {
    title: "AI Resume Evaluator Agent",
    subtitle: "Autonomous Candidate Screening System",
    description:
      "AI workflow that evaluates resumes, scores candidates, and delivers recruiter-ready reports through automated communication channels.",
    icon: FileText,
    tags: ["AI Agents", "Automation", "Email", "Telegram"],
    color: "from-primary to-secondary",
  },

  {
    title: "MagicBrush Pro",
    subtitle: "Generative AI Image Editing",
    description:
      "Localized image editing system that performs instruction-based modifications while preserving the remaining image.",
    icon: Sparkles,
    tags: ["Generative AI", "Computer Vision", "Image Editing"],
    color: "from-cyber to-primary",
  },

  {
    title: "StudyHive",
    subtitle: "Collaborative Learning Platform",
    description:
      "Full-stack student collaboration platform supporting shared study spaces, resource uploads, authenticated access, and discussions.",
    icon: Users,
    tags: ["React", "Node.js", "MongoDB", "Full Stack"],
    color: "from-secondary to-cyber",
  },

  {
    title: "Digital OTP Lock (STM32)",
    subtitle: "Smart Embedded Security System",
    description:
      "OTP-based authentication system featuring ultrasonic sensing, Bluetooth communication, and secure access control.",
    icon: Lock,
    tags: ["STM32", "IoT", "Embedded C"],
    color: "from-cyber to-primary",
  },

  {
    title: "FreeRTOS Recursive Mutex Demo",
    subtitle: "Embedded RTOS Synchronization",
    description:
      "Implemented recursive mutex synchronization on ESP32 to ensure safe shared-resource access in multitasking environments.",
    icon: Cpu,
    tags: ["RTOS", "ESP32", "Embedded C"],
    color: "from-primary to-cyber",
  },
];
