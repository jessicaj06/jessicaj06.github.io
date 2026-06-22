import { motion } from 'motion/react'
import { Mail } from 'lucide-react'
import { GitHubIcon, LinkedInIcon } from './icons'
import { Section } from './Section'
import { profile } from '../data'

export default function Contact() {
  return (
    <Section id="contact" eyebrow="// contact" title={<>Let's build something fast</>}>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="card relative overflow-hidden p-10 text-center"
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{
            background:
              'radial-gradient(circle at 50% 0%, rgba(118,185,0,0.4), transparent 60%)',
          }}
        />
        <p className="relative mx-auto mb-8 max-w-xl text-lg text-slate-300">
          I'm always up for talking GPUs, ML, CUDA tricks, or new opportunities. Drop me a line —
          I'd love to hear from you.
        </p>
        <div className="relative flex flex-wrap items-center justify-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-full bg-[var(--color-neon)] px-6 py-3 font-semibold text-black transition-transform hover:scale-[1.03]"
          >
            <Mail size={18} /> Email me
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-[var(--color-line)] px-6 py-3 font-semibold text-slate-200 transition-colors hover:border-[var(--color-neon)] hover:text-[var(--color-neon-soft)]"
          >
            <GitHubIcon size={18} /> GitHub
          </a>
          {profile.linkedin && (
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--color-line)] px-6 py-3 font-semibold text-slate-200 transition-colors hover:border-[var(--color-neon)] hover:text-[var(--color-neon-soft)]"
            >
              <LinkedInIcon size={18} /> LinkedIn
            </a>
          )}
        </div>
      </motion.div>
    </Section>
  )
}
