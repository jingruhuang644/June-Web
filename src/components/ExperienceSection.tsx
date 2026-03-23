import { motion } from "framer-motion";

const experiences = [
  {
    type: "Startup",
    org: "Eastbound+",
    title: "Founder",
    desc: "Cross-border marketplace connecting international students with Chinese outbound enterprises via a 3-layer system.",
    year: "2025"
  },
  {
    type: "Advocacy",
    org: "Period Poverty & Human Right Advocacy NGOs",
    title: "Co-founder & Leader",
    desc: "Raised £2,100+ for period poverty and inequality campaigns. Coordinated partnerships with 10+ international NGOs. Collaborated with Welsh Government Period Dignity officials.",
    year: "2021-Present"
  },
  {
    type: "Policy",
    org: "China Development Student Think Tank",
    title: "Vice President",
    desc: "Leading strategic roadmap for policy research on China's development model and global economic transformation.",
    year: "2025"
  },
  {
    type: "Charity",
    org: "Hallo World Project",
    title: "Education and Psychology Department Leader",
    desc: "Designed and taught sex education curriculum to 15+ rural kids. Researched adaptive elderly care and designed water purification mechanisms.",
    year: "2022-2023"
  },
  {
    type: "Research",
    org: "Chinese Affairs Forum",
    title: "Student Researcher",
    desc: "Analyzing structural education policies and resource allocation affecting educational inequality in China.",
    year: "2025"
  }
];

export default function ExperienceSection() {
  return (
    <section id="on-track" className="relative py-32 px-6 md:px-12 bg-ink text-paper overflow-hidden">
      {/* Background Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-[0.02] select-none">
        <h2 className="font-display text-[40vw] font-bold uppercase tracking-tighter leading-none">
          Track
        </h2>
      </div>

      <div className="relative z-10 flex justify-between items-end mb-24">
        <div>
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-paper/40 mb-4 block">01 // Professional</span>
          <h2 className="font-display text-6xl md:text-8xl font-bold uppercase tracking-tighter">On <span className="text-bridge italic font-serif lowercase font-normal">Track</span></h2>
        </div>
        <div className="hidden md:block text-right max-w-xs">
          <p className="font-mono text-[10px] uppercase leading-relaxed text-paper/60">
            Authoritative research, macroeconomic analysis, and 0-to-1 entrepreneurial initiatives.
          </p>
        </div>
      </div>

      <div className="relative z-10 border-t border-paper/10">
        {experiences.map((exp, i) => (
          <motion.div 
            key={exp.org}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: i * 0.15, duration: 0.8, ease: [0.65, 0.05, 0, 1] }}
            whileHover={{ backgroundColor: "rgba(199, 4, 4, 0.05)" }}
            className="grid grid-cols-1 md:grid-cols-[150px_1fr_300px] py-16 border-b border-paper/10 group cursor-pointer transition-all duration-500 relative"
          >
            {/* Hover Glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-bridge to-transparent" />
              <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-bridge to-transparent" />
            </div>

            <div className="mb-4 md:mb-0">
              <span className="font-mono text-[10px] uppercase tracking-widest text-bridge font-bold">{exp.type}</span>
            </div>
            <div className="mb-6 md:mb-0 pr-12">
              <h3 className="font-display text-3xl md:text-5xl font-bold uppercase tracking-tighter group-hover:translate-x-6 transition-transform duration-700 ease-out">
                {exp.org}
              </h3>
              <p className="font-serif italic text-xl text-paper/60 mt-4 group-hover:text-paper transition-colors">{exp.title}</p>
            </div>
            <div className="flex flex-col justify-between">
              <p className="font-sans text-sm leading-relaxed text-paper/80 mb-8 group-hover:text-paper transition-colors">
                {exp.desc}
              </p>
              <div className="flex justify-between items-center font-mono text-[10px] uppercase tracking-widest">
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-bridge animate-pulse" />
                  Status: Active
                </span>
                <span className="opacity-40 group-hover:opacity-100 transition-opacity">{exp.year}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
