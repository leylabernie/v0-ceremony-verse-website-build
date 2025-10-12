export default function Logo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 300 80" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* Sage green vine and leaves */}
      <path
        d="M 20 40 Q 30 20, 50 30 Q 70 40, 90 25 Q 110 10, 130 20"
        stroke="#9caf88"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />

      {/* Sage leaves */}
      <ellipse cx="35" cy="25" rx="8" ry="12" fill="#9caf88" opacity="0.7" transform="rotate(-30 35 25)" />
      <ellipse cx="75" cy="32" rx="7" ry="11" fill="#9caf88" opacity="0.7" transform="rotate(20 75 32)" />
      <ellipse cx="115" cy="15" rx="8" ry="12" fill="#9caf88" opacity="0.7" transform="rotate(-15 115 15)" />

      {/* Blush pink flowers */}
      <circle cx="50" cy="28" r="4" fill="#e8b4b8" opacity="0.8" />
      <circle cx="48" cy="26" r="3" fill="#e8b4b8" opacity="0.6" />
      <circle cx="52" cy="26" r="3" fill="#e8b4b8" opacity="0.6" />

      <circle cx="95" cy="22" r="4" fill="#e8b4b8" opacity="0.8" />
      <circle cx="93" cy="20" r="3" fill="#e8b4b8" opacity="0.6" />
      <circle cx="97" cy="20" r="3" fill="#e8b4b8" opacity="0.6" />

      {/* Calligraphic "C" */}
      <path
        d="M 160 25 Q 145 15, 140 30 Q 135 45, 145 55 Q 155 65, 170 60"
        stroke="#36454f"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Calligraphic "V" */}
      <path
        d="M 175 20 Q 185 40, 195 60 M 195 60 Q 205 40, 215 20"
        stroke="#36454f"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* More vines wrapping around letters */}
      <path
        d="M 165 50 Q 175 55, 185 50 Q 195 45, 205 50"
        stroke="#9caf88"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      />

      {/* Small leaves on right vine */}
      <ellipse cx="180" cy="52" rx="5" ry="8" fill="#9caf88" opacity="0.6" transform="rotate(45 180 52)" />
      <ellipse cx="200" cy="51" rx="5" ry="8" fill="#9caf88" opacity="0.6" transform="rotate(-30 200 51)" />

      {/* Small pink accent flower */}
      <circle cx="190" cy="48" r="3" fill="#e8b4b8" opacity="0.7" />

      {/* "CeremonyVerse" text below */}
      <text x="150" y="75" fontFamily="serif" fontSize="12" fill="#36454f" letterSpacing="1">
        CeremonyVerse
      </text>
    </svg>
  )
}
