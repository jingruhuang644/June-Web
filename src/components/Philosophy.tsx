import { motion } from "framer-motion";

const philosophyQuotes = [
  {
    text: "To uphold the law first, but also with the warmth of humanity.",
    context: "Interview with a court official, 2021",
    highlight: "warmth of humanity"
  },
  {
    text: "Explore how power shapes order in the struggle of values and find the sublime within the chaos of humanity.",
    context: "Core Research Thesis",
    highlight: "sublime within the chaos"
  },
  {
    text: "The perfect system does not exist; how to change the system is what fascinates me.",
    context: "George Washington University Writing Supplement",
    highlight: "change the system"
  }
];

export default function Philosophy() {
  return (
    <section className="py-32 px-6 md:px-12 bg-paper relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-ink/40 mb-4 block">04 // Intellectual Foundation</span>
          <h2 className="font-display text-6xl md:text-8xl font-bold uppercase tracking-tighter">Core <span className="text-bridge italic font-serif lowercase font-normal">Philosophy</span></h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {philosophyQuotes.map((quote, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              className="relative p-12 border border-ink/5 bg-ink/[0.02] flex flex-col justify-between group hover:bg-ink/[0.04] transition-colors"
            >
              <div className="absolute top-0 left-0 w-1 h-0 bg-bridge group-hover:h-full transition-all duration-700" />
              
              <div className="mb-12">
                <span className="font-mono text-[8px] uppercase tracking-widest text-ink/20 mb-8 block">THOUGHT_NODE_{i + 1}</span>
                <p className="font-serif text-2xl md:text-3xl leading-tight text-ink/90">
                  {quote.text.split(quote.highlight).map((part, index, array) => (
                    <span key={index}>
                      {part}
                      {index < array.length - 1 && (
                        <span className="text-bridge italic">{quote.highlight}</span>
                      )}
                    </span>
                  ))}
                </p>
              </div>

              <div>
                <p className="font-mono text-[10px] uppercase tracking-widest text-muted">{quote.context}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-24 p-12 border-t border-ink/5 flex flex-col md:flex-row justify-between items-center gap-8"
        >
          <div className="max-w-2xl">
            <h3 className="font-display text-2xl font-bold uppercase tracking-tighter mb-4">The Quest for Justice</h3>
            <p className="font-sans text-sm text-muted leading-relaxed">
              "This is no longer a philosophical question but a question of how. How do we fight for justice within the parameters of law? How do we take on entrenched issues in systems that are resistant to change? Ultimately, real change comes from our capacity to act with clarity, to endure with purpose, and to evolve with each trial we undergo."
            </p>
          </div>
          <div className="flex-shrink-0">
            <div className="w-24 h-24 border border-bridge/20 rounded-full flex items-center justify-center relative">
              <div className="absolute inset-0 border border-bridge/10 rounded-full animate-ping" />
              <span className="font-mono text-[10px] uppercase tracking-widest text-bridge font-bold">Active</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
