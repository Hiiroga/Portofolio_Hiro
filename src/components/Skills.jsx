import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const categories = [
  {
    title: 'Game Engines',
    items: [
      { name: 'Unity', icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8"><path d="M10.4 0L1.6 5.2V15.6L4.8 13.8V8.4L10.4 11.6V17L7.2 18.8L10.4 20.6L17.6 16.4V14.4L14 16.4L10.4 14.4V9L14 7L17.6 9V5.2L10.4 0ZM17.6 9V13.4L14 11.2L17.6 9Z"/></svg>
      )},
      { name: 'Godot', icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
      )},
      { name: 'Unreal Engine', icon: <span className="text-xl font-bold font-display">UE</span> },
    ],
  },
  {
    title: 'Languages',
    items: [
      { name: 'C#', icon: <span className="text-2xl font-bold font-display">C#</span> },
      { name: 'C++', icon: <span className="text-2xl font-bold font-display">C++</span> },
      { name: 'JavaScript', icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.659 1.275-.21.42-.27.999-.27 1.696 0 1.45.738 2.225 2.195 2.84 1.494.605 3.699.645 4.064 2.296.07.35-.079.961-.424 1.26-.273.34-.923.645-1.824.87-.398.108-1.79.236-2.119-.236-.225-.39-.253-1.035-.253-1.036zm-3.582-3.432c.3-.676.165-1.875-.405-2.77-.331-.54-.823-.995-1.337-1.996L9.771 6.352C9.486 6.684 9.071 7 8.466 7c-.559 0-.884-.214-1.639-1.582-.656-1.2-1.385-3.02-1.687-3.892-.098-.274-.202-.458-.35-.778h2.953c.022.031.118.3.115.shifter.498 1.047.719 1.627 1.222 2.852.205.531.396 1.025.779 1.681.315.602.926 1.306 1.514 1.307.27 0 .52-.108.773-.236z"/></svg>
      )},
      { name: 'Python', icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8"><path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09-.33.22zM21.1 6.11l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.89.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01.21.03zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08-.33.23z"/></svg>
      )},
      { name: 'GDScript', icon: <span className="text-lg font-bold font-display">GD</span> },
      { name: 'Java', icon: <span className="text-xl font-bold font-display">J</span> },
    ],
  },
  {
    title: 'Tools & Software',
    items: [
      { name: 'GitHub', icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
      )},
      { name: 'Jira', icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.5 9.5h-3v3h-1v-3h-3v-1h3v-3h1v3h3v1z"/></svg>
      )},
      { name: 'Katalon', icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
      )},
    ],
  },
]

function SkillCard({ item, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -4, scale: 1.05 }}
      className="group flex flex-col items-center gap-3 p-6 rounded-2xl bg-dark-card border border-dark-border hover:border-accent/30 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5"
    >
      <div className="text-body group-hover:text-accent transition-colors duration-300">
        {item.icon}
      </div>
      <span className="text-sm font-medium text-body group-hover:text-white transition-colors duration-300">
        {item.name}
      </span>
    </motion.div>
  )
}

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div ref={ref} initial={{opacity:0,y:30}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:0.6}} className="text-center mb-16">
          <span className="text-accent text-sm font-medium uppercase tracking-widest">Expertise</span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mt-3 mb-4">Skills & Tech Stack</h2>
          <p className="text-body text-lg max-w-2xl mx-auto">The engines, languages, and tools I use to build interactive experiences.</p>
        </motion.div>

        <div className="space-y-12">
          {categories.map((cat) => (
            <div key={cat.title}>
              <h3 className="text-sm font-medium uppercase tracking-widest text-muted mb-6 text-center">{cat.title}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-3xl mx-auto">
                {cat.items.map((item, i) => (
                  <SkillCard key={item.name} item={item} index={i} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
