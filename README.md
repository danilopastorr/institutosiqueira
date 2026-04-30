# Instituto Siqueira — React + Docker

Projeto convertido do HTML original para React com Vite, pronto para subir em VPS usando Docker, Nginx e Traefik.

## Rodar localmente

```bash
npm install
npm run dev
```

Acesse: `http://localhost:5173`

## Build local

```bash
npm run build
npm run preview
```

## Subir com Docker no VPS

```bash
docker compose up -d --build
```

## Traefik

O `docker-compose.yml` já usa a rede externa `root_default` e o resolver `mytlschallenge`, seguindo o padrão do seu VPS.

Altere os hosts nas labels se o domínio final for diferente.
