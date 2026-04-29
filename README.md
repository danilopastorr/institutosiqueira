# Instituto Siqueira — institutosiqueira.com.br

Site institucional de Paulinho Siqueira — Engenheiro da Mente.

## Stack

- **React 18** + **Vite 5**
- CSS Modules por componente (sem dependências de UI externas)
- Fontes: Bebas Neue, Cormorant Garamond, DM Mono (Google Fonts)

## Estrutura

```
instituto-siqueira/
├── index.html
├── vite.config.js
├── package.json
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── styles/
    │   └── global.css
    ├── hooks/
    │   ├── useReveal.js      # scroll reveal via IntersectionObserver
    │   └── useCursor.js      # cursor customizado (apenas desktop)
    └── components/
        ├── Cursor.*
        ├── WAFloat.*         # botão flutuante WhatsApp
        ├── Navbar.*          # nav com hamburguer mobile
        ├── Hero.*
        ├── Marquee.*
        ├── About.*
        ├── Credentials.*
        ├── Programs.*
        ├── International.*
        ├── Podcast.*
        ├── Testimonials.*
        ├── Academia.*
        ├── Contact.*         # form → WhatsApp
        └── Footer.*
```

## Instalação e execução

```bash
# instalar dependências
npm install

# modo desenvolvimento
npm run dev

# build de produção
npm run build

# preview do build
npm run preview
```

## Deploy

O projeto gera um build estático em `/dist` — compatível com:
- **Netlify**: arrastar pasta `dist` ou conectar repositório
- **Vercel**: `vercel --prod`
- **VPS / Nginx**: servir a pasta `dist`

## Personalização

| O que mudar | Onde |
|---|---|
| Foto do hero | `src/components/Hero.jsx` — substituir `.portrait-initials` por `<img>` |
| Depoimentos reais | `src/components/Testimonials.jsx` — array `testimonials` |
| Links sociais | `src/components/Footer.jsx` e `Navbar.jsx` |
| WhatsApp | buscar `5511920926873` e substituir |
| Cor principal | `src/styles/global.css` — variáveis CSS `:root` |
