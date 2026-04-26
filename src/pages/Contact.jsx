import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Send, Terminal } from 'lucide-react'
import { Github, Linkedin } from '../components/ui/Icons'
import { useLanguage } from '../context/LanguageContext'
import { t } from '../data/translations'

export default function Contact() {
  const [formState, setFormState] = useState('idle') // idle, submitting, success, error
  const { language } = useLanguage();
  const text = t[language].contact;

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormState('submitting')

    // Simulate form submission
    setTimeout(() => {
      setFormState('success')
      e.target.reset()

      // Reset success state after a while
      setTimeout(() => setFormState('idle'), 5000)
    }, 1500)
  }

  return (
    <main style={{ paddingTop: '64px' }}>
      <section style={{ padding: '5rem 1.5rem 8rem', minHeight: 'calc(100vh - 64px - 150px)', display: 'flex', alignItems: 'center' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', width: '100%', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'center' }}>

          {/* Left: Text content */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <h1 style={{ fontSize: 'clamp(3rem, 6vw, 4.5rem)', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '1.5rem', lineHeight: 1.1, letterSpacing: '-0.03em', textTransform: 'uppercase' }}>
              {text.title}
            </h1>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '3rem' }}>
              <p style={{ color: 'var(--text-primary)', lineHeight: 1.75, fontSize: '1.1rem', maxWidth: '480px', fontWeight: 500 }}>
                {text.p1}
              </p>
              <p style={{ color: 'var(--text-primary)', lineHeight: 1.75, fontSize: '1.1rem', maxWidth: '480px', fontWeight: 500 }}>
                {text.p2}
              </p>
            </div>

            {/* Direct contact items */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <a href="mailto:meritxellguzman1@gmail.com"
                className="brutal-shadow"
                style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-primary)', textDecoration: 'none', padding: '1rem', background: 'var(--bg-pastel-yellow)', border: '1px solid var(--border)', width: 'fit-content', transition: 'all 0.2s' }}
                onMouseOver={e => { e.currentTarget.style.transform = 'translate(-2px, -2px)'; e.currentTarget.style.boxShadow = '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                onMouseOut={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 4px 6px -1px rgb(0 0 0 / 0.05)' }}>
                <div style={{ width: '48px', height: '48px', background: 'var(--bg-surface)', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Mail size={24} strokeWidth={2.5} />
                </div>
                <div>
                  <p style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--text-primary)', fontFamily: 'JetBrains Mono, monospace', marginBottom: '0.2rem', textTransform: 'uppercase' }}>Email</p>
                  <p style={{ fontWeight: 600, fontSize: '1rem' }}>meritxellguzman1@gmail.com</p>
                </div>
              </a>

              <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                <a href="https://github.com/Merigu10" target="_blank" rel="noopener noreferrer"
                  className="btn-secondary">
                  <Github size={18} /> GitHub
                </a>
                <a href="https://linkedin.com/in/mertixellgv" target="_blank" rel="noopener noreferrer"
                  className="btn-secondary">
                  <Linkedin size={18} /> LinkedIn
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2, duration: 0.6 }}>
            <div className="brutal-shadow" style={{
              background: 'var(--bg-surface)',
              border: '1px solid var(--border)',
              display: 'flex', flexDirection: 'column'
            }}>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1.5rem', borderBottom: '1px solid var(--border)', background: 'var(--bg-pastel-blue)' }}>
                <Terminal size={24} color="var(--text-primary)" strokeWidth={2.5} />
                <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)', margin: 0, textTransform: 'uppercase' }}>{text.form_title}</h2>
              </div>

              <div style={{ padding: '2rem' }}>
                {formState === 'success' ? (
                  <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                    style={{ textAlign: 'center', padding: '3rem 0' }}>
                    <div style={{ width: '80px', height: '80px', background: 'var(--bg-pastel-green)', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', color: 'var(--text-primary)', fontSize: '2.5rem', fontWeight: 800 }}>
                      ✓
                    </div>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.5rem', textTransform: 'uppercase' }}>{text.success_title}</h3>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1rem', fontWeight: 600 }}>{text.success_desc}</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      <label htmlFor="name" style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.85rem', fontWeight: 800, color: 'var(--text-primary)', textTransform: 'uppercase' }}>{text.name}</label>
                      <input type="text" id="name" required disabled={formState === 'submitting'}
                        style={{
                          background: 'var(--bg-primary)', border: '1px solid var(--border)',
                          padding: '1rem', color: 'var(--text-primary)',
                          fontFamily: 'Inter, sans-serif', fontSize: '1rem', fontWeight: 500,
                          transition: 'all 0.2s', outline: 'none'
                        }}
                        onFocus={e => { e.target.style.boxShadow = '0 4px 6px -1px rgb(0 0 0 / 0.05)'; e.target.style.transform = 'translate(-2px, -2px)' }}
                        onBlur={e => { e.target.style.boxShadow = 'none'; e.target.style.transform = 'none' }}
                      />
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      <label htmlFor="email" style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.85rem', fontWeight: 800, color: 'var(--text-primary)', textTransform: 'uppercase' }}>{text.email}</label>
                      <input type="email" id="email" required disabled={formState === 'submitting'}
                        style={{
                          background: 'var(--bg-primary)', border: '1px solid var(--border)',
                          padding: '1rem', color: 'var(--text-primary)',
                          fontFamily: 'Inter, sans-serif', fontSize: '1rem', fontWeight: 500,
                          transition: 'all 0.2s', outline: 'none'
                        }}
                        onFocus={e => { e.target.style.boxShadow = '0 4px 6px -1px rgb(0 0 0 / 0.05)'; e.target.style.transform = 'translate(-2px, -2px)' }}
                        onBlur={e => { e.target.style.boxShadow = 'none'; e.target.style.transform = 'none' }}
                      />
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      <label htmlFor="message" style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.85rem', fontWeight: 800, color: 'var(--text-primary)', textTransform: 'uppercase' }}>{text.message}</label>
                      <textarea id="message" required rows={5} disabled={formState === 'submitting'}
                        style={{
                          background: 'var(--bg-primary)', border: '1px solid var(--border)',
                          padding: '1rem', color: 'var(--text-primary)',
                          fontFamily: 'Inter, sans-serif', fontSize: '1rem', fontWeight: 500, resize: 'vertical',
                          transition: 'all 0.2s', outline: 'none'
                        }}
                        onFocus={e => { e.target.style.boxShadow = '0 4px 6px -1px rgb(0 0 0 / 0.05)'; e.target.style.transform = 'translate(-2px, -2px)' }}
                        onBlur={e => { e.target.style.boxShadow = 'none'; e.target.style.transform = 'none' }}
                      />
                    </div>

                    <button type="submit" disabled={formState === 'submitting'}
                      className="btn-primary"
                      style={{
                        width: '100%', justifyContent: 'center', padding: '1rem', fontSize: '1rem', marginTop: '0.5rem',
                        background: 'var(--text-primary)', color: 'var(--bg-primary)',
                        cursor: formState === 'submitting' ? 'wait' : 'pointer',
                        opacity: formState === 'submitting' ? 0.7 : 1,
                      }}>
                      {formState === 'submitting' ? text.sending : text.send}
                      <Send size={18} />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </motion.div>

        </div>
      </section>
    </main>
  )
}
