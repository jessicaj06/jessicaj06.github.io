import { motion } from 'motion/react'
import { Section } from './Section'
import { skillGroups } from '../data'

export default function Skills() {
  return (
    <Section id="skills" eyebrow="// skills" title={<>Tools I'm sharpening</>}>
      <div className="grid gap-6 md:grid-cols-3">
        {skillGroups.map((group, gi) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ delay: gi * 0.1, duration: 0.5 }}
            className="card p-6"
          >
            <h3 className="mb-6 text-lg font-semibold text-slate-100">{group.title}</h3>
            <div className="space-y-5">
              {group.skills.map((skill) => (
                <div key={skill.name}>
                  <div className="mb-1.5 flex items-baseline justify-between">
                    <span className="text-sm font-medium text-slate-200">{skill.name}</span>
                    <span className="font-mono text-xs text-slate-500">{skill.note}</span>
                  </div>
                  <div className="h-1.5 w-full overflow-hidden rounded-full bg-[var(--color-line)]">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.9, ease: 'easeOut' }}
                      className="h-full rounded-full"
                      style={{
                        background:
                          'linear-gradient(90deg, var(--color-neon), var(--color-cyan))',
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
