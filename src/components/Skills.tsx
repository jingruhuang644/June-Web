import { motion } from "framer-motion";
import { CheckCircle2, Languages, Calendar, MessageSquare, Monitor, ShieldCheck } from "lucide-react";

const skills = [
  {
    category: "Communication",
    items: [
      { name: "Cross-Cultural Collaboration", icon: MessageSquare, desc: "Engaging and collaborating across diverse global cultures." },
      { name: "Public Speaking", icon: Mic2, desc: "Delivered speeches at high-profile events (TEDx, Global Issue Forum)." },
      { name: "Event Management", icon: Calendar, desc: "Spearheaded planning and execution of 15+ large-scale events." }
    ]
  },
  {
    category: "Languages & Tools",
    items: [
      { name: "Languages", icon: Languages, desc: "Chinese (Native), English (Fluent), British Sign Language (Beginner)." },
      { name: "Digital Proficiency", icon: Monitor, desc: "Google Workspace, Microsoft Office Suite, and digital tools." },
      { name: "Certifications", icon: ShieldCheck, desc: "American Red Cross First Aid Certified." }
    ]
  }
];

// Re-importing Mic2 since it's used in the items
import { Mic2 } from "lucide-react";

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6 md:px-12 bg-ink text-paper relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-paper/40 mb-4 block">05 // Capabilities</span>
          <h2 className="font-display text-6xl md:text-8xl font-bold uppercase tracking-tighter">Skill <span className="text-bridge italic font-serif lowercase font-normal">Matrix</span></h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          {skills.map((group, i) => (
            <div key={i}>
              <h3 className="font-mono text-[10px] uppercase tracking-widest text-bridge mb-12 font-bold">{group.category}</h3>
              <div className="space-y-12">
                {group.items.map((skill, j) => (
                  <motion.div
                    key={j}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (i + j) * 0.1 }}
                    className="flex gap-8 group"
                  >
                    <div className="flex-shrink-0 w-12 h-12 border border-paper/10 rounded-xl flex items-center justify-center group-hover:border-bridge/40 group-hover:bg-bridge/5 transition-all duration-500">
                      <skill.icon className="w-5 h-5 text-paper/40 group-hover:text-bridge transition-colors" />
                    </div>
                    <div>
                      <h4 className="font-display text-xl font-bold uppercase tracking-tighter mb-2 group-hover:text-bridge transition-colors">{skill.name}</h4>
                      <p className="font-sans text-xs text-paper/60 leading-relaxed max-w-sm">{skill.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Technical Detail Overlay */}
        <div className="absolute -bottom-24 -right-24 font-display text-[30vw] font-bold opacity-[0.01] pointer-events-none select-none">
          SKILLS
        </div>
      </div>
    </section>
  );
}
