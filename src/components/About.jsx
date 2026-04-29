import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const timeline = [
  { year: '2023', title: 'Started Game Development', desc: 'Began learning engines like Godot and Unreal Engine , and programming languages such as C++ & GDScript through personal projects and online courses.' },
  { year: '2024', title: 'Expanded Skillset', desc: 'Learned Unity, C#, began building 2D games with Unity engine.' },
  { year: '2024', title: 'Making Prototype', desc: 'Build Prototype FPS games with Unreal engine, and Prototype game with Godot engine.' },
  { year: '2025', title: 'First Game Jam', desc: 'Participated in Global Game jam 2025 and shipped a complete game in 48 hours.' },
  { year: '2025', title: 'Lot of Game Jam & Competition', desc: 'Participated in many game jam and shipped some games. Joining game development community.' },
  { year: '2026', title: 'Hard work on Game Development', desc: 'Keep focus on Game Development and improve more and more. Try to make unique games.' },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="text-accent text-sm font-medium uppercase tracking-widest">Background</span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mt-3 mb-4">About & CV</h2>
          <p className="text-body text-lg max-w-2xl mx-auto">My journey into game development — from hobbyist to enthusiast.</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start" id="cv">
          {/* Left: About text */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h3 className="font-display text-2xl font-bold text-white mb-6">The Developer's Journey</h3>
            <div className="space-y-4 text-body leading-relaxed">
              <p>
                I fell in love with games at a young age, and that passion naturally evolved into wanting to
                <span className="text-white"> create</span> them. What started as tinkering with game engines became a deep commitment to mastering the craft of interactive entertainment.
              </p>
              <p>
                My focus lies in <span className="text-white">gameplay programming</span> and <span className="text-white">systems design</span> — building the core mechanics that make games feel satisfying and responsive. I believe great gameplay emerges from well-architected systems.
              </p>
              <p>
                Beyond code, I'm passionate about <span className="text-white">game jams</span>, contributing to open-source projects, and mentoring aspiring developers. I'm always looking for the next challenge that pushes my creative and technical boundaries.
              </p>
            </div>

            {/* CV Download */}
            <motion.a
        href="/assets/CV_YUDHISTIRA MAULAN SAMARATUNGGA.pdf (1).pdf"
              download
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 mt-8 px-8 py-4 rounded-full bg-accent text-black font-semibold text-sm hover:shadow-[0_0_30px_rgba(250,204,21,0.3)] transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
              Download Full CV (PDF)
            </motion.a>
          </motion.div>

          {/* Right: Timeline */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
            <h3 className="font-display text-2xl font-bold text-white mb-6">Timeline</h3>
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-accent/50 via-white/10 to-transparent" />

              <div className="space-y-8">
                {timeline.map((item, i) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="relative pl-12"
                  >
                    {/* Dot */}
                    <div className="absolute left-2.5 top-1.5 w-3 h-3 rounded-full bg-dark border-2 border-accent" />

                    <div className="bg-dark-card border border-dark-border rounded-xl p-5 hover:border-white/10 transition-all duration-300">
                      <span className="text-xs font-medium text-accent uppercase tracking-widest">{item.year}</span>
                      <h4 className="text-white font-semibold mt-1 mb-2">{item.title}</h4>
                      <p className="text-sm text-body">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
