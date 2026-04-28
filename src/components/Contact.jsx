import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const socials = [
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/yudhistiira/', icon: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
  )},
  { name: 'GitHub', href: 'https://github.com/Hiiroga', icon: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
  )},
  { name: 'Itch.io', href: 'https://hiiroga.itch.io/', icon: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M3.13 1.338C2.08 1.96.02 4.328 0 4.95v1.03c0 1.303 1.22 2.45 2.325 2.45 1.33 0 2.436-1.058 2.436-2.41 0 1.352 1.07 2.41 2.4 2.41 1.328 0 2.362-1.058 2.362-2.41 0 1.352 1.15 2.41 2.478 2.41 1.33 0 2.48-1.058 2.48-2.41 0 1.352 1.032 2.41 2.36 2.41 1.33 0 2.402-1.058 2.402-2.41 0 1.352 1.106 2.41 2.436 2.41 1.104 0 2.324-1.147 2.324-2.45V4.95c-.022-.622-2.08-2.99-3.13-3.612C18.46.68 14.28.5 12 .5c-2.28 0-6.46.18-8.87.838zm6.379 6.648c-.262.32-.664.652-1.137.92l-.003.002c-.476.27-.96.402-1.398.462v7.63c0 .19-.156.395-.345.395H4.78c-.19 0-.345-.205-.345-.395v-4.18c-.994.21-1.97.334-2.842.4v4.174c0 2.08 1.296 4.09 6.407 4.09h8c5.11 0 6.407-2.01 6.407-4.09v-4.174c-.872-.066-1.848-.19-2.842-.4v4.18c0 .19-.155.395-.344.395h-1.845c-.19 0-.345-.205-.345-.395V9.37c-.438-.06-.922-.192-1.398-.462l-.003-.002c-.473-.268-.875-.6-1.137-.92-.263.32-.665.652-1.138.92l-.003.002c-.474.268-.96.4-1.397.46v7.632c0 .19-.155.395-.345.395h-1.845c-.189 0-.344-.205-.344-.395V9.37c-.438-.06-.922-.192-1.397-.46l-.004-.003c-.472-.268-.874-.6-1.136-.92z"/></svg>
  )},
]

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setFormState({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-accent/3 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div ref={ref} initial={{opacity:0,y:30}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:0.6}} className="text-center mb-16">
          <span className="text-accent text-sm font-medium uppercase tracking-widest">Get In Touch</span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mt-3 mb-4">Contact</h2>
          <p className="text-body text-lg max-w-2xl mx-auto">Interested in working together? Drop me a message and let's build something amazing.</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-5xl mx-auto">
          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{opacity:0,x:-30}}
            whileInView={{opacity:1,x:0}}
            viewport={{once:true}}
            transition={{duration:0.6}}
            className="space-y-5"
          >
            <div>
              <label htmlFor="contact-name" className="block text-sm font-medium text-body mb-2">Name</label>
              <input
                id="contact-name"
                type="text"
                value={formState.name}
                onChange={e => setFormState({...formState, name: e.target.value})}
                required
                className="w-full px-4 py-3 rounded-xl bg-dark-card border border-dark-border text-white placeholder-muted focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all duration-300"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="contact-email" className="block text-sm font-medium text-body mb-2">Email</label>
              <input
                id="contact-email"
                type="email"
                value={formState.email}
                onChange={e => setFormState({...formState, email: e.target.value})}
                required
                className="w-full px-4 py-3 rounded-xl bg-dark-card border border-dark-border text-white placeholder-muted focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all duration-300"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label htmlFor="contact-message" className="block text-sm font-medium text-body mb-2">Message</label>
              <textarea
                id="contact-message"
                rows={5}
                value={formState.message}
                onChange={e => setFormState({...formState, message: e.target.value})}
                required
                className="w-full px-4 py-3 rounded-xl bg-dark-card border border-dark-border text-white placeholder-muted focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all duration-300 resize-none"
                placeholder="Tell me about your project..."
              />
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-3.5 rounded-full bg-accent text-black font-semibold text-sm hover:shadow-[0_0_30px_rgba(250,204,21,0.3)] transition-all duration-300"
            >
              {submitted ? '✓ Message Sent!' : 'Send Message'}
            </motion.button>
          </motion.form>

          {/* Info + Socials */}
          <motion.div initial={{opacity:0,x:30}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration:0.6,delay:0.2}} className="flex flex-col justify-between">
            <div>
              <h3 className="font-display text-2xl font-bold text-white mb-4">Let's Connect</h3>
              <p className="text-body leading-relaxed mb-8">
                Whether you have a game idea, need a programmer for your team, or just want to chat about game dev — I'd love to hear from you.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-body">
                  <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                  yudhistiramaulana05@gmail.com
                </div>
                <div className="flex items-center gap-3 text-body">
                  <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                  Bandung, Jawa Barat, Indonesia
                </div>
              </div>
            </div>

            {/* Social icons */}
            <div>
              <p className="text-sm text-muted uppercase tracking-widest mb-4">Find me on</p>
              <div className="flex gap-3">
                {socials.map((s) => (
                  <motion.a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -4, scale: 1.1 }}
                    className="w-12 h-12 rounded-xl bg-dark-card border border-dark-border flex items-center justify-center text-body hover:text-accent hover:border-accent/30 transition-all duration-300"
                    aria-label={s.name}
                  >
                    {s.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
