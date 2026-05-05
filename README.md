# Instituto Siqueira — institutosiqueira.com.br

Site institucional de Paulinho Siqueira — Engenheiro da Mente.

## Stack
- **React 18** + **Vite 5** + **React Router 6**
- **react-helmet-async** — SEO dinâmico por página
- **Express + Node.js** — API proxy para Notion (blog)
- **@notionhq/client** — Notion como CMS do blog
- Canvas HTML5 — rosto de circuito animado (visual aprovado)
- CSS Variables puro (sem Tailwind, sem UI lib)

## Estrutura
```
src/
├── App.jsx                      ← router + canvas global + layout
├── assets/images.js             ← fotos e logo em base64
├── styles/global.css            ← tokens, utilitários, keyframes
├── hooks/useReveal.js           ← scroll reveal
├── lib/notion.js                ← cliente frontend da API
├── components/
│   ├── CircuitCanvas.jsx        ← canvas fixo global (rosto de circuito)
│   ├── Navbar.jsx + .css        ← nav com hamburguer mobile
│   ├── ProgramList.jsx          ← accordion // PROG_XX compartilhado
│   ├── SEO.jsx                  ← meta tags, OG, Schema.org
│   └── shared.jsx               ← Footer + WAFloat
└── pages/
    ├── Home.jsx + .css          ← hero animado + programas + depoimentos
    ├── pages.jsx                ← Programas, Diagnosticos, Historia, Contato
    ├── Blog.jsx + .css          ← lista com filtro por categoria
    └── BlogPost.jsx             ← artigo completo com blocos Notion
server/
└── index.js                     ← Express + Notion API proxy
public/
├── robots.txt
└── sitemap.xml
```

## Rotas
| Rota            | Página                      |
|-----------------|-----------------------------|
| `/`             | Início                      |
| `/programas`    | Programas de Desenvolvimento|
| `/diagnosticos` | Diagnósticos NEURA + LUX    |
| `/historia`     | Minha História              |
| `/contato`      | Contato + Formulário WA     |
| `/blog`         | Blog (lista com filtros)    |
| `/blog/:slug`   | Artigo completo             |

## Como rodar

```bash
npm install

# Desenvolvimento (2 terminais)
npm run dev          # frontend → localhost:5173
npm run dev:server   # API      → localhost:3000

# Produção
npm run build
npm start            # serve tudo na porta 3000
```

## Blog — configuração rápida

Veja **NOTION_SETUP.md** para o passo a passo completo (15 min, uma vez só).

```bash
cp .env.example .env
# Editar NOTION_TOKEN e NOTION_DATABASE_ID
```

## Deploy no VPS (Nginx)

```nginx
server {
  listen 80;
  server_name institutosiqueira.com.br www.institutosiqueira.com.br;

  location / {
    proxy_pass http://localhost:3000;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_cache_bypass $http_upgrade;
  }
}
```

```bash
npm run build
npm start
# ou com PM2:
pm2 start server/index.js --name instituto-siqueira
pm2 save
```

## Personalização rápida

| O que mudar | Onde |
|---|---|
| Fotos e logo | `src/assets/images.js` |
| Depoimentos | `src/pages/Home.jsx` — array `testimonials` |
| Programas | `src/components/ProgramList.jsx` — array `PROGRAMS` |
| WhatsApp | buscar `5511920926873` |
| Cores | `src/styles/global.css` — `:root` |
| Links sociais | `src/components/shared.jsx` — `Footer` |
| Links diagnósticos | `src/pages/Home.jsx` e `pages.jsx` |
