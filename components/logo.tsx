import Image from "@/components/app-image"
import { cn } from "@/lib/utils"

export function Logo({ className }: { className?: string }) {
  return (
    <Image
      src="/palm-nova-export-02.png"
      alt="PalmSoft Tecnologia"
      width={1548}
      height={412}
      priority
      className={cn("h-8 w-auto", className)}
    />
  )
}
