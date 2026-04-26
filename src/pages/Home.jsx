import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Mail, ChevronDown } from 'lucide-react'
import { Github, Linkedin } from '../components/ui/Icons'
import { projects } from '../data/projects'
import { useLanguage } from '../context/LanguageContext'
import { t } from '../data/translations'

const skills = [
  { label: 'Java 17', color: 'purple' },
  { label: 'Spring Boot', color: 'purple' },
  { label: 'Python', color: 'blue' },
  { label: 'FastAPI', color: 'blue' },
  { label: 'NLP', color: 'blue' },
  { label: 'HuggingFace', color: 'blue' },
  { label: 'Scikit-learn', color: 'yellow' },
  { label: 'Pandas', color: 'yellow' },
  { label: 'PostgreSQL', color: 'green' },
  { label: 'Docker', color: 'green' },
  { label: 'Spring Security', color: 'purple' },
  { label: 'REST APIs', color: 'green' },
]

function TypewriterText({ text }) {
  const [displayed, setDisplayed] = useState('')
  const [idx, setIdx] = useState(0)

  useEffect(() => {
    setDisplayed('');
    setIdx(0);
  }, [text]);

  useEffect(() => {
    if (idx < text.length) {
      const timer = setTimeout(() => {
        setDisplayed(prev => prev + text[idx])
        setIdx(i => i + 1)
      }, 35)
      return () => clearTimeout(timer)
    }
  }, [idx, text])

  return (
    <span>
      {displayed}
      <span style={{
        display: 'inline-block', width: '8px', height: '1em',
        background: 'var(--text-primary)', marginLeft: '4px', verticalAlign: 'text-bottom',
        animation: idx >= text.length ? 'blink 1s infinite' : 'none',
      }} />
      <style>{`@keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }`}</style>
    </span>
  )
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] } }),
}

