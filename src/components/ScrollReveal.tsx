import { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  id?: string;
  className?: string;
}

export default function ScrollReveal({ children, delay = 0, id, className = "" }: ScrollRevealProps) {
  const shouldReduceMotion = useReducedMotion();

  // If system requests reduced motion, deliver layout statically with no transform or fade delay
  if (shouldReduceMotion) {
    return (
      <div id={id} className={className}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-12% 0px -12% 0px" }}
      transition={{
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1], // premium custom cubic ease-out
        delay: delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
