import NextImage, { type ImageProps } from "next/image"
import { withBasePath } from "@/lib/base-path"

/**
 * Substituto direto de next/image: com images.unoptimized (obrigatório no
 * export estático), o <Image> do Next NÃO aplica o basePath sozinho no src
 * — só faz isso quando passa pelo otimizador. Esse wrapper corrige isso,
 * então todo componente pode continuar usando <Image src="/algo.jpg" />
 * normalmente, sem se preocupar com a subpasta do deploy.
 */
export default function AppImage({ src, ...props }: ImageProps) {
  const resolvedSrc = typeof src === "string" && src.startsWith("/") ? withBasePath(src) : src
  return <NextImage src={resolvedSrc} {...props} />
}
