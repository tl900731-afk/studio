import { cn } from "@/lib/utils";

export const Logo = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 125"
    className={cn("w-8 h-8", className)}
    {...props}
  >
    <defs>
      <linearGradient id="eye-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="50%" style={{ stopColor: "hsl(var(--primary))", stopOpacity: 1 }} />
        <stop offset="50%" style={{ stopColor: "hsl(var(--accent))", stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    
    {/* Blue face */}
    <path
      d="M100 10 L50 10 L40 0 L40 10 L30 20 L55 70 L45 80 L55 90 L45 100"
      stroke="hsl(var(--primary))"
      strokeWidth="4"
      fill="none"
      strokeLinejoin="round"
      strokeLinecap="round"
    />
    
    {/* Green face */}
    <path
      d="M0 25 L50 25 L60 15 L35 65 L45 75 L35 85 L45 95"
      stroke="hsl(var(--accent))"
      strokeWidth="4"
      fill="none"
      strokeLinejoin="round"
      strokeLinecap="round"
    />

    {/* Eye */}
    <circle cx="48" cy="45" r="8" fill="url(#eye-gradient)" />
    
    {/* Text */}
    <text
      x="50"
      y="118"
      fontFamily="var(--font-headline)"
      fontSize="16"
      fill="hsl(var(--foreground))"
      textAnchor="middle"
      fontWeight="bold"
    >
      DI CARA
    </text>
  </svg>
);
