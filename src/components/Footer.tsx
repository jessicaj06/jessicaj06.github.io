import { profile } from '../data'

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-line)] px-5 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-sm text-slate-500 sm:flex-row">
        <span className="font-mono">
          © {profile.name} — built with React + CUDA-fueled curiosity ⚡
        </span>
        <span className="font-mono text-xs">
          <span className="text-[var(--color-neon)]">$</span> made with Vite · deployed on GitHub
          Pages
        </span>
      </div>
    </footer>
  )
}
