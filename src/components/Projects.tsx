import { motion } from "framer-motion";
import { ExternalLink, Github, Cpu, Code, ShoppingCart, Users, Dumbbell, Lock, LineChart, Globe, Brain, Smartphone, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Interactive Attendance Management System",
    subtitle: "Face Recognition + Automated Logging",
    description:
      "Smart system that automates attendance tracking using face recognition, real-time logging and a secure admin dashboard.",
    icon: Users,
    tags: ["C","Automation"],
    color: "from-primary to-secondary",
    featured: true,
  },
  {
    title: "Restaurant Digital Menu",
    subtitle: "Smart Digital Ordering System",
    description:
      "A modern restaurant menu interface with category filtering, item descriptions, and responsive UI for seamless customer ordering.",
    icon: ShoppingCart,
    tags: ["HTML", "CSS", "JavaScript"],
    color: "from-secondary to-cyber",
  },
  {
    title: "AuraGlow",
    subtitle: "Skincare Product Discovery Platform",
    description:
      "A clean and aesthetic beauty-tech website enabling users to browse skincare products, view ingredients, and explore categories.",
    icon: Globe,
    tags: ["HTML", "CSS", "JavaScript"],
    color: "from-secondary to-primary",
  },
  {
    title: "FreeRTOS Recursive Mutex Demo",
    subtitle: "Embedded RTOS Synchronization",
    description:
      "Implemented recursive mutex logic on ESP32 to ensure safe shared resource access in multi-threaded embedded environments.",
    icon: Cpu,
    tags: ["RTOS", "ESP32", "Embedded C"],
    color: "from-primary to-primary/50",
  },
  {
    title: "Patient UI Mobile App",
    subtitle: "Healthcare Interface Prototype",
    description:
      "Designed a patient-friendly mobile UI with appointment scheduling, health record display, and smooth navigation.",
    icon: Smartphone,
    tags: ["UI/UX", "Figma", "Mobile Design"],
    color: "from-cyber to-primary",
  },
  {
    title: "SVM Visualizer",
    subtitle: "Interactive ML Decision Boundary Tool",
    description:
      "Visual tool that demonstrates Support Vector Machine classification with real-time parameter tuning and hyperplane visualization.",
    icon: LineChart,
    tags: ["Machine Learning", "Python", "Visualization"],
    color: "from-primary to-secondary",
  },
  {
    title: "Rabin-Karp Pattern Matcher",
    subtitle: "Efficient String Searching",
    description:
      "Optimized implementation of the Rabin-Karp algorithm for fast substring matching using rolling hash techniques.",
    icon: Code,
    tags: ["Algorithms", "C++", "Pattern Matching"],
    color: "from-cyber to-secondary",
  },
  {
    title: "Digital OTP Lock (STM32)",
    subtitle: "Smart Embedded Security System",
    description:
      "OTP-based authentication system with ultrasonic sensor detection, keypad input, Bluetooth OTP transfer, and secure lockout logic.",
    icon: Lock,
    tags: ["Embedded C", "IoT", "STM32"],
    color: "from-cyber to-primary",
  },
  {
    title: "BodyQuest Discover",
    subtitle: "Gamified Fitness Experience",
    description:
      "A responsive fitness discovery website combining UI aesthetics with user engagement elements and product-style exploration.",
    icon: Dumbbell,
    tags: ["JavaScript", "Frontend", "Autism kids"],
    color: "from-primary to-cyber",
  },
  {
    title: "StudyHive",
    subtitle: "Collaborative Learning Platform",
    description:
      "Full-stack student collaboration app enabling shared study spaces, resource uploads, authenticated access and peer discussions.",
    icon: Users,
    tags: ["Full-Stack", "React", "Node.js"],
    color: "from-secondary to-cyber",
  },
  {
    title: "Portfolio Website",
    subtitle: "Professional Personal Brand",
    description:
      "Your official developer portfolio built using React + Tailwind + Framer Motion, featuring animations and modern UI design.",
    icon: Globe,
    tags: ["React", "TypeScript", "Tailwind"],
    color: "from-secondary to-primary",
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
