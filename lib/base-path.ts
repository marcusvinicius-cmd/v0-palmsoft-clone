/**
 * Mesmo valor usado em next.config.mjs. O Next.js já ajusta sozinho os
 * caminhos gerados por <Image> e <Link>, mas qualquer <img>/<a href> escrito
 * à mão com caminho começando em "/" precisa passar por aqui — senão quebra
 * quando o site é publicado dentro de uma subpasta (ex: /palmsoft/).
 */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || ""

/** Prefixa um caminho absoluto ("/algo") com o basePath do build atual. */
export function withBasePath(path: string) {
  return `${BASE_PATH}${path}`
}
