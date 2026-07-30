import Image from "next/image"
import { cn } from "@/lib/utils"

export function Logo({ className }: { className?: string }) {
  return (
    <Image
      src="/LOGOPALM.avif"
      alt="PalmSoft Tecnologia"
      width={246}
      height={64}
      priority
      className={cn("h-8 w-auto", className)}
    />
  )
}
