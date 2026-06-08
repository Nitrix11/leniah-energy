export function EnergyOrb({ className = '' }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <svg viewBox="0 0 400 400" className="w-full h-full animate-float-slow">
        <defs>
          <linearGradient id="r1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#E53935" />
            <stop offset="100%" stopColor="#E8B10A" />
          </linearGradient>
          <linearGradient id="r2" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#4CAF50" />
            <stop offset="100%" stopColor="#E8B10A" />
          </linearGradient>
          <linearGradient id="r3" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#2196F3" />
            <stop offset="100%" stopColor="#4CAF50" />
          </linearGradient>
          <radialGradient id="core" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0%" stopColor="#fff" stopOpacity="0.9" />
            <stop offset="60%" stopColor="#6b7280" />
            <stop offset="100%" stopColor="#1f2937" />
          </radialGradient>
        </defs>
        <g transform="translate(200 200)">
          <ellipse cx="0" cy="0" rx="140" ry="55" stroke="url(#r1)" strokeWidth="22" fill="none" opacity="0.9">
            <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="20s" repeatCount="indefinite" />
          </ellipse>
          <ellipse cx="0" cy="0" rx="140" ry="55" stroke="url(#r2)" strokeWidth="22" fill="none" opacity="0.9" transform="rotate(60)">
            <animateTransform attributeName="transform" type="rotate" from="60" to="420" dur="22s" repeatCount="indefinite" />
          </ellipse>
          <ellipse cx="0" cy="0" rx="140" ry="55" stroke="url(#r3)" strokeWidth="22" fill="none" opacity="0.9" transform="rotate(120)">
            <animateTransform attributeName="transform" type="rotate" from="120" to="480" dur="24s" repeatCount="indefinite" />
          </ellipse>
          <circle cx="0" cy="0" r="38" fill="url(#core)" />
          <circle cx="-10" cy="-12" r="10" fill="#fff" opacity="0.5" />
        </g>
      </svg>
    </div>
  )
}
