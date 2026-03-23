import { motion, useScroll, useSpring } from "framer-motion";
import { Menu, X, Globe } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-bridge origin-left z-[60]"
        style={{ scaleX }}
      />
      <nav className="fixed top-0 left-0 w-full z-50 mix-blend-difference text-paper px-6 py-8 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-4 group cursor-pointer"
        >
          <motion.div 
            whileHover={{ rotate: 360, color: "var(--color-bridge)" }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="w-10 h-10 border border-paper/30 rounded-full flex items-center justify-center transition-colors group-hover:border-bridge/50"
          >
            <Globe className="w-5 h-5" />
          </motion.div>
          <span className="font-display font-bold tracking-tighter text-xl uppercase">JH.04</span>
        </motion.div>

        <div className="hidden md:flex gap-12 font-mono text-[10px] uppercase tracking-[0.2em]">
          <a href="#on-track" className="hover:text-bridge transition-colors">On Track</a>
          <a href="#off-track" className="hover:text-bridge transition-colors">Off Track</a>
          <a href="#skills" className="hover:text-bridge transition-colors">Skills</a>
          <a href="#personal-space" className="hover:text-bridge transition-colors">Personal Space</a>
          <a href="#hall-of-fame" className="hover:text-bridge transition-colors">Hall of Fame</a>
          <a href="#contact" className="hover:text-bridge transition-colors">Connect</a>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          {isOpen ? <X /> : <Menu />}
        </button>
      </nav>
    </>
  );
}
