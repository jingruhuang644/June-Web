import { motion } from "framer-motion";

export default function Marquee() {
  const logos = [
    "GWU", "UWC Atlantic", "TEDx", "Tencent", "Amnesty International", "MyH2O", "Eastbound+", "CDSTT"
  ];

  return (
    <div className="py-16 border-y border-ink/5 overflow-hidden mask-fade bg-paper relative group">
      <motion.div 
        animate={{ x: [0, -1000] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="flex gap-24 items-center whitespace-nowrap"
      >
        {[...logos, ...logos, ...logos].map((logo, i) => (
          <span key={i} className="font-display text-5xl md:text-7xl font-bold uppercase tracking-tighter text-ink/5 group-hover:text-bridge/20 transition-colors duration-700 cursor-default select-none">
            {logo}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
