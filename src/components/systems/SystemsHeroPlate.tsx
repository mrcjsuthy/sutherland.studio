/** Abstract engineering hero — sensors, boards, robotics, dashboards as inline SVG */
export function SystemsHeroPlate({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 640 480"
      className={className}
      aria-hidden
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="640" height="480" fill="var(--paper)" />
      <g opacity="0.14" stroke="#14130f" strokeWidth="1">
        {Array.from({ length: 13 }).map((_, i) => (
          <line key={`v${i}`} x1={i * 50} y1={0} x2={i * 50} y2={480} />
        ))}
        {Array.from({ length: 10 }).map((_, i) => (
          <line key={`h${i}`} x1={0} y1={i * 50} x2={640} y2={i * 50} />
        ))}
      </g>

      {/* Dashboard panel */}
      <rect x="48" y="56" width="220" height="140" fill="#14130f" opacity="0.92" />
      <rect x="60" y="72" width="80" height="6" fill="#ece6d8" opacity="0.5" />
      <rect x="60" y="88" width="120" height="4" fill="#c2410c" opacity="0.9" />
      <rect x="60" y="100" width="100" height="4" fill="#ece6d8" opacity="0.35" />
      <rect x="60" y="112" width="140" height="4" fill="#ece6d8" opacity="0.25" />
      <polyline
        points="60,170 90,150 120,158 150,120 180,130 210,95"
        fill="none"
        stroke="#e94e1b"
        strokeWidth="2"
      />
      <circle cx="210" cy="95" r="4" fill="#e94e1b" />

      {/* Circuit board */}
      <rect x="320" y="72" width="200" height="160" fill="#2a2823" />
      <rect x="340" y="92" width="24" height="24" fill="#c2410c" opacity="0.85" />
      <rect x="380" y="100" width="16" height="16" fill="#4a5d3a" />
      <rect x="420" y="88" width="20" height="20" fill="#b66d3a" />
      <path
        d="M 360 140 L 400 140 L 420 120 L 480 120"
        stroke="#ece6d8"
        strokeWidth="1.5"
        fill="none"
        opacity="0.5"
      />
      <path
        d="M 360 160 L 380 160 L 400 180 L 460 180"
        stroke="#ece6d8"
        strokeWidth="1"
        fill="none"
        opacity="0.35"
      />
      {[
        [350, 130],
        [390, 150],
        [430, 135],
        [470, 155],
      ].map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="3" fill="#ece6d8" opacity="0.6" />
      ))}

      {/* Sensor node */}
      <circle cx="120" cy="320" r="36" fill="none" stroke="#c2410c" strokeWidth="2" />
      <circle cx="120" cy="320" r="8" fill="#c2410c" />
      <line x1="120" y1="284" x2="120" y2="240" stroke="#14130f" strokeWidth="1.5" opacity="0.4" />
      <rect x="108" y="228" width="24" height="12" fill="#14130f" opacity="0.2" rx="2" />

      {/* Robot arm schematic */}
      <g transform="translate(380 280)">
        <rect x="0" y="80" width="48" height="12" fill="#14130f" opacity="0.25" />
        <line x1="24" y1="80" x2="24" y2="40" stroke="#14130f" strokeWidth="3" />
        <line x1="24" y1="40" x2="72" y2="8" stroke="#14130f" strokeWidth="2.5" />
        <line x1="72" y1="8" x2="110" y2="32" stroke="#c2410c" strokeWidth="2" />
        <circle cx="24" cy="80" r="6" fill="#2a2823" />
        <circle cx="72" cy="8" r="5" fill="#c2410c" />
      </g>

      {/* CAD wireframe */}
      <g transform="translate(480 56)" opacity="0.7">
        <path
          d="M 0 100 L 40 60 L 100 60 L 140 100 L 100 140 L 40 140 Z"
          fill="none"
          stroke="#8b8579"
          strokeWidth="1.2"
        />
        <line x1="40" y1="60" x2="40" y2="20" stroke="#8b8579" strokeWidth="1" />
        <line x1="100" y1="60" x2="100" y2="20" stroke="#8b8579" strokeWidth="1" />
        <line x1="40" y1="20" x2="100" y2="20" stroke="#8b8579" strokeWidth="1" />
        <line x1="0" y1="100" x2="40" y2="140" stroke="#8b8579" strokeWidth="0.8" opacity="0.5" />
      </g>

      {/* Workflow nodes */}
      <g transform="translate(48 360)">
        {[
          [0, 0],
          [70, 0],
          [140, 0],
          [210, 0],
        ].map(([x], i) => (
          <g key={i} transform={`translate(${x} 0)`}>
            <rect width="52" height="36" fill="#f3eee2" stroke="#14130f" strokeWidth="1" opacity="0.9" />
            <rect x="8" y="10" width="36" height="4" fill={i === 1 ? "#c2410c" : "#14130f"} opacity={i === 1 ? 1 : 0.25} />
            <rect x="8" y="20" width="28" height="3" fill="#14130f" opacity="0.15" />
          </g>
        ))}
        <path d="M 52 18 L 70 18" stroke="#14130f" strokeWidth="1" markerEnd="none" />
        <path d="M 122 18 L 140 18" stroke="#14130f" strokeWidth="1" />
        <path d="M 192 18 L 210 18" stroke="#14130f" strokeWidth="1" />
      </g>

      <text
        x="32"
        y="28"
        fontFamily="monospace"
        fontSize="10"
        letterSpacing="2"
        fill="#8b8579"
      >
        SYS · IOT · AUTO
      </text>
    </svg>
  );
}
