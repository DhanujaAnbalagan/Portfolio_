import { motion } from "framer-motion";
import { Rocket, Lightbulb, Zap, Brain, Car } from "lucide-react";

const hackathons = [
  {
    title: "SBI Life Hack-AI-Thon",
    project: "Quantum-Driven Smart Traffic Management",
    description: "Innovative AI solution for intelligent traffic optimization",
    icon: Car,
    color: "from-primary to-secondary",
  },
  {
    title: "DevX / WebX Hackathon",
    project: "Modern Web Innovations",
    description: "Cutting-edge web application development",
    icon: Rocket,
    color: "from-secondary to-cyber",
  },
  {
    title: "NariYukthi TechHack",
    project: "SRM University",
    description: "Technology solutions for social impact",
    icon: Lightbulb,
    color: "from-cyber to-primary",
  },
  {
    title: "Adobe India Hackathon ",
    project: "Resolve futuristic tech into Adobe solutions",
    description: "Creative applications leveraging Adobe technologies",
    icon: Brain,
    color: "from-primary to-cyber",
  },
  {
    title: "Aptive Mobility",
    project: "AI Traffic + Multi-Path Cost Optimization",
    description: "Smart mobility solutions using artificial intelligence",
    icon: Brain,
    color: "from-primary to-cyber",
  }
];

const internships = [
  {
    company: "Avijio",
    role: "Software Intern",
    duration: "May 2025 – July 2025",
    description: "Contributing to digital healthcare workflows and intelligent system development.",
    current: true,
  },
  {
    company: "TeachNook IIT Roorkee",
    role: "Artificial Intelligence Internship",
    duration: "Completed",
    description: "Hands-on experience with AI/ML concepts and practical implementations.",
  },
  {
    company: "AWS Cloud Practitioner",
    role: "Cloud Engineering Internship",
    duration: "Completed",
    description: "Cloud infrastructure and services training with Amazon Web Services.",
  },
  {
    company: "NPTEL",
    role: "Knowledge Representation & IoT",
    duration: "Completed",
    description: "Advanced coursework in AI reasoning and Internet of Things technologies.",
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute bottom-0 left-1/2 w-[800px] h-[400px] rounded-full bg-gradient-to-t from-primary/10 to-secondary/10 blur-[150px] -translate-x-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="font-tech text-primary uppercase tracking-[0.3em] text-sm">
            Journey
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4">
            <span className="gradient-text">Hackathons & Experience</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Hackathons */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="font-display text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
              <Zap className="w-6 h-6 text-primary" />
              Hackathon Experience
            </h3>

            <div className="space-y-4">
              {hackathons.map((hackathon, index) => (
                <motion.div
                  key={hackathon.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                  className="group"
                >
                  <div className="glass-card rounded-xl p-5 flex items-start gap-4 hover:glow-blue transition-all duration-300">
                    <div className={`p-3 rounded-lg bg-gradient-to-br ${hackathon.color} shrink-0`}>
                      <hackathon.icon className="w-5 h-5 text-foreground" />
                    </div>
                    <div>
                      <h4 className="font-display text-base font-bold text-foreground group-hover:text-primary transition-colors">
                        {hackathon.title}
                      </h4>
                      <p className="font-tech text-sm text-primary mt-1">
                        {hackathon.project}
                      </p>
                      <p className="text-sm text-muted-foreground mt-2">
                        {hackathon.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Internships */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="font-display text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
              <Rocket className="w-6 h-6 text-secondary" />
              Professional Experience
            </h3>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-3 top-6 bottom-6 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary/20" />

              <div className="space-y-6">
                {internships.map((internship, index) => (
                  <motion.div
                    key={internship.company}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative pl-10"
                  >
                    {/* Timeline dot */}
                    <div className={`absolute left-0 top-2 w-6 h-6 rounded-full ${internship.current ? 'bg-primary animate-pulse' : 'bg-muted'} border-4 border-background flex items-center justify-center`}>
                      {internship.current && (
                        <span className="w-2 h-2 rounded-full bg-foreground" />
                      )}
                    </div>

                    <div className={`glass-card rounded-xl p-5 ${internship.current ? 'glow-blue cyber-border' : ''}`}>
                      <div className="flex items-start justify-between gap-4 flex-wrap">
                        <div>
                          <h4 className="font-display text-base font-bold text-foreground">
                            {internship.company}
                          </h4>
                          <p className="font-tech text-sm text-primary">
                            {internship.role}
                          </p>
                        </div>
                        <span className={`font-tech text-xs px-3 py-1 rounded-full ${internship.current ? 'bg-primary/20 text-primary' : 'bg-muted text-muted-foreground'}`}>
                          {internship.duration}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-3">
                        {internship.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
