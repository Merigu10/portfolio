const statusConfig = {
  done: { label: 'Done', color: '#10B981', bg: 'rgba(16,185,129,0.1)', border: 'rgba(16,185,129,0.25)' },
  building: { label: 'Building', color: '#F59E0B', bg: 'rgba(245,158,11,0.1)', border: 'rgba(245,158,11,0.25)' },
  experimenting: { label: 'Experimenting', color: '#A78BFA', bg: 'rgba(124,58,237,0.1)', border: 'rgba(124,58,237,0.25)' },
}

export default function StatusBadge({ status }) {
  const config = statusConfig[status] || statusConfig.experimenting
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
      padding: '0.2rem 0.65rem', borderRadius: '9999px',
      fontSize: '0.72rem', fontWeight: 600,
      fontFamily: 'JetBrains Mono, monospace',
      color: config.color, background: config.bg,
      border: `1px solid ${config.border}`,
    }}>
      <span style={{
        width: '6px', height: '6px', borderRadius: '50%',
        background: config.color,
        animation: status === 'building' ? 'pulse 2s infinite' : 'none',
      }} />
      {config.label}
      <style>{`@keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }`}</style>
    </span>
  )
}
