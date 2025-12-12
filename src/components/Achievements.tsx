import { motion } from "framer-motion";
import { Award, Trophy, Medal, Star, Zap, Target } from "lucide-react";

const certifications = [
  { title: "AWS Cloud Practitioner", issuer: "Amazon Web Services", icon: Award },
  { title: "Career Skills in Data Analytics", issuer: "TCS iON", icon: Star },
  { title: "Generative AI Buildathon", issuer: "Nxtwave CCBP", icon: Zap },
  { title: "UI/UX App Redesign Workshop", issuer: "NextWave", icon: Target },
  { title: "Responsive Web Design", issuer: "Bootstrap & Flexbox", icon: Medal },
  { title: "Mobile App Development + Python", issuer: "MindLuster", icon: Award },
];

const achievements = [
  {
    title: "Flipkart Grid 7.0 Finalist",
    description: "National-level e-commerce technology competition",
    icon: Trophy,
    color: "text-yellow-400",
    glow: "shadow-[0_0_20px_rgba(250,204,21,0.4)]",
  },
  {
    title: "Adobe India Hackathon",
    description: "Qualified till Round 3",
    icon: Medal,
    color: "text-primary",
    glow: "shadow-[0_0_20px_rgba(14,165,233,0.4)]",
  },
];

export const Achievements = () => {
  return (
    <section id="achievements" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute top-1/2 right-0 w-80 h-80 rounded-full bg-secondary/15 blur-[120px] -translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="font-tech text-primary uppercase tracking-[0.3em] text-sm">
            Recognition
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4">
            <span className="gradient-text">Achievements & Certifications</span>
          </h2>
        </motion.div>

        {/* Featured Achievements */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, x: index === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className={`glass-card rounded-xl p-8 cyber-border ${achievement.glow} transition-all duration-500`}
            >
              <div className="flex items-center gap-6">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className={`p-4 rounded-full bg-muted/50 ${achievement.color}`}
                >
                  <achievement.icon className="w-10 h-10" />
                </motion.div>
                <div>
                  <h3 className="font-display text-xl font-bold text-foreground">
                    {achievement.title}
                  </h3>
                  <p className="font-tech text-muted-foreground mt-1">
                    {achievement.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h3 className="font-display text-2xl font-bold text-center text-foreground mb-8">
            Professional Certifications
          </h3>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group"
            >
              <div className="glass-card rounded-lg p-4 flex items-center gap-4 hover:glow-blue transition-all duration-300">
                <div className="p-2 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 group-hover:from-primary/30 group-hover:to-secondary/30 transition-colors">
                  <cert.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="min-w-0">
                  <h4 className="font-tech text-sm font-semibold text-foreground truncate">
                    {cert.title}
                  </h4>
                  <p className="font-tech text-xs text-muted-foreground truncate">
                    {cert.issuer}
                  </p>
                </div>
              </div>
            </motion.div>
            
          ))}
        </div>
      </div>
    </section>
  );
};
