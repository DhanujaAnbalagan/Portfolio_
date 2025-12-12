import { motion } from "framer-motion";
import { Brain, Code, Rocket, Target } from "lucide-react";

const highlights = [
  { icon: Brain, label: "AI & ML Focus", color: "text-primary" },
  { icon: Code, label: "Full-Stack Dev", color: "text-secondary" },
  { icon: Rocket, label: "Cloud Engineering", color: "text-cyber" },
  { icon: Target, label: "Problem Solver", color: "text-primary" },
];

export const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="font-tech text-primary uppercase tracking-[0.3em] text-sm"
            >
              About Me
            </motion.span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-4">
              <span className="gradient-text">Driven by Innovation</span>
            </h2>
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: About Text */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p className="text-lg">
                  I am a <span className="text-foreground font-semibold">third-year Computer Science Engineering</span> student 
                  with a deep passion for building intelligent systems that solve real-world challenges.
                </p>
                <p>
                  My expertise spans <span className="text-primary">AI-powered applications</span>, 
                  <span className="text-secondary"> scalable full-stack development</span>, and 
                  embedded automation solutions. I thrive at the intersection of software engineering, 
                  data intelligence, and digital transformation.
                </p>
                <p>
                  Currently seeking <span className="text-foreground font-semibold">internship opportunities</span> in 
                  AI/ML, Software Development, and Cloud Engineering where I can continue to learn, 
                  innovate, and make meaningful contributions.
                </p>
              </div>

              {/* Highlight Stats */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                {highlights.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="flex items-center gap-3 p-3 rounded-lg glass-card"
                  >
                    <item.icon className={`w-5 h-5 ${item.color}`} />
                    <span className="font-tech text-sm text-foreground">{item.label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right: Visual Element */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="relative aspect-square max-w-md mx-auto">
                {/* Animated rings */}
                <motion.div
                  className="absolute inset-0 rounded-full border border-primary/30"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                  className="absolute inset-4 rounded-full border border-secondary/30"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                  className="absolute inset-8 rounded-full border border-primary/20"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                />
                
                {/* Center content */}
                <div className="absolute inset-12 rounded-full glass-card flex items-center justify-center glow-mixed">
                  <div className="text-center">
                    <Brain className="w-16 h-16 text-primary mx-auto mb-4" />
                    <span className="font-display text-xl font-bold gradient-text">AI Explorer</span>
                  </div>
                </div>

                {/* Floating dots */}
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 rounded-full bg-primary"
                    style={{
                      top: `${20 + Math.random() * 60}%`,
                      left: `${20 + Math.random() * 60}%`,
                    }}
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 2 + Math.random() * 2,
                      repeat: Infinity,
                      delay: i * 0.3,
                    }}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
