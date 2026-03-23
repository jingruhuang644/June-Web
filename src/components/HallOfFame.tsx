import { motion } from "framer-motion";
import { Award, Mic2, Droplets, Star } from "lucide-react";

const achievements = [
  {
    title: "TEDx Speaker",
    event: "Huangpu Women 2025",
    desc: "Keynote on systemic gender inequality and women's role in public decision-making.",
    icon: Mic2
  },
  {
    title: "Water Ambassador",
    event: "MyH2O x Tencent",
    desc: "National Ambassador for rural water purification initiatives across 26 provinces.",
    icon: Droplets
  },
  {
    title: "New Star Award",
    event: "Fosun Prudential",
    desc: "Recognized for leadership in youth-led social innovation (1.28% acceptance rate).",
    icon: Star
  },
  {
    title: "WLP Scholar",
    event: "George Washington University",
    desc: "Top 10% of applicants selected for year-long leadership development program.",
    icon: Award
  },
  {
    title: "Epidemic Prevention Award",
    event: "Suzhou Province",
    desc: "Outstanding Volunteer Award for 130+ hours of service in epidemic prevention.",
    icon: ShieldCheck
  },
  {
    title: "Free Clinic Award",
    event: "Nanjing Province",
    desc: "Outstanding Volunteer Award for 168 hours of service in free clinic initiatives.",
    icon: Heart
  },
  {
    title: "Culture Art Dance Silver",
    event: "Kunshan Fourth Youth",
    desc: "Silver Award Winner in the Youth Culture Art Dance category.",
    icon: Music
  }
];

// Re-importing icons
import { ShieldCheck, Heart, Music } from "lucide-react";

export default function HallOfFame() {
  return (
    <section id="hall-of-fame" className="py-32 px-6 md:px-12 bg-paper border-t border-ink/5">
      <div className="mb-24">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-ink/40 mb-4 block">03 // Recognition</span>
        <h2 className="font-display text-6xl md:text-8xl font-bold uppercase tracking-tighter">Hall of <span className="text-bridge italic font-serif lowercase font-normal">Fame</span></h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-ink/10 border border-ink/10">
        {achievements.map((item, i) => (
          <motion.div 
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ 
              y: -10,
              transition: { duration: 0.3, ease: "easeOut" }
            }}
            className="bg-paper p-12 flex flex-col justify-between aspect-square group relative overflow-hidden transition-all duration-500"
          >
            {/* Red Accent Bar */}
            <div className="absolute top-0 left-0 w-full h-1 bg-bridge transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            
            <div className="flex justify-between items-start relative z-10">
              <motion.div 
                whileHover={{ rotate: 15, scale: 1.1 }}
                className="w-14 h-14 border border-ink/10 rounded-2xl flex items-center justify-center group-hover:border-bridge/20 group-hover:bg-bridge/5 group-hover:text-bridge transition-all duration-500"
              >
                <item.icon className="w-6 h-6" />
              </motion.div>
              <span className="font-mono text-[10px] opacity-20 group-hover:opacity-100 group-hover:text-bridge transition-all duration-500">0{i + 1}</span>
            </div>
            
            <div className="relative z-10">
              <h3 className="font-display text-2xl font-bold uppercase tracking-tighter mb-3 group-hover:text-ink transition-colors">
                {item.title}
              </h3>
              <p className="font-mono text-[10px] uppercase tracking-widest text-bridge mb-6 font-bold">{item.event}</p>
              <p className="font-sans text-xs leading-relaxed text-muted group-hover:text-ink/70 transition-colors">
                {item.desc}
              </p>
            </div>

            {/* Technical Background Detail */}
            <div className="absolute -bottom-4 -right-4 font-mono text-[40px] font-bold opacity-[0.02] group-hover:opacity-[0.05] transition-opacity pointer-events-none">
              {i + 1}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
