import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const rotate = useTransform(scrollY, [0, 500], [0, 45]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.65, 0.05, 0, 1] } },
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 pt-24 overflow-hidden">
      {/* Floating Background Elements */}
      <motion.div 
        style={{ y: y1, rotate }}
        className="absolute top-1/4 right-10 w-64 h-64 border border-bridge/10 rounded-full pointer-events-none"
      />
      <motion.div 
        style={{ y: y2, x: -50 }}
        className="absolute bottom-1/4 left-1/4 w-32 h-32 bg-bridge/5 blur-3xl rounded-full pointer-events-none"
      />

      <div className="absolute top-0 right-0 w-1/2 h-full border-l border-ink/5 pointer-events-none" />
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10"
      >
        <motion.div variants={itemVariants} className="flex items-center gap-4 mb-6">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted">Based in Washington, D.C.</span>
          <div className="h-[1px] w-12 bg-ink/20" />
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted">GWU '29</span>
        </motion.div>

        <motion.h1 variants={itemVariants} className="font-display text-[18vw] md:text-[14vw] leading-[0.85] font-bold uppercase tracking-tighter mb-8">
          Jingru <br />
          <span className="text-bridge italic font-serif capitalize font-normal">Huang</span>
        </motion.h1>

        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl">
          <p className="font-serif italic text-2xl md:text-3xl leading-tight text-ink/80">
            Building bridges between China and the world through the Political Economy of Development.
          </p>
          <div className="flex flex-col justify-end">
            <p className="font-mono text-xs uppercase tracking-widest text-muted mb-4">Core Focus</p>
            <div className="flex flex-wrap gap-2">
              {["Macroeconomics", "Industrial Policy", "Business Analytics", "Feminism"].map((tag) => (
                <span key={tag} className="px-3 py-1 border border-ink/10 rounded-full text-[10px] uppercase font-mono hover:bg-bridge hover:text-paper hover:border-bridge transition-colors cursor-default">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <span className="font-mono text-[9px] uppercase tracking-widest vertical-rl rotate-180">Scroll to Explore</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-[1px] h-75 bg-ink/20" 
        />
      </motion.div>
    </section>
  );
}
