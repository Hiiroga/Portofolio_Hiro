import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const games = [
  {
    title: 'Shadow Protocol',
    genre: 'Stealth Action',
    platforms: ['PC', 'WebGL'],
    image: null,
    roles: ['Gameplay Programming', 'AI Systems', 'Level Scripting'],
    itchUrl: '#',
    sourceUrl: '#',
    color: '#ef4444',
  },
  {
    title: 'Neon Drift',
    genre: 'Racing / Arcade',
    platforms: ['PC', 'Mobile'],
    image: null,
    roles: ['Systems Design', 'Vehicle Physics', 'UI/UX'],
    itchUrl: '#',
    sourceUrl: '#',
    color: '#8b5cf6',
  },
  {
    title: 'Dungeon Crawl',
    genre: 'Roguelike RPG',
    platforms: ['PC'],
    image: null,
    roles: ['Procedural Generation', 'Combat Systems', 'Inventory System'],
    itchUrl: '#',
    sourceUrl: '#',
    color: '#06b6d4',
  },
  {
    title: 'Pixel Garden',
    genre: 'Cozy Simulation',
    platforms: ['PC', 'Mobile'],
    image: null,
    roles: ['Core Gameplay Loop', 'Save System', 'Dialogue System'],
    itchUrl: '#',
    sourceUrl: '#',
    color: '#22c55e',
  },
]

function GameCard({ game, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group relative bg-dark-card border border-dark-border rounded-2xl overflow-hidden transition-all duration-500 hover:border-white/10 hover:shadow-2xl hover:shadow-black/50"
    >
      {/* Image placeholder */}
      <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-dark-hover to-dark-card">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <svg className="w-12 h-12 mx-auto text-white/10 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}><path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/></svg>
            <p className="text-xs text-muted">Screenshot / Video</p>
          </div>
        </div>
        {/* Top accent bar */}
        <div className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: game.color }} />
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark-card via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="text-lg font-display font-bold text-white group-hover:text-accent transition-colors duration-300">{game.title}</h3>
            <p className="text-sm text-muted">{game.genre}</p>
          </div>
          <div className="flex gap-1.5">
            {game.platforms.map(p => (
              <span key={p} className="px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider rounded-full border border-white/10 text-muted">{p}</span>
            ))}
          </div>
        </div>

        {/* Roles */}
        <div className="mb-5">
          <p className="text-xs text-muted uppercase tracking-widest mb-2">Contributions</p>
          <div className="flex flex-wrap gap-1.5">
            {game.roles.map(role => (
              <span key={role} className="px-2.5 py-1 text-xs rounded-lg bg-white/5 text-body border border-white/5">{role}</span>
            ))}
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex gap-3">
          <a href={game.itchUrl} target="_blank" rel="noopener noreferrer" className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 bg-accent/10 text-accent border border-accent/20 hover:bg-accent/20 hover:shadow-[0_0_20px_rgba(250,204,21,0.1)]">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/><path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            Play on Itch.io
          </a>
          <a href={game.sourceUrl} target="_blank" rel="noopener noreferrer" className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 bg-white/5 text-body border border-white/5 hover:bg-white/10 hover:text-white">
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            View Source
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export default function GameShowcase() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="games" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div ref={ref} initial={{opacity:0,y:30}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:0.6}} className="text-center mb-16">
          <span className="text-accent text-sm font-medium uppercase tracking-widest">Portfolio</span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mt-3 mb-4">Game Showcase</h2>
          <p className="text-body text-lg max-w-2xl mx-auto">A selection of games I've built — from fast-paced action to cozy sims. Each one pushed my skills further.</p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {games.map((game, i) => (
            <GameCard key={game.title} game={game} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
