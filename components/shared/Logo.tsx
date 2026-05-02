import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  showWordmark?: boolean;
}

export function Logo({ className, showWordmark = true }: LogoProps) {
  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <svg
        width="22"
        height="26"
        viewBox="0 0 22 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <defs>
          <linearGradient id="shield-grad" x1="0" y1="0" x2="22" y2="26">
            <stop offset="0%" stopColor="#A8D8FF" />
            <stop offset="100%" stopColor="#4D9CD6" />
          </linearGradient>
        </defs>
        <path
          d="M11 1L21 4.5V12.5C21 18.5 16.5 23 11 25C5.5 23 1 18.5 1 12.5V4.5L11 1Z"
          stroke="url(#shield-grad)"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M11 7L15 9V13.5C15 16 13 18.2 11 19C9 18.2 7 16 7 13.5V9L11 7Z"
          fill="url(#shield-grad)"
          fillOpacity="0.4"
          stroke="url(#shield-grad)"
          strokeWidth="1"
          strokeLinejoin="round"
        />
        <circle cx="11" cy="13" r="1.6" fill="#A8D8FF" />
      </svg>
      {showWordmark && (
        <span className="font-semibold tracking-[0.04em] text-[12.5px] text-[#E8EEF7]">
          ADAPTIVE<span className="text-[#7CC4FF]">·</span>ANTIVIRUS
        </span>
      )}
    </div>
  );
}
