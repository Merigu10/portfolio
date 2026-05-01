import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Terminal, Globe } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext'
import { t } from '../../data/translations'

const navLinkKeys = [
  { to: '/', key: 'home' },
  { to: '/projects', key: 'projects' },
  { to: '/labs', key: 'labs' },
  { to: '/about', key: 'about' },
  { to: '/contact', key: 'contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { language, toggleLanguage } = useLanguage()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: 'all 0.3s ease',
        background: scrolled ? 'var(--bg-primary)' : 'transparent',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 var(--page-gutter)', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.75rem' }}>
        {/* Logo */}
        <NavLink to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <div style={{
            width: '32px', height: '32px',
            background: 'var(--accent-strong)',
            display: 'flex', alignItems: 'center', justifyContent: 'center'
          }}>
            <Terminal size={16} color="var(--color-polar-white)" />
          </div>
          <span className="brand-text" style={{ fontFamily: 'JetBrains Mono, monospace', fontWeight: 700, fontSize: '0.9rem', color: 'var(--text-primary)' }}>
            merigu<span style={{ color: 'var(--text-muted)' }}>.portfolio</span>
          </span>
        </NavLink>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          {/* Desktop nav */}
          <nav style={{ display: 'flex', gap: '0.25rem' }} className="desktop-nav">
            {navLinkKeys.map(link => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                onClick={() => setMenuOpen(false)}
                style={({ isActive }) => ({
                  padding: '0.4rem 1rem',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  fontFamily: 'JetBrains Mono, monospace',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                  color: 'var(--text-primary)',
                  background: isActive ? 'var(--bg-pastel-blue)' : 'transparent',
                  border: isActive ? '1px solid var(--border)' : '1px solid transparent',
                  boxShadow: isActive ? '0 2px 4px rgb(0 0 0 / 0.05)' : 'none',
                  transform: isActive ? 'translate(-1px, -1px)' : 'none',
                })}
              >
                {t[language].nav[link.key]}
              </NavLink>
            ))}
          </nav>

          {/* Toggles */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            {/* Language Toggle */}
            <button onClick={toggleLanguage}
              style={{
                display: 'flex', alignItems: 'center', gap: '0.4rem',
                background: 'var(--bg-surface)', border: '1px solid var(--border)', borderRadius: '6px',
                padding: '0.4rem 0.6rem', cursor: 'pointer', transition: 'all 0.2s', color: 'var(--text-primary)',
                fontFamily: 'JetBrains Mono, monospace', fontSize: '0.8rem', fontWeight: 700
              }}
              onMouseOver={e => e.currentTarget.style.background = 'var(--bg-pastel-blue)'}
              onMouseOut={e => e.currentTarget.style.background = 'var(--bg-surface)'}>
              <Globe size={16} />
              <span>{language === 'en' ? 'EN' : 'ES'}</span>
            </button>
          </div>

          {/* Mobile burger */}
          <button
            className="mobile-burger"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-primary)', padding: '0.25rem', display: 'flex' }}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            style={{
              background: 'var(--bg-primary)',
              borderTop: '1px solid var(--border)',
              borderBottom: '1px solid var(--border)',
              overflow: 'hidden',
            }}
          >
            <nav style={{ padding: '1rem var(--page-gutter)', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {navLinkKeys.map(link => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === '/'}
                  onClick={() => setMenuOpen(false)}
                  style={({ isActive }) => ({
                    padding: '0.75rem 1rem',
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    fontFamily: 'JetBrains Mono, monospace',
                    textDecoration: 'none',
                    color: 'var(--text-primary)',
                    background: isActive ? 'var(--bg-pastel-blue)' : 'transparent',
                    border: isActive ? '1px solid var(--border)' : '1px solid transparent',
                    boxShadow: isActive ? '0 2px 4px rgb(0 0 0 / 0.05)' : 'none',
                  })}
                >
                  {t[language].nav[link.key]}
                </NavLink>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (min-width: 768px) {
          .desktop-nav { display: flex !important; }
          .mobile-burger { display: none !important; }
        }
        @media (max-width: 767px) {
          .desktop-nav { display: none !important; }
          .brand-text { font-size: 0.78rem !important; }
        }
        @media (max-width: 360px) {
          .brand-text span { display: none; }
        }
      `}</style>
    </motion.header>
  )
}
