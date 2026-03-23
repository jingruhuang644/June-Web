import { motion } from "framer-motion";

const items = [
  {
    title: "World Map",
    desc: "Where my friends from 5 continents are located.",
    x: "10%", y: "10%", w: "40%", h: "40%",
    img: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1000"
  },
  {
    title: "Drag Show Poster",
    desc: "Where I am a model.",
    x: "55%", y: "5%", w: "20%", h: "30%",
    img: "https://images.unsplash.com/photo-1514525253344-f814d074358a?auto=format&fit=crop&q=80&w=1000"
  },
  {
    title: "Chinese Calligraphy",
    desc: "Symbol of 'Health' (健康).",
    x: "80%", y: "15%", w: "15%", h: "40%",
    img: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?auto=format&fit=crop&q=80&w=1000"
  },
  {
    title: "Heart Mirror",
    desc: "A reflection of self-discovery.",
    x: "55%", y: "40%", w: "20%", h: "25%",
    img: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&q=80&w=1000"
  },
  {
    title: "Sweet Letters",
    desc: "Thank-you notes from TEDx and friends.",
    x: "10%", y: "55%", w: "30%", h: "35%",
    img: "https://images.unsplash.com/photo-1516414447565-b14be0adf13e?auto=format&fit=crop&q=80&w=1000"
  },
  {
    title: "Congo Bracelet",
    desc: "Traditional gift from a Kenyan mentor.",
    x: "80%", y: "60%", w: "15%", h: "15%",
    img: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=1000"
  }
];

export default function PersonalSpace() {
  return (
    <section id="personal-space" className="py-32 px-6 md:px-12 bg-paper relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-ink/40 mb-4 block">06 // Personal Space</span>
          <h2 className="font-display text-6xl md:text-8xl font-bold uppercase tracking-tighter">Bedside <span className="text-bridge italic font-serif lowercase font-normal">Cork Board</span></h2>
        </div>

        <div className="relative aspect-[16/9] bg-ink/5 rounded-3xl overflow-hidden border border-ink/10 shadow-2xl">
          {/* Cork Texture Overlay */}
          <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cork-board.png')]" />
          
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, type: "spring", stiffness: 100 }}
              whileHover={{ scale: 1.05, zIndex: 50 }}
              style={{ 
                position: 'absolute',
                top: item.y,
                left: item.x,
                width: item.w,
                height: item.h,
                rotate: (i % 2 === 0 ? 2 : -2) + "deg"
              }}
              className="group cursor-pointer"
            >
              <div className="relative w-full h-full bg-paper p-2 shadow-lg border border-ink/5 overflow-hidden">
                <img 
                  src={item.img} 
                  alt={item.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                
                {/* Annotation */}
                <div className="absolute inset-0 bg-ink/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center p-6 text-center">
                  <h4 className="font-display text-lg font-bold uppercase tracking-tighter text-bridge mb-2">{item.title}</h4>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-paper/70">{item.desc}</p>
                </div>

                {/* Pin Detail */}
                <div className="absolute top-1 left-1/2 -translate-x-1/2 w-3 h-3 bg-bridge rounded-full shadow-inner z-10" />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="font-serif italic text-xl text-ink/60">
            "A collection of fragments that define my journey across continents and cultures."
          </p>
        </div>
      </div>
    </section>
  );
}
