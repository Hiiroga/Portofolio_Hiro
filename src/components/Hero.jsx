import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Ambient bg */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-purple-500/5 rounded-full blur-[100px]" />
        <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage:'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',backgroundSize:'60px 60px'}} />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left */}
          <motion.div initial={{opacity:0,y:40}} animate={{opacity:1,y:0}} transition={{duration:0.8,ease:[0.22,1,0.36,1]}}>
            <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.2,duration:0.6}} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Available for work
            </motion.div>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.95] tracking-tight mb-6">
              <span className="text-white">Hi,</span><br/>
              <span className="text-white">I'm </span><span className="text-accent">Yudhis</span><span className="text-white">.</span>
            </h1>
            <p className="text-body text-lg lg:text-xl leading-relaxed max-w-lg mb-8">
              A passionate <span className="text-white font-medium">Game Development Enthusiast</span> specializing in gameplay programming, systems design, and interactive experiences.
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.a href="#contact" whileHover={{scale:1.03}} whileTap={{scale:0.97}} className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-white/20 text-white font-semibold text-sm hover:border-accent/50 hover:text-accent hover:shadow-[0_0_30px_rgba(250,204,21,0.1)] transition-all duration-300">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                Contact Me
              </motion.a>
            </div>
            <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.6,duration:0.8}} className="flex gap-8 mt-12 pt-8 border-t border-white/5">
              {[{value:'3+',label:'Games Shipped'},{value:'2+',label:'Years Exp.'},{value:'5+',label:'Game Jams'}].map(s=>(
                <div key={s.label}>
                  <div className="text-2xl lg:text-3xl font-display font-bold text-white">{s.value}</div>
                  <div className="text-xs text-muted mt-1 uppercase tracking-widest">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Photo + blob */}
          <motion.div initial={{opacity:0,scale:0.9}} animate={{opacity:1,scale:1}} transition={{delay:0.3,duration:0.8}} className="relative flex items-center justify-center">
            <div className="absolute w-80 h-80 lg:w-[420px] lg:h-[420px]">
              <svg viewBox="0 0 500 500" className="w-full h-full">
                <defs><linearGradient id="blobGrad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#facc15"/><stop offset="100%" stopColor="#eab308"/></linearGradient></defs>
                <motion.path d="M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99.5,352Q40,297,36,228.5Q32,160,85,107.5Q138,55,208,36Q278,17,338.5,60.5Q399,104,432,177Q465,250,440.5,320.5Z" fill="url(#blobGrad)" opacity="0.15" animate={{d:["M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99.5,352Q40,297,36,228.5Q32,160,85,107.5Q138,55,208,36Q278,17,338.5,60.5Q399,104,432,177Q465,250,440.5,320.5Z","M411,314Q405,378,348.5,420Q292,462,228,438Q164,414,108.5,369.5Q53,325,47,256.5Q41,188,92,132Q143,76,211.5,56Q280,36,345,72Q410,108,414.5,179Q419,250,411,314Z","M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99.5,352Q40,297,36,228.5Q32,160,85,107.5Q138,55,208,36Q278,17,338.5,60.5Q399,104,432,177Q465,250,440.5,320.5Z"]}} transition={{duration:8,repeat:Infinity,ease:'easeInOut'}} />
              </svg>
            </div>
            <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-2xl overflow-hidden border-2 border-white/10 bg-dark-card shadow-2xl shadow-black/50">
              <img src="/assets/foto yudhis.jpg" alt="Yudhis Profile" className="w-full h-full object-cover" />
              <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-accent/40 rounded-tl-lg"/>
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-accent/40 rounded-br-lg"/>
            </div>
            <motion.div animate={{y:[0,-8,0]}} transition={{duration:3,repeat:Infinity,ease:'easeInOut'}} className="absolute -top-4 -right-4 lg:top-0 lg:right-0 bg-dark-card border border-white/10 rounded-xl px-4 py-2 shadow-xl">
              <span className="text-xs text-muted">Preferred Engine</span>
              <p className="text-sm font-semibold text-white">Unity & Godot</p>
            </motion.div>
            <motion.div animate={{y:[0,8,0]}} transition={{duration:3.5,repeat:Infinity,ease:'easeInOut',delay:0.5}} className="absolute -bottom-4 -left-4 lg:bottom-4 lg:-left-8 bg-dark-card border border-white/10 rounded-xl px-4 py-2 shadow-xl">
              <span className="text-xs text-muted">Focus</span>
              <p className="text-sm font-semibold text-accent">Gameplay Systems</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1.2}} className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <motion.div animate={{y:[0,8,0]}} transition={{duration:1.5,repeat:Infinity}} className="w-5 h-8 border-2 border-white/20 rounded-full flex items-start justify-center p-1">
          <div className="w-1 h-2 bg-accent rounded-full"/>
        </motion.div>
      </motion.div>
    </section>
  )
}
