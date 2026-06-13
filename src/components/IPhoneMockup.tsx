import './IPhoneMockup.css';

const WAVEFORM_HEIGHTS = [20, 35, 55, 42, 28, 60, 38, 50, 24, 65, 44, 30, 58, 40, 22, 52, 36, 62, 28, 45, 32];

const SONG_LIST = [
  { title: "Golden Years", sub: "Anniversary" },
  { title: "Wild Hearts",  sub: "Adventure"  },
  { title: "New Chapter",  sub: "Wedding"    },
];

export default function IPhoneMockup() {
  return (
    <svg
      className="hero-mockup"
      viewBox="0 0 390 844"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* ── Definitions ── */}
      <defs>
        <linearGradient id="screenBg" x1="14" y1="14" x2="376" y2="830" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0f0f0f"/>
          <stop offset="1" stopColor="#1c1c1e"/>
        </linearGradient>
        <linearGradient id="btnGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop stopColor="#ff0000"/>
          <stop offset="1" stopColor="#ff4444"/>
        </linearGradient>
      </defs>

      {/* ── Phone body ── */}
      <rect x="1" y="1" width="388" height="842" rx="54" fill="#1a1a1a" stroke="#3a3a3a" strokeWidth="2"/>
      <rect x="6" y="6" width="378" height="832" rx="50" fill="#0d0d0d"/>

      {/* ── Screen ── */}
      <rect x="14" y="14" width="362" height="816" rx="44" fill="url(#screenBg)"/>

      {/* ── Dynamic island ── */}
      <rect x="148" y="26" width="94" height="32" rx="16" fill="#0d0d0d"/>

      {/* ── Status bar: time ── */}
      <text x="30" y="58" fontFamily="system-ui" fontSize="13" fill="#888" fontWeight="600">9:41</text>

      {/* ── App logo (top-right) ── */}
      <circle cx="340" cy="52" r="16" fill="#FF0000"/>
      <text x="333" y="57" fontFamily="system-ui" fontSize="13" fill="#fff" fontWeight="700">♪</text>

      {/* ── Now-playing card ── */}
      <rect x="22" y="80" width="346" height="440" rx="28" fill="#1c1c1c"/>

      {/* Song title & meta */}
      <text x="38" y="144" fontFamily="system-ui" fontSize="22" fill="#ffffff" fontWeight="600">Sarah's Birthday</text>
      <text x="38" y="170" fontFamily="system-ui" fontSize="14" fill="#888">Upbeat Indie Pop · 2:34</text>

      {/* Cover art placeholder */}
      <rect x="38" y="188" width="314" height="96" rx="14" fill="#2a2a2a"/>
      <text x="168" y="243" fontFamily="system-ui" fontSize="36" fill="#FF0000" textAnchor="middle">♫</text>

      {/* Waveform */}
      {WAVEFORM_HEIGHTS.map((h, i) => (
        <rect
          key={i}
          x={38 + i * 15}
          y={305 - h / 2}
          width="7"
          height={h}
          rx="4"
          fill={i === 10 ? '#FF0000' : '#333'}
        />
      ))}

      {/* Progress bar */}
      <rect x="38" y="340" width="314" height="4" rx="2" fill="#333"/>
      <rect x="38" y="340" width="140" height="4" rx="2" fill="#FF0000"/>
      <circle cx="178" cy="342" r="6" fill="#FF0000"/>

      {/* Playback controls */}
      <text x="100" y="400" fontFamily="system-ui" fontSize="22" fill="#888">⏮</text>
      <circle cx="195" cy="390" r="34" fill="#FF0000"/>
      <polygon points="187,375 187,405 215,390" fill="#fff"/>
      <text x="272" y="400" fontFamily="system-ui" fontSize="22" fill="#888">⏭</text>

      {/* Gift button */}
      <rect x="38" y="432" width="314" height="52" rx="26" fill="url(#btnGrad)"/>
      <text x="145" y="464" fontFamily="system-ui" fontSize="15" fill="#fff" fontWeight="500">🎁  Gift this song</text>

      {/* ── Song list ── */}
      {SONG_LIST.map((s, i) => (
        <g key={i}>
          <rect x="22" y={548 + i * 78} width="346" height="68" rx="18" fill="#1c1c1c"/>
          <circle cx="62" cy={582 + i * 78} r="20" fill="#2a2a2a"/>
          <text x="56" y={587 + i * 78} fontFamily="system-ui" fontSize="16" fill="#FF0000">♪</text>
          <text x="92" y={577 + i * 78} fontFamily="system-ui" fontSize="14" fill="#ffffff" fontWeight="500">{s.title}</text>
          <text x="92" y={595 + i * 78} fontFamily="system-ui" fontSize="12" fill="#888">{s.sub}</text>
        </g>
      ))}

      {/* ── Home indicator ── */}
      <rect x="153" y="818" width="84" height="5" rx="2.5" fill="#444"/>
    </svg>
  );
}
