import { cn } from "@/lib/utils"

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <svg
        width="28"
        height="28"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="shrink-0"
      >
        <path
          d="M6 24 L16 6 L26 24 L20 24 L16 16 L12 24 Z"
          fill="currentColor"
        />
        <circle cx="16" cy="26" r="2" fill="currentColor" />
      </svg>
      <span className="text-lg font-semibold leading-none tracking-tight">
        Palm<span className="font-light">Soft</span>
        <span className="ml-1 block text-[9px] font-light uppercase tracking-[0.25em] opacity-70">
          Tecnologia
        </span>
      </span>
    </div>
  )
}
