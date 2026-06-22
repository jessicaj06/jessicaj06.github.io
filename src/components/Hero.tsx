import { motion } from 'motion/react'
import { ArrowDown, Cpu, Mail, MapPin } from 'lucide-react'
import { GitHubIcon } from './icons'
import { profile } from '../data'
import profileImg from '../assets/profile.png'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 * i, duration: 0.6, ease: 'easeOut' as const },
  }),
}

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center px-5 pt-28 pb-16">
      {/* rotating conic glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[140vmin] w-[140vmin] -translate-x-1/2 -translate-y-1/2 opacity-[0.07]">
        <div
          className="animate-spin-slow h-full w-full rounded-full"
          style={{
            background: 'conic-gradient(from 0deg, #76b900, #22d3ee, #7c5cff, #76b900)',
          }}
        />
      </div>

      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        {/* ---- Left: copy ---- */}
        <div>
          <motion.div
            variants={fadeUp}
            custom={0}
            initial="hidden"
            animate="show"
            className="mb-6 flex flex-wrap items-center gap-3"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-line)] bg-[var(--color-surface)]/60 px-4 py-1.5 font-mono text-xs text-slate-300 backdrop-blur">
              <Cpu size={14} className="text-[var(--color-neon)]" />
              {profile.role}
              <span className="ml-1 h-2 w-2 animate-pulse rounded-full bg-[var(--color-neon)]" />
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-line)] bg-[var(--color-surface)]/60 px-4 py-1.5 font-mono text-xs text-slate-300 backdrop-blur">
              <MapPin size={13} className="text-[var(--color-cyan)]" />
              {profile.location}
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            custom={1}
            initial="hidden"
            animate="show"
            className="text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl"
          >
            Hi, I'm <span className="text-glow">{profile.name}</span>
            <br />
            building <span className="text-glow">fast</span> AI on GPUs.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            custom={2}
            initial="hidden"
            animate="show"
            className="mt-6 max-w-xl text-lg leading-relaxed text-slate-400"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            variants={fadeUp}
            custom={3}
            initial="hidden"
            animate="show"
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-[var(--color-neon)] px-6 py-3 font-semibold text-black transition-transform hover:scale-[1.03]"
            >
              View my work
              <ArrowDown size={18} className="transition-transform group-hover:translate-y-0.5" />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--color-line)] px-6 py-3 font-semibold text-slate-200 transition-colors hover:border-[var(--color-neon)] hover:text-[var(--color-neon-soft)]"
            >
              <GitHubIcon size={18} /> GitHub
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-full px-3 py-3 text-slate-300 transition-colors hover:text-[var(--color-neon-soft)]"
            >
              <Mail size={18} /> {profile.email}
            </a>
          </motion.div>
        </div>

        {/* ---- Right: animated framed portrait ---- */}
        <motion.div
          variants={fadeUp}
          custom={2}
          initial="hidden"
          animate="show"
          className="relative mx-auto w-full max-w-sm"
        >
          {/* gentle floating motion */}
          <motion.div
            className="group relative"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            whileHover={{ scale: 1.025 }}
          >
            {/* pulsing blurred halo */}
            <motion.div
              aria-hidden
              className="animate-spin-slow absolute -inset-4 rounded-[2.5rem] blur-2xl"
              style={{ background: 'var(--ring-gradient)' }}
              animate={{ opacity: [0.35, 0.7, 0.35] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            />

            {/* rotating gradient ring (revealed through the 3px frame padding) */}
            <div className="relative overflow-hidden rounded-[2rem] p-[3px]">
              <div
                aria-hidden
                className="animate-spin-slow absolute inset-[-60%]"
                style={{ background: 'var(--ring-gradient)' }}
              />
              <img
                src={profileImg}
                alt={`${profile.name}, stargazing AI engineer`}
                className="relative aspect-[4/5] w-full rounded-[1.8rem] object-cover"
                loading="eager"
              />
              {/* sweeping shine */}
              <motion.div
                aria-hidden
                className="pointer-events-none absolute inset-[3px] rounded-[1.8rem]"
                style={{
                  background:
                    'linear-gradient(115deg, transparent 30%, rgba(255,255,255,0.18) 48%, transparent 60%)',
                  backgroundSize: '250% 250%',
                }}
                animate={{ backgroundPosition: ['180% 0%', '-80% 0%'] }}
                transition={{ duration: 5, repeat: Infinity, repeatDelay: 2.5, ease: 'easeInOut' }}
              />
            </div>

            {/* floating little name tag */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-full border border-[var(--color-line)] bg-[var(--color-surface)]/90 px-4 py-1.5 font-mono text-xs text-slate-200 backdrop-blur">
              <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-[var(--color-neon)]" />{' '}
              {profile.handle}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
