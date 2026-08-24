/** @type {import('next').NextConfig} */
const nextConfig = {
  // gera a pasta out/ com HTML/CSS/JS 100% estáticos — sem servidor Node.
  // é o formato certo para subir direto num Apache/hospedagem que só serve arquivos.
  output: 'export',
  // gera .../index.html em vez de ....html, para que o Apache sirva a pasta
  // como diretório (DirectoryIndex) sem precisar de nenhuma regra de rewrite
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    // obrigatório em export estático: não há servidor para otimizar imagens on-the-fly
    unoptimized: true,
  },
}

export default nextConfig
