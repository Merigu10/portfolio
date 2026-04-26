import { motion } from 'framer-motion'
import { ExternalLink, ArrowRight } from 'lucide-react'
import { Github } from '../components/ui/Icons'
import { projects } from '../data/projects'
import { useLanguage } from '../context/LanguageContext'
import { t } from '../data/translations'
import { Link } from 'react-router-dom'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.15, duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Projects() {
  const { language } = useLanguage();
  const text = t[language].projects;

  return (
    <main style={{ paddingTop: '64px' }}>
      <section style={{ padding: '5rem 1.5rem 8rem' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

          {/* Header */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            style={{ marginBottom: '4rem', borderBottom: '1px solid var(--border)', paddingBottom: '2rem' }}>
            <h1 style={{ fontSize: 'clamp(3rem, 6vw, 4.5rem)', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '1rem', letterSpacing: '-0.03em', textTransform: 'uppercase' }}>
              {text.title}
            </h1>
            <p style={{ color: 'var(--text-muted)', maxWidth: '600px', lineHeight: 1.7, fontSize: '1.1rem', fontWeight: 500 }}>
              {text.subtitle}
            </p>
          </motion.div>

          {/* Project cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
            {projects.map((project, i) => {
              const bg = `var(--bg-pastel-${project.color})`
              return (
                <motion.article key={project.id}
                  custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                  className="brutal-shadow"
                  style={{
                    background: 'var(--bg-surface)',
                    border: '1px solid var(--border)',
                    position: 'relative',
                  }}>
                  
                  {/* Title Bar */}
                  <div style={{ 
                    borderBottom: '1px solid var(--border)', background: bg, 
                    padding: '1rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    flexWrap: 'wrap', gap: '1rem'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                      <span style={{ fontSize: '2rem' }}>{project.icon}</span>
                      <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--text-primary)', margin: 0 }}>{project.title[language]}</h2>
                    </div>
                    <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                      0{i + 1}
                    </span>
                  </div>

                  <div style={{ padding: '2.5rem', display: 'grid', gridTemplateColumns: '1fr', gap: '2rem' }}>
                    {/* Meta row */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                      <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.85rem', fontWeight: 700, color: 'var(--bg-primary)', background: 'var(--text-primary)', padding: '0.4rem 0.8rem' }}>
                        {project.type[language]}
                      </span>
                      <p style={{ fontWeight: 600, fontSize: '1rem', color: 'var(--text-muted)' }}>{project.subtitle[language]}</p>
                    </div>

                    <p style={{ color: 'var(--text-primary)', lineHeight: 1.75, fontSize: '1.05rem', maxWidth: '800px', fontWeight: 500 }}>
                      {project.description[language]}
                    </p>

                    {/* Detail callout */}
                    <div style={{
                      background: 'var(--bg-primary)', border: '1px solid var(--border)',
                      padding: '1.5rem', maxWidth: '800px', position: 'relative'
                    }}>
                      <div style={{ position: 'absolute', top: '-12px', left: '16px', background: 'var(--bg-primary)', padding: '0 8px', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.8rem', fontWeight: 700 }}>
                        {text.interesting_detail}
                      </div>
                      <p style={{ color: 'var(--text-primary)', fontSize: '0.95rem', lineHeight: 1.65, fontWeight: 500 }}>{project.details[language]}</p>
                    </div>

                    {/* Stack tags */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                      {project.stack.map(s => (
                        <span key={s} style={{
                          padding: '0.4rem 0.8rem',
                          fontFamily: 'JetBrains Mono, monospace', fontSize: '0.8rem', fontWeight: 600,
                          background: 'var(--bg-surface)', color: 'var(--text-primary)', border: '1px solid var(--border)',
                        }}>{s}</span>
                      ))}
                    </div>

                    {/* Actions */}
                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1rem' }}>
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-primary">
                        <Github size={18} /> {text.source_code}
                      </a>
                    </div>
                  </div>
                </motion.article>
              )
            })}
          </div>

          {/* Bottom note */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
            style={{ marginTop: '5rem', padding: '2rem', border: '1px dashed var(--border)', textAlign: 'center', background: 'var(--bg-surface)' }}>
            <p style={{ color: 'var(--text-primary)', fontSize: '1rem', fontWeight: 600, fontFamily: 'JetBrains Mono, monospace' }}>
              {text.bottom_note}{' '}
              <Link to="/labs" style={{ color: 'var(--text-primary)', textDecoration: 'underline', textUnderlineOffset: '4px' }}>
                {text.bottom_link}
              </Link>
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
