import { motion } from "framer-motion";
import { Mail, Linkedin, Instagram, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-ink text-paper py-32 px-6 md:px-12 overflow-hidden relative">
      <motion.div 
        initial={{ opacity: 0, scale: 1.2 }}
        whileInView={{ opacity: 0.05, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute top-0 right-0 w-full h-full pointer-events-none"
      >
        <h2 className="font-display text-[30vw] font-bold uppercase tracking-tighter leading-none translate-x-1/4 translate-y-1/4">
          Huang
        </h2>
      </motion.div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-24">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-display text-6xl md:text-9xl font-bold uppercase tracking-tighter mb-12 leading-[0.9]">
            Let's build <br />
            <span className="text-bridge italic font-serif lowercase font-normal">the bridge</span>.
          </h2>
          
          <div className="flex flex-col gap-8">
            <motion.a 
              href="mailto:jingruhuang04@gmail.com" 
              whileHover={{ x: 10 }}
              className="group flex items-center gap-4 font-display text-2xl md:text-4xl uppercase tracking-tighter hover:text-bridge transition-all"
            >
              jingruhuang04@gmail.com
              <ArrowUpRight className="w-8 h-8 text-bridge group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
            </motion.a>
            <div className="flex gap-6 mt-8">
              {[Linkedin, Instagram].map((Icon, i) => (
                <motion.a 
                  key={i}
                  href="#" 
                  whileHover={{ scale: 1.1, backgroundColor: "var(--color-bridge)", borderColor: "transparent" }}
                  className="p-5 border border-paper/10 rounded-full transition-all"
                >
                  <Icon className="w-6 h-6" />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col justify-between items-end text-right"
        >
          <div className="max-w-xs">
            <p className="font-serif italic text-2xl text-paper/60 mb-12 leading-tight">
              "It doesn’t matter where you start, it’s how you progress from there."
            </p>
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] space-y-4 opacity-40">
              <p>Washington, D.C. // USA</p>
              <p>Suzhou // China</p>
              <p>Wales // UK</p>
            </div>
          </div>

          <div className="mt-32 flex flex-col items-end">
            <div className="h-[1px] w-24 bg-paper/10 mb-8" />
            <span className="font-mono text-[10px] uppercase tracking-[0.5em] opacity-20 mb-2">© 2026 Jingru Huang</span>
            <span className="font-mono text-[10px] uppercase tracking-[0.5em] opacity-20">All Rights Reserved</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