export default function Home() {
  const { language } = useLanguage();
  const text = t[language].home;

  return (
    <main>
      {/* ── HERO ── */}
      <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', borderBottom: '1px solid var(--border)', background: 'var(--bg-surface)' }}>
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem', paddingTop: '7rem', width: '100%' }}>

          <div style={{
            border: '1px solid var(--border)',
            padding: '3rem',
            background: 'var(--bg-primary)',
            boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)',
            position: 'relative'
          }}>
            {/* Corner decorations */}
            <div style={{ position: 'absolute', top: 0, left: 0, width: '1rem', height: '1rem', borderRight: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }} />
            <div style={{ position: 'absolute', top: 0, right: 0, width: '1rem', height: '1rem', borderLeft: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }} />
            <div style={{ position: 'absolute', bottom: 0, left: 0, width: '1rem', height: '1rem', borderRight: '1px solid var(--border)', borderTop: '1px solid var(--border)' }} />
            <div style={{ position: 'absolute', bottom: 0, right: 0, width: '1rem', height: '1rem', borderLeft: '1px solid var(--border)', borderTop: '1px solid var(--border)' }} />

            {/* eyebrow */}
            <motion.div custom={0} initial="hidden" animate="visible" variants={fadeUp}>
              <span style={{
                fontFamily: 'JetBrains Mono, monospace', fontSize: '0.85rem', fontWeight: 600,
                color: 'var(--text-primary)', letterSpacing: '0.05em', textTransform: 'uppercase',
                display: 'inline-block', marginBottom: '1.5rem',
                background: 'var(--bg-pastel-yellow)', padding: '0.2rem 0.5rem',
                border: '1px solid var(--border)'
              }}>
                {text.eyebrow}
              </span>
            </motion.div>

            {/* headline */}
            <motion.h1 custom={1} initial="hidden" animate="visible" variants={fadeUp}
              style={{ fontSize: 'clamp(2.6rem, 6vw, 4.5rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '1.5rem', color: 'var(--text-primary)', letterSpacing: '-0.03em' }}>
              {text.headline_1}<br />
              <span style={{ background: 'var(--bg-pastel-blue)', display: 'inline-block', padding: '0 0.5rem', marginTop: '0.2rem', border: '1px solid var(--border)' }}>
                {text.headline_highlight}
              </span>{' '}
              {text.headline_2}
            </motion.h1>

            {/* subheadline with typewriter */}
            <motion.p custom={2} initial="hidden" animate="visible" variants={fadeUp}
              style={{ fontSize: '1rem', color: 'var(--text-muted)', maxWidth: '600px', lineHeight: 1.7, marginBottom: '2.5rem', fontFamily: 'JetBrains Mono, monospace' }}>
              <TypewriterText text={text.typewriter} />
            </motion.p>

            {/* CTAs */}
            <motion.div custom={3} initial="hidden" animate="visible" variants={fadeUp}
              style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '3rem' }}>
              <Link to="/projects" className="btn-primary">
                {text.cta_projects} <ArrowRight size={16} />
              </Link>
              <Link to="/labs" className="btn-secondary">
                {text.cta_labs} <ArrowRight size={16} />
              </Link>
            </motion.div>

            {/* Social links */}
            <motion.div custom={4} initial="hidden" animate="visible" variants={fadeUp}
              style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
              {[
                { href: 'https://github.com/Merigu10', icon: <Github size={20} />, label: 'GitHub' },
                { href: 'https://linkedin.com/in/mertixellgv', icon: <Linkedin size={20} />, label: 'LinkedIn' },
                { href: 'mailto:meritxellguzman1@gmail.com', icon: <Mail size={20} />, label: 'Email' },
              ].map(link => (
                <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer"
                  style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-primary)', fontSize: '0.9rem', fontWeight: 600, textDecoration: 'none', transition: 'transform 0.2s', fontFamily: 'JetBrains Mono, monospace' }}
                  onMouseOver={e => e.currentTarget.style.transform = 'translateY(-2px)'}
                  onMouseOut={e => e.currentTarget.style.transform = 'translateY(0)'}>
                  {link.icon} <span style={{ borderBottom: '1px solid var(--border)' }}>{link.label}</span>
                </a>
              ))}
            </motion.div>
          </div>
        </div>

        {/* scroll indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }}
          style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', color: 'var(--text-primary)', zIndex: 1 }}>
          <ChevronDown size={32} strokeWidth={3} />
        </motion.div>
      </section>

      {/* ── SKILLS ── */}
      <section style={{ padding: '5rem 1.5rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <span style={{ width: '40px', height: '2px', background: 'var(--border)' }}></span>
              {text.skills_title}
            </h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
              {skills.map((skill, i) => {
                const bg = `var(--bg-pastel-${skill.color})`
                return (
                  <motion.span key={skill.label}
                    initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }} transition={{ delay: i * 0.05, duration: 0.3 }}
                    whileHover={{ scale: 1.05, y: -2, boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.05)' }}
                    style={{
                      padding: '0.5rem 1rem',
                      fontFamily: 'JetBrains Mono, monospace', fontSize: '0.85rem', fontWeight: 600,
                      background: bg, color: 'var(--text-primary)', border: '1px solid var(--border)',
                      cursor: 'default', transition: 'all 0.2s ease',
                    }}>
                    {skill.label}
                  </motion.span>
                )
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── FEATURED PROJECTS PREVIEW ── */}
      <section style={{ padding: '5rem 1.5rem 8rem', background: 'var(--bg-surface)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem', flexWrap: 'wrap', gap: '1rem', borderBottom: '1px solid var(--border)', paddingBottom: '1rem' }}>
            <div>
              <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>{text.projects_title}</h2>
            </div>
            <Link to="/projects" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-primary)', textDecoration: 'none', fontSize: '1rem', fontWeight: 700, fontFamily: 'JetBrains Mono, monospace', transition: 'transform 0.2s' }}
              onMouseOver={e => e.currentTarget.style.transform = 'translateX(5px)'}
              onMouseOut={e => e.currentTarget.style.transform = 'translateX(0)'}>
              {text.view_all} <ArrowRight size={18} strokeWidth={3} />
            </Link>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {projects.map((project, i) => {
              const bg = `var(--bg-pastel-${project.color})`
              return (
                <motion.div key={project.id}
                  initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="brutal-shadow"
                  style={{
                    background: 'var(--bg-primary)',
                    padding: '2rem',
                    border: '1px solid var(--border)',
                    display: 'flex', flexDirection: 'column',
                    position: 'relative'
                  }}>

                  {/* Header Decoration */}
                  <div style={{ position: 'absolute', top: 0, right: 0, padding: '0.5rem 1rem', borderLeft: '1px solid var(--border)', borderBottom: '1px solid var(--border)', background: bg, fontFamily: 'JetBrains Mono, monospace', fontWeight: 700, fontSize: '0.8rem' }}>
                    0{i + 1}
                  </div>

                  <div style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>{project.icon}</div>

                  <div style={{ marginBottom: '1rem' }}>
                    <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.75rem', fontWeight: 700, background: 'var(--text-primary)', color: 'var(--bg-primary)', padding: '0.2rem 0.5rem' }}>{project.type[language]}</span>
                  </div>

                  <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>{project.title[language]}</h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: 1.5, fontWeight: 500 }}>{project.subtitle[language]}</p>
                  <p style={{ fontSize: '0.95rem', color: 'var(--text-primary)', lineHeight: 1.6, marginBottom: '2rem', flex: 1 }}>{project.description[language]}</p>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
                    {project.stack.slice(0, 4).map(s => (
                      <span key={s} style={{
                        padding: '0.25rem 0.5rem',
                        fontFamily: 'JetBrains Mono, monospace', fontSize: '0.75rem', fontWeight: 600,
                        background: 'var(--bg-surface)', border: '1px solid var(--border)',
                      }}>{s}</span>
                    ))}
                  </div>

                  <a href={project.github} target="_blank" rel="noopener noreferrer"
                    className="btn-secondary" style={{ width: '100%', justifyContent: 'center' }}>
                    <Github size={16} /> {text.view_github}
                  </a>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>
    </main>
  )
}
