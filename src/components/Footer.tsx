import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center gap-2 text-muted-foreground">
            <span className="font-tech text-sm">
              © {new Date().getFullYear()} Dhanuja A. Built with
            </span>
            <Heart className="w-4 h-4 text-primary fill-primary" />
            <span className="font-tech text-sm">and code.</span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="#"
              className="font-tech text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Back to Top
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
