import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Download, Send, MapPin, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "dhanujaanbalagan5@gmail.com",
    href: "mailto:dhanujaanbalagan5@gmail.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "dhanujaanbalagan",
    href: "https://www.linkedin.com/in/dhanujaanbalagan",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "DhanujaAnbalagan",
    href: "https://github.com/DhanujaAnbalagan",
  },
];

export const Contact = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute top-0 left-1/2 w-[600px] h-[300px] rounded-full bg-gradient-to-b from-primary/20 to-transparent blur-[100px] -translate-x-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="font-tech text-primary uppercase tracking-[0.3em] text-sm">
            Get In Touch
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4">
            <span className="gradient-text">Let's Connect</span>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl p-8 md:p-12 cyber-border glow-mixed mb-12"
          >
            <div className="text-center">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="inline-block mb-6"
              >
                <Sparkles className="w-16 h-16 text-primary" />
              </motion.div>
              
              <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                Open to AI, Software, and Cloud Engineering Internships
              </h3>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                Let's build the future together. I'm eager to contribute my skills in AI, 
                full-stack development, and cloud engineering to meaningful projects.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="group bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground font-tech text-lg px-8 glow-blue"
                >
                  <a href="mailto:dhanujaanbalagan5@gmail.com">
                    <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    Send Message
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="font-tech text-lg px-8 border-primary/50 hover:bg-primary/10 hover:border-primary"
                >
                
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {contactInfo.map((contact, index) => (
              <motion.a
                key={contact.label}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group glass-card rounded-xl p-6 text-center hover:glow-blue transition-all duration-300"
              >
                <div className="p-3 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 inline-block mb-4 group-hover:from-primary/30 group-hover:to-secondary/30 transition-colors">
                  <contact.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-tech text-sm uppercase tracking-wider text-muted-foreground mb-2">
                  {contact.label}
                </h4>
                <p className="font-tech text-foreground group-hover:text-primary transition-colors">
                  {contact.value}
                </p>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
