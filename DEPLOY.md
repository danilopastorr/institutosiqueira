# Deploy — Instituto Siqueira no VPS

## Pré-requisitos
- VPS com Docker + Traefik já rodando
- Domínio `institutosiqueira.com.br` apontando para o IP do VPS
- Arquivo `.env` configurado com NOTION_TOKEN e NOTION_DATABASE_ID

---

## Deploy pela primeira vez

### 1. Copiar arquivos para o VPS

```bash
# No seu computador — enviar o projeto para o VPS
scp instituto-react-final.tar.gz usuario@IP_DO_VPS:/opt/

# No VPS
ssh usuario@IP_DO_VPS
cd /opt
tar -xzf instituto-react-final.tar.gz
mv instituto-react instituto-siqueira
cd instituto-siqueira
```

### 2. Configurar o .env no VPS

```bash
cp .env.example .env
nano .env
```

Cole seus dados:
```
NOTION_TOKEN=seutokenn
NOTION_DATABASE_ID=seutokendatabase
PORT=3000
```

Salve: `Ctrl+O` → `Enter` → `Ctrl+X`

### 3. Verificar o nome da rede do Traefik

```bash
docker network ls
```

Procure a rede do seu Traefik. Se o nome for diferente de `root_default`,
edite o `docker-compose.yml`:

```yaml
networks:
  traefik-net:
    external: true
    name: NOME_DA_SUA_REDE   # ← ajuste aqui
```

### 4. Subir o container

```bash
docker compose up -d --build
```

Acompanhe os logs:
```bash
docker compose logs -f
```

Deve aparecer:
```
✓ Instituto Siqueira rodando em http://localhost:3000
```

### 5. Testar

```bash
# Testar localmente no VPS
curl http://localhost:3000/api/notion/posts

# Deve retornar JSON com { posts: [], hasMore: false }
```

Acesse `https://institutosiqueira.com.br` no navegador.

---

## Atualizar o site (após mudanças)

```bash
cd /opt/instituto-siqueira

# Copiar novo tar do seu computador (se necessário)
# scp instituto-react-final.tar.gz usuario@IP:/opt/instituto-siqueira/

# Rebuild e restart
docker compose up -d --build
```

---

## Comandos úteis

```bash
# Ver status
docker compose ps

# Ver logs em tempo real
docker compose logs -f instituto

# Reiniciar sem rebuild
docker compose restart

# Parar
docker compose down

# Parar e remover volumes
docker compose down -v
```

---

## Verificar SSL (HTTPS)

O Traefik cuida do certificado Let's Encrypt automaticamente.
Após o primeiro deploy, aguarde 1-2 minutos e acesse `https://institutosiqueira.com.br`.

---

## Troubleshooting

**403 na API do Notion:**
- Verifique se o NOTION_TOKEN está correto no `.env`
- Verifique se a integração está conectada ao banco no Notion

**Site não carrega:**
- Verifique se o DNS do domínio aponta para o IP do VPS: `nslookup institutosiqueira.com.br`
- Verifique se o Traefik está rodando: `docker ps | grep traefik`
- Verifique os logs: `docker compose logs instituto`

**Rede Traefik não encontrada:**
- Rode `docker network ls` e ajuste o nome em `docker-compose.yml`
