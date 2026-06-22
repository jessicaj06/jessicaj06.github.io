import { motion } from 'motion/react'
import { Terminal } from 'lucide-react'
import { Section } from './Section'
import { profile, learning } from '../data'

export default function About() {
  return (
    <Section id="about" eyebrow="// about" title={<>The person behind the kernels</>}>
      <div className="grid gap-10 md:grid-cols-5">
        <div className="md:col-span-3 space-y-5 text-lg leading-relaxed text-slate-300">
          {profile.about.map((p, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              {p}
            </motion.p>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="card md:col-span-2 overflow-hidden"
        >
          <div className="flex items-center gap-2 border-b border-[var(--color-line)] px-4 py-3">
            <span className="h-3 w-3 rounded-full bg-red-500/70" />
            <span className="h-3 w-3 rounded-full bg-yellow-500/70" />
            <span className="h-3 w-3 rounded-full bg-green-500/70" />
            <span className="ml-2 inline-flex items-center gap-2 font-mono text-xs text-slate-400">
              <Terminal size={13} /> currently_learning.sh
            </span>
          </div>
          <ul className="space-y-3 p-5 font-mono text-sm">
            {learning.map((item) => (
              <li key={item} className="flex gap-3 text-slate-300">
                <span className="text-[var(--color-neon)]">▸</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </Section>
  )
}
