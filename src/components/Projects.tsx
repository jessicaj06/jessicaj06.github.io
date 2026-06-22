import { motion } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'
import { GitHubIcon } from './icons'
import { Section } from './Section'
import { projects } from '../data'

const statusStyle: Record<string, string> = {
  Live: 'text-[var(--color-neon-soft)] border-[var(--color-neon)]/40',
  Building: 'text-cyan-300 border-cyan-400/40',
  Learning: 'text-violet-300 border-violet-400/40',
}

export default function Projects() {
  return (
    <Section id="projects" eyebrow="// projects" title={<>Things I'm building & learning</>}>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, i) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ delay: (i % 2) * 0.1, duration: 0.5 }}
            className="card group flex flex-col p-6"
          >
            <div className="mb-3 flex items-start justify-between gap-4">
              <h3 className="text-xl font-semibold text-slate-100 transition-colors group-hover:text-[var(--color-neon-soft)]">
                {project.title}
              </h3>
              <span
                className={`shrink-0 rounded-full border px-2.5 py-0.5 font-mono text-[11px] ${
                  statusStyle[project.status]
                }`}
              >
                {project.status}
              </span>
            </div>

            <p className="flex-1 text-sm leading-relaxed text-slate-400">{project.blurb}</p>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md bg-[var(--color-line)]/60 px-2.5 py-1 font-mono text-[11px] text-slate-300"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-5 flex items-center gap-4 border-t border-[var(--color-line)] pt-4">
              {project.repo && (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-slate-300 transition-colors hover:text-[var(--color-neon-soft)]"
                >
                  <GitHubIcon size={15} /> Code
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-slate-300 transition-colors hover:text-[var(--color-neon-soft)]"
                >
                  Demo <ArrowUpRight size={15} />
                </a>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  )
}
