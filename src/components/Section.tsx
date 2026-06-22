import { motion } from 'motion/react'
import type { ReactNode } from 'react'

export function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string
  eyebrow: string
  title: ReactNode
  children: ReactNode
}) {
  return (
    <section id={id} className="relative scroll-mt-24 px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="mb-3 flex items-center gap-3 font-mono text-sm text-[var(--color-neon)]">
            <span className="h-px w-8 bg-[var(--color-neon)]/60" />
            {eyebrow}
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
        </motion.div>
        {children}
      </div>
    </section>
  )
}
