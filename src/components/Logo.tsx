type LogoProps = {
  size?: number;
  className?: string;
};

/**
 * Sutherland Studio mark — a simple fig leaf.
 * Single black silhouette with a short stem; reads at any size.
 */
export function Logo({ size = 32, className = "" }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="-32 -32 64 64"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M 0 -28 Q 0 -25 0 -22"
        stroke="currentColor"
        strokeWidth={2.4}
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M -3 -22 Q 0 -22 3 -22
           Q 12 -22 20 -14
           Q 14 -8 10 -10
           Q 22 -2 18 8
           Q 12 12 8 6
           Q 12 22 0 30
           Q -12 22 -8 6
           Q -12 12 -18 8
           Q -22 -2 -10 -10
           Q -14 -8 -20 -14
           Q -12 -22 -3 -22 Z"
        fill="currentColor"
      />
    </svg>
  );
}
