// Caminho onde o site vai morar no servidor, se não for na raiz do domínio
// (ex: "/palmsoft" pra testar em algo como http://IP/palmsoft/). Deixe sem
// definir (ou vazio) pra build de produção normal, na raiz do domínio.
// Uso: NEXT_PUBLIC_BASE_PATH=/palmsoft npm run build
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

/** @type {import('next').NextConfig} */
const nextConfig = {
  // gera .next/standalone: um servidor Node mínimo com só as dependências
  // que o build realmente usa — ideal pra empacotar em uma imagem Docker.
  output: 'standalone',
  basePath,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    // sem otimização on-the-fly (evita depender do binário nativo do sharp na imagem)
    unoptimized: true,
  },
}

export default nextConfig
