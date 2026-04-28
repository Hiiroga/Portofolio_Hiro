export default function Footer() {
  return (
    <footer className="relative py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-display text-lg font-bold tracking-tight">
            <span className="text-white">HIRO</span>
            <span className="text-accent">DEV</span>
          </div>
          <p className="text-sm text-muted">
            © {new Date().getFullYear()} HiroDev.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-body hover:text-accent hover:border-accent/30 transition-all duration-300"
            aria-label="Back to top"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" /></svg>
          </button>
        </div>
      </div>
    </footer>
  )
}
