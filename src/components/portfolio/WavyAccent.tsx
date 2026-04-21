interface WavyAccentProps {
  className?: string;
  /** width of the SVG viewBox proportionally — height is fixed at 24 */
  width?: number;
  strokeWidth?: number;
}

/**
 * A sinuous, animated gradient wave used as a decorative underline / accent.
 * Reuses the same neon gradient that animates in the rest of the design system.
 */
export const WavyAccent = ({ className = "", width = 600, strokeWidth = 4 }: WavyAccentProps) => {
  const gradientId = "wavy-accent-gradient";

  return (
    <svg
      viewBox={`0 0 ${width} 24`}
      width="100%"
      height="24"
      preserveAspectRatio="none"
      className={`overflow-visible ${className}`}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="hsl(var(--accent))">
            <animate
              attributeName="stop-color"
              values="hsl(220 100% 65%); hsl(245 100% 62%); hsl(285 90% 65%); hsl(220 100% 65%)"
              dur="6s"
              repeatCount="indefinite"
            />
          </stop>
          <stop offset="50%" stopColor="hsl(var(--primary))">
            <animate
              attributeName="stop-color"
              values="hsl(245 100% 62%); hsl(285 90% 65%); hsl(220 100% 65%); hsl(245 100% 62%)"
              dur="6s"
              repeatCount="indefinite"
            />
          </stop>
          <stop offset="100%" stopColor="hsl(var(--secondary))">
            <animate
              attributeName="stop-color"
              values="hsl(285 90% 65%); hsl(220 100% 65%); hsl(245 100% 62%); hsl(285 90% 65%)"
              dur="6s"
              repeatCount="indefinite"
            />
          </stop>
        </linearGradient>
        <filter id="wavy-glow" x="-20%" y="-50%" width="140%" height="200%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <path
        d={`M 0 12 Q ${width * 0.125} 0, ${width * 0.25} 12 T ${width * 0.5} 12 T ${width * 0.75} 12 T ${width} 12`}
        fill="none"
        stroke={`url(#${gradientId})`}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        filter="url(#wavy-glow)"
      />
    </svg>
  );
};
