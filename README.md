# Site PalmSoft

Site institucional da PalmSoft Tecnologia, feito em [Next.js](https://nextjs.org).

## Desenvolvimento local

Pré-requisito: Node.js 20+.

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador. A página inicial fica em `app/page.tsx`.

## Deploy em produção (Docker)

O site roda como um servidor Node dentro de um container Docker, escutando na porta **3000** e servindo tudo na raiz (`/`).

Pré-requisito no servidor: Docker e Docker Compose instalados.

```bash
git clone <url-deste-repositorio> palmsoft-site
cd palmsoft-site
docker compose up -d --build
```

Isso builda a imagem e sobe o container em background. O site fica disponível em `http://SERVIDOR:3000/`. Se o servidor já tem um proxy (Nginx/Apache) configurado, basta apontá-lo para a porta 3000.

Se preferir sem `docker compose`, o equivalente manual é:

```bash
docker build -t palmsoft-site .
docker run -d --name palmsoft-site --restart unless-stopped -p 3000:3000 palmsoft-site
```

### Comandos úteis

| O que | Comando |
|---|---|
| Ver logs | `docker compose logs -f` |
| Parar | `docker compose down` |
| Reiniciar | `docker compose restart` |
| Atualizar pra nova versão | `git pull && docker compose up -d --build` |

### Variável de ambiente opcional

Por padrão o site é servido na raiz do domínio, sem nenhuma configuração extra. Caso um dia seja necessário publicá-lo dentro de uma subpasta (ex: `http://servidor/palmsoft/`), defina `NEXT_PUBLIC_BASE_PATH` antes do build:

```bash
NEXT_PUBLIC_BASE_PATH=/palmsoft docker compose up -d --build
```

## Estrutura

- `app/` — páginas e rotas (Next.js App Router)
- `components/` — componentes de UI
- `lib/i18n/` — dicionários e contexto de tradução PT/EN
- `public/` — imagens e demais arquivos estáticos

## Saiba mais

- [Documentação do Next.js](https://nextjs.org/docs)
