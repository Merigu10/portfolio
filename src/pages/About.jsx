import { motion } from 'framer-motion'
import { Mail, Briefcase } from 'lucide-react'
import { Github, Linkedin } from '../components/ui/Icons'
import { useLanguage } from '../context/LanguageContext'
import { t } from '../data/translations'
import { career } from '../data/career'

const stack = [
  { area: 'Backend', techs: ['Java 17', 'Spring Boot 3', 'Spring Security', 'JPA / Hibernate', 'REST APIs'], color: 'purple' },
  { area: 'Data · AI', techs: ['Python', 'Pandas', 'Scikit-learn', 'HuggingFace Transformers', 'VADER', 'Jupyter'], color: 'blue' },
  { area: 'Databases', techs: ['PostgreSQL', 'SQLite', 'Redis (learning)'], color: 'green' },
  { area: 'DevOps', techs: ['Docker', 'Docker Compose', 'GitHub Actions'], color: 'yellow' },
  { area: 'Frontend', techs: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion', 'Angular'], color: 'blue' },
  { area: 'Tools', techs: ['Git', 'IntelliJ IDEA', 'VS Code', 'Postman', 'Swagger / OpenAPI'], color: 'purple' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function About() {
  const { language } = useLanguage();
  const text = t[language].about;

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

          {/* Top Section: Bio & Career */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'start', marginBottom: '4rem' }}>

            {/* Left Column: Bio & Socials */}
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2, duration: 0.65 }}>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '3rem' }}>
                <p style={{ color: 'var(--text-primary)', lineHeight: 1.75, fontSize: '1.05rem', fontWeight: 500 }}>{text.p1}</p>
                <p style={{ color: 'var(--text-primary)', lineHeight: 1.75, fontSize: '1.05rem', fontWeight: 500 }}>{text.p2}</p>
                <p style={{ color: 'var(--text-primary)', lineHeight: 1.75, fontSize: '1.05rem', fontWeight: 500 }}>{text.p3}</p>
              </div>

              {/* Philosophy callout */}
              <div className="brutal-shadow" style={{
                padding: '2rem', marginBottom: '3rem',
                background: 'var(--bg-pastel-yellow)', border: '1px solid var(--border)',
              }}>
                <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.85rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '1rem', textTransform: 'uppercase' }}>
                  {text.philosophy_title}
                </p>
                <p style={{ color: 'var(--text-primary)', fontSize: '1.1rem', lineHeight: 1.7, fontWeight: 700, fontStyle: 'italic' }}>
                  {text.philosophy_quote}
                </p>
              </div>

            </motion.div>

            {/* Right Column: Career */}
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3, duration: 0.65 }}>

              <div style={{ border: '1px solid var(--border)', background: 'var(--bg-surface)' }}>
                <div style={{ borderBottom: '1px solid var(--border)', background: 'var(--text-primary)', color: 'var(--bg-primary)', padding: '1rem 1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <Briefcase size={20} />
                  <h2 style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '1.2rem', fontWeight: 800, margin: 0 }}>{text.career_title}</h2>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', padding: '1.5rem', gap: '2rem' }}>
                  {career.map((item, i) => (
                    <motion.div key={item.id}
                      custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                      style={{ position: 'relative', paddingLeft: '1.5rem' }}>

                      {/* Timeline line */}
                      {i < career.length - 1 && (
                        <div style={{ position: 'absolute', left: 0, top: '24px', bottom: '-2rem', width: '2px', background: 'var(--border)' }}></div>
                      )}
                      {/* Timeline dot */}
                      <div style={{ position: 'absolute', left: '-4px', top: '6px', width: '10px', height: '10px', background: 'var(--bg-pastel-blue)', border: '1px solid var(--border)' }}></div>

                      <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-muted)', marginBottom: '0.25rem' }}>
                        {item.period[language]}
                      </p>
                      <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
                        {item.role[language]}
                      </h3>
                      <p style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '1rem' }}>
                        @ {item.company}
                      </p>
                      <p style={{ color: 'var(--text-primary)', fontSize: '0.95rem', lineHeight: 1.6, fontWeight: 500, marginBottom: '1rem' }}>
                        {item.description[language]}
                      </p>

                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                        {item.stack.map(s => (
                          <span key={s} style={{
                            padding: '0.2rem 0.5rem', border: '1px solid var(--border)',
                            fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-primary)',
                            background: 'var(--bg-primary)', fontFamily: 'JetBrains Mono, monospace'
                          }}>{s}</span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Section: Full Width Stack Grid */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.65 }}>
            <div style={{ border: '1px solid var(--border)', background: 'var(--bg-surface)' }}>
              <div style={{ borderBottom: '1px solid var(--border)', background: 'var(--text-primary)', color: 'var(--bg-primary)', padding: '1rem 1.5rem' }}>
                <h2 style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '1.2rem', fontWeight: 800, margin: 0 }}>{text.tech_stack}</h2>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
                {stack.map((group, i) => {
                  const bg = `var(--bg-pastel-${group.color})`
                  return (
                    <motion.div key={group.area}
                      custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                      style={{
                        borderBottom: '1px solid var(--border)',
                        borderRight: '1px solid var(--border)',
                        display: 'flex', flexDirection: 'column'
                      }}>

                      <div style={{ background: bg, padding: '0.75rem 1.5rem', borderBottom: '1px solid var(--border)' }}>
                        <h3 style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.9rem', fontWeight: 800, color: 'var(--text-primary)', margin: 0, textTransform: 'uppercase' }}>
                          {group.area}
                        </h3>
                      </div>

                      <div style={{ padding: '1.5rem', display: 'flex', flexWrap: 'wrap', gap: '0.75rem', background: 'var(--bg-surface)', flex: 1 }}>
                        {group.techs.map(t => (
                          <span key={t} style={{
                            padding: '0.4rem 0.8rem', border: '1px solid var(--border)',
                            fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)',
                            background: 'var(--bg-primary)', fontFamily: 'JetBrains Mono, monospace'
                          }}>{t}</span>
                        ))}
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </motion.div>

          {/* Social Links (Moved to bottom) */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.65 }}
            style={{ marginTop: '4rem', display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
            {[
              { href: 'https://github.com/Merigu10', icon: <Github size={18} />, label: 'GitHub', bg: 'var(--bg-pastel-blue)' },
              { href: 'https://linkedin.com/in/mertixellgv', icon: <Linkedin size={18} />, label: 'LinkedIn', bg: 'var(--bg-pastel-blue)' },
              { href: 'mailto:meritxellguzman1@gmail.com', icon: <Mail size={18} />, label: 'Email', bg: 'var(--bg-pastel-blue)' },
            ].map(link => (
              <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer"
                className="btn-secondary"
                style={{ background: 'var(--bg-surface)' }}
                onMouseOver={e => e.currentTarget.style.background = link.bg}
                onMouseOut={e => e.currentTarget.style.background = 'var(--bg-surface)'}>
                {link.icon} {link.label}
              </a>
            ))}
          </motion.div>

        </div>
      </section>
    </main>
  )
}
