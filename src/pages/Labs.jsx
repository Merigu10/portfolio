import { motion } from 'framer-motion'
import { Zap } from 'lucide-react'
import { Github } from '../components/ui/Icons'
import { labs } from '../data/labs'
import { useLanguage } from '../context/LanguageContext'
import { t } from '../data/translations'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  }),
}

function LabStatus({ status, language }) {
  const config = {
    done: { label: t[language].labs.status_done, bg: 'var(--bg-pastel-green)' },
    building: { label: t[language].labs.status_building, bg: 'var(--bg-pastel-yellow)' },
    experimenting: { label: t[language].labs.status_experimenting, bg: 'var(--bg-pastel-purple)' },
  }
  const c = config[status] || config.experimenting
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center',
      padding: '0.25rem 0.6rem',
      fontSize: '0.75rem', fontWeight: 700,
      fontFamily: 'JetBrains Mono, monospace',
      color: 'var(--text-primary)', background: c.bg,
      border: '1px solid var(--border)',
    }}>
      {c.label}
    </span>
  )
}

export default function Labs() {
  const { language } = useLanguage();
  const text = t[language].labs;

  return (
    <main style={{ paddingTop: '64px' }}>
      <section style={{ padding: '5rem 1.5rem 8rem' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

          {/* Header */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            style={{ marginBottom: '2rem', borderBottom: '1px solid var(--border)', paddingBottom: '2rem' }}>
            <h1 style={{ fontSize: 'clamp(3rem, 6vw, 4.5rem)', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '1rem', letterSpacing: '-0.03em', textTransform: 'uppercase' }}>
              {text.title}
            </h1>
            <p style={{ color: 'var(--text-muted)', maxWidth: '600px', lineHeight: 1.7, fontSize: '1.1rem', fontWeight: 500 }}>
              {text.subtitle}
            </p>
          </motion.div>

          {/* Callout banner */}
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }}
            style={{
              display: 'flex', alignItems: 'flex-start', gap: '1rem',
              padding: '1.5rem', marginBottom: '4rem',
              background: 'var(--bg-surface)', border: '1px solid var(--border)',
              boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.05)'
            }}>
            <Zap size={24} color="var(--text-primary)" style={{ flexShrink: 0 }} />
            <p style={{ color: 'var(--text-primary)', fontSize: '0.95rem', lineHeight: 1.65, fontFamily: 'JetBrains Mono, monospace', fontWeight: 600 }}>
              {text.banner}
            </p>
          </motion.div>

          {/* Labs grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {labs.map((lab, i) => {
              const bg = `var(--bg-pastel-${lab.color})`
              return (
                <motion.article key={lab.id}
                  custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                  className="brutal-shadow"
                  style={{
                    background: 'var(--bg-surface)',
                    border: '1px solid var(--border)',
                    display: 'flex', flexDirection: 'column',
                  }}>

                  {/* Title Bar */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 1.5rem', borderBottom: '1px solid var(--border)', background: bg }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <span style={{ fontSize: '1.5rem' }}>{lab.icon}</span>
                      <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)', margin: 0 }}>{lab.title[language]}</h2>
                    </div>
                    <LabStatus status={lab.status} language={language} />
                  </div>

                  <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem', flex: 1 }}>
                    {/* Area */}
                    <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-primary)', textDecoration: 'underline' }}>
                      {text.area} {lab.area[language].toUpperCase()}
                    </p>

                    {/* Description */}
                    <p style={{ color: 'var(--text-primary)', fontSize: '0.95rem', lineHeight: 1.65, fontWeight: 500, flex: 1 }}>{lab.description[language]}</p>

                    {/* Why callout */}
                    <div style={{ background: 'var(--bg-primary)', padding: '1rem', border: '1px solid var(--border)' }}>
                      <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>{text.the_why}</p>
                      <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6, fontWeight: 500 }}>{lab.why[language]}</p>
                    </div>

                    {/* Stack tags */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                      {lab.stack.map(s => (
                        <span key={s} style={{
                          padding: '0.2rem 0.5rem',
                          fontFamily: 'JetBrains Mono, monospace', fontSize: '0.75rem', fontWeight: 600,
                          background: 'var(--bg-surface)', color: 'var(--text-primary)', border: '1px solid var(--border)',
                        }}>{s}</span>
                      ))}
                    </div>

                    {/* GitHub link */}
                    <a href={lab.github} target="_blank" rel="noopener noreferrer"
                      className="btn-secondary" style={{ width: '100%', justifyContent: 'center', marginTop: 'auto' }}>
                      <Github size={16} /> {text.view_source}
                    </a>
                  </div>
                </motion.article>
              )
            })}
          </div>
        </div>
      </section>
    </main>
  )
}
