import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

const creativeMoments = [
  {
    title: "Afro & Hip-Hop",
    category: "Dance",
    desc: "Leader of Afro and Hip-hop dance clubs across UWC campuses. First non-Afro-Caribbean leader in team history.",
    img: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&q=80&w=1000"
  },
  {
    title: "The Great Debate",
    category: "Advocacy",
    desc: "Organized forums on democratic institutions in China and the Global South, challenging conventional narratives.",
    img: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=1000"
  },
  {
    title: "Rural Revitalization",
    category: "Fieldwork",
    desc: "Field research in rural Qinghai, conducting interviews on literacy campaigns and minority student access.",
    img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1000"
  },
  {
    title: "DJing & Sonic Arts",
    category: "Creative",
    desc: "Exploring the intersection of technology and rhythm through digital storytelling and live performance.",
    img: "https://images.unsplash.com/photo-1571266028243-3716f02d2d2e?auto=format&fit=crop&q=80&w=1000"
  }
];

export default function HorizontalScroll() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const xRaw = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);
  const x = useSpring(xRaw, { stiffness: 50, damping: 20 });

  return (
    <section ref={targetRef} id="off-track" className="relative h-[300vh] bg-paper" style={{ position: 'relative' }}>
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <div className="absolute top-12 left-12 z-10">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-ink/40 mb-4 block">02 // Creative Life</span>
          <h2 className="font-display text-6xl md:text-8xl font-bold uppercase tracking-tighter">Off <span className="text-bridge italic font-serif lowercase font-normal">Track</span></h2>
        </div>

        <motion.div style={{ x }} className="flex gap-12 px-12 pt-24">
          {creativeMoments.map((moment, i) => (
            <CreativeCard key={i} moment={moment} index={i} scrollYProgress={scrollYProgress} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

interface CreativeCardProps {
  moment: any;
  index: number;
  scrollYProgress: any;
  key?: number;
}

function CreativeCard({ moment, index, scrollYProgress }: CreativeCardProps) {
  // Parallax scaling for images
  const start = index * 0.2;
  const end = (index + 1) * 0.2;
  const scale = useTransform(scrollYProgress, [start, end], [1.2, 1]);
  const springScale = useSpring(scale, { stiffness: 100, damping: 30 });

  return (
    <div className="relative w-[80vw] md:w-[500px] h-[65vh] flex-shrink-0 group overflow-hidden rounded-3xl bg-ink/5">
      <motion.img 
        style={{ scale: springScale }}
        src={moment.img} 
        alt={moment.title}
        className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/30 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-700" />
      
      <div className="absolute bottom-0 left-0 w-full p-10">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <span className="font-mono text-[10px] uppercase tracking-widest text-bridge mb-3 block font-bold">{moment.category}</span>
          <h3 className="font-display text-4xl font-bold uppercase tracking-tighter text-paper mb-6 group-hover:text-bridge transition-colors duration-500">{moment.title}</h3>
          <p className="font-sans text-sm text-paper/70 leading-relaxed max-w-sm opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-700">
            {moment.desc}
          </p>
        </motion.div>
      </div>

      {/* Technical Detail Overlay */}
      <div className="absolute top-6 right-6 font-mono text-[8px] uppercase tracking-widest text-paper/20 group-hover:text-bridge/40 transition-colors">
        REF_ID: 00{index + 1} // 2026
      </div>
    </div>
  );
}
