import { motion } from "framer-motion";
import { 
  Brain, 
  Code2, 
  Database, 
  Cloud, 
  Wrench, 
  Sparkles 
} from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code2,
    color: "from-primary to-primary/50",
    skills: ["Python", "C++", "C", "JavaScript"],
  },
  {
    title: "AI & Machine Learning",
    icon: Brain,
    color: "from-secondary to-secondary/50",
    skills: ["TensorFlow Basics", "SVMs", "ML Visualization", "Neural Networks"],
  },
  {
    title: "Web Technologies",
    icon: Sparkles,
    color: "from-cyber to-cyber/50",
    skills: ["React", "Node.js", "HTML/CSS", "Bootstrap", "REST APIs"],
  },
  {
    title: "Databases",
    icon: Database,
    color: "from-primary to-secondary",
    skills: ["MySQL", "MongoDB", "Data Modeling"],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    color: "from-secondary to-primary",
    skills: ["AWS", "Git", "Docker Basics", "Linux"],
  },
  {
    title: "Tools & Platforms",
    icon: Wrench,
    color: "from-primary to-cyber",
    skills: ["Figma", "VS Code", "Postman", "GitHub"],
  },
];

const specialInterests = [
  "Artificial Intelligence",
  "Computer Vision",
  "Embedded Systems",
  "Full-Stack Engineering",
];

export const Skills = () => {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 left-0 w-96 h-96 rounded-full bg-primary/10 blur-[150px] -translate-y-1/2" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="font-tech text-primary uppercase tracking-[0.3em] text-sm">
            Technical Arsenal
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4">
            <span className="gradient-text">Skills & Technologies</span>
          </h2>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group"
            >
              <div className="h-full glass-card rounded-xl p-6 cyber-border hover:glow-blue transition-all duration-500">
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${category.color}`}>
                    <category.icon className="w-6 h-6 text-foreground" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1.5 rounded-full text-sm font-tech bg-muted/50 text-muted-foreground hover:bg-primary/20 hover:text-primary transition-colors cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Special Interests */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="font-display text-2xl font-bold text-foreground mb-6">
            Core Focus Areas
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {specialInterests.map((interest, index) => (
              <motion.div
                key={interest}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="px-6 py-3 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30 font-tech text-foreground hover:border-primary hover:glow-blue transition-all duration-300"
              >
                {interest}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
