import { Link } from 'react-router-dom'
import { Mail, Terminal } from 'lucide-react'
import { Github, Linkedin } from '../ui/Icons'
import { useLanguage } from '../../context/LanguageContext'
import { t } from '../../data/translations'

export default function Footer() {
  const { language } = useLanguage()

  return (
    <footer style={{
      borderTop: '1px solid var(--border)',
      padding: '3rem 1.5rem',
      marginTop: '4rem',
      backgroundColor: 'var(--bg-surface)'
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '2rem' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
            <div style={{
              width: '28px', height: '28px',
              background: 'var(--text-primary)',
              display: 'flex', alignItems: 'center', justifyContent: 'center'
            }}>
              <Terminal size={14} color="var(--bg-primary)" />
            </div>
            <span style={{ fontFamily: 'JetBrains Mono, monospace', fontWeight: 700, fontSize: '0.85rem', color: 'var(--text-primary)' }}>
              merigu<span style={{ color: 'var(--text-muted)' }}>.portfolio</span>
            </span>
          </div>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', fontFamily: 'JetBrains Mono, monospace' }}>
            {t[language].footer.sub}
          </p>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <a href="https://github.com/Merigu10" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-primary)', transition: 'transform 0.2s' }}
            onMouseOver={e => e.currentTarget.style.transform = 'translateY(-2px)'}
            onMouseOut={e => e.currentTarget.style.transform = 'translateY(0)'}>
            <Github size={20} />
          </a>
          <a href="https://linkedin.com/in/mertixellgv" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-primary)', transition: 'transform 0.2s' }}
            onMouseOver={e => e.currentTarget.style.transform = 'translateY(-2px)'}
            onMouseOut={e => e.currentTarget.style.transform = 'translateY(0)'}>
            <Linkedin size={20} />
          </a>
          <a href="meritxellguzman1@gmail.com" style={{ color: 'var(--text-primary)', transition: 'transform 0.2s' }}
            onMouseOver={e => e.currentTarget.style.transform = 'translateY(-2px)'}
            onMouseOut={e => e.currentTarget.style.transform = 'translateY(0)'}>
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  )
}
