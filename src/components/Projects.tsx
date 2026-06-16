import { motion } from "framer-motion";
import { ExternalLink, Github, Cpu, Code, ShoppingCart, Users, Dumbbell, Lock, LineChart, Globe, Brain, Smartphone, FileText } from "lucide-react";
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

  
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-20 right-0 w-80 h-80 rounded-full bg-secondary/10 blur-[120px]" />
      <div className="absolute bottom-20 left-0 w-96 h-96 rounded-full bg-primary/10 blur-[150px]" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="font-tech text-primary uppercase tracking-[0.3em] text-sm">
            Featured Work
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4">
            <span className="gradient-text">Projects & Innovations</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A showcase of technical projects demonstrating expertise in AI, full-stack development, and embedded systems.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className={`group ${project.featured ? "md:col-span-2 lg:col-span-1" : ""}`}
            >
              <div className="h-full glass-card rounded-xl overflow-hidden hover:glow-blue transition-all duration-500">
                <div className={`h-2 bg-gradient-to-r ${project.color}`} />

                <div className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className={`p-3 rounded-lg bg-gradient-to-br ${project.color} shrink-0`}
                    >
                      <project.icon className="w-6 h-6 text-foreground" />
                    </motion.div>

                    <div>
                      <h3 className="font-display text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="font-tech text-sm text-primary">{project.subtitle}</p>
                    </div>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-2 py-1 text-xs font-tech rounded-md bg-muted/50 text-muted-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button
            asChild
            variant="outline"
            className="font-tech border-primary/50 hover:bg-primary/10 hover:border-primary"
          >
            <a href="https://github.com/DhanujaAnbalagan" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              View All on GitHub
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}; 
