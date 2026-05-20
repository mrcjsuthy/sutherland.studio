type LogoProps = {
  size?: number;
  className?: string;
  /** Tilt in degrees; defaults to a slight counter-clockwise lean. */
  tilt?: number;
};

/**
 * Sutherland Studio mark — a simple, slightly tilted fig leaf.
 */
export function Logo({ size = 32, className = "", tilt = -16 }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="-32 -32 64 64"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <g transform={`rotate(${tilt})`}>
        <path
          d="M 0 -28 Q 0 -25 0 -22"
          stroke="currentColor"
          strokeWidth={2.4}
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M -3 -22 Q 0 -22 3 -22
             Q 14 -22 24 -14
             Q 17 -7 12 -10
             Q 26 -2 22 8
             Q 14 12 9 6
             Q 13 22 0 30
             Q -13 22 -9 6
             Q -14 12 -22 8
             Q -26 -2 -12 -10
             Q -17 -7 -24 -14
             Q -14 -22 -3 -22 Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}
