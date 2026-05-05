# Como configurar o Notion como CMS do Blog

**Tempo estimado: 15 minutos. Você só faz isso uma vez.**

---

## Passo 1 — Criar a Integração no Notion

1. Acesse: **https://www.notion.so/my-integrations**
2. Clique em **"+ Nova integração"**
3. Preencha:
   - Nome: `Instituto Siqueira Blog`
   - Tipo: **Interno**
4. Clique em **"Salvar"**
5. Copie o **"Token secreto interno"** (começa com `secret_...`)
6. Cole no `.env`:
   ```
   NOTION_TOKEN=secret_xxxxxxxxxxxxxxxxxxxxxxxx
   ```

---

## Passo 2 — Criar o Banco de Dados do Blog

1. No Notion, crie uma nova página em qualquer workspace
2. Digite `/banco de dados` e escolha **"Banco de dados — Página inteira"**
3. Nomeie: `Blog — Instituto Siqueira`

### Colunas obrigatórias:

| Nome       | Tipo          | Observação                            |
|------------|---------------|---------------------------------------|
| `Title`    | Título        | Já existe por padrão                  |
| `Slug`     | Texto         | URL do artigo (ex: `como-liderar`)    |
| `Excerpt`  | Texto         | Resumo curto (1-2 frases)             |
| `Categoria`| Seleção       | Comunicação, Liderança, PNL...        |
| `Tags`     | Multisseleção | Palavras-chave do artigo              |
| `Status`   | Seleção       | `Rascunho` ou `Publicado`             |
| `Data`     | Data          | Data de publicação                    |
| `Autor`    | Texto         | Deixe vazio = usa "Paulinho Siqueira" |

### Opções da coluna `Categoria`:
- Comunicação
- Liderança
- PNL
- Neurociência
- Carreira
- Coaching

### Opções da coluna `Status`:
- Rascunho
- Publicado

---

## Passo 3 — Conectar a Integração ao Banco

1. Abra o banco de dados
2. Clique em **"..."** no canto superior direito
3. Vá em **"Conexões"** → **"Conectar a"**
4. Encontre `Instituto Siqueira Blog` e confirme

---

## Passo 4 — Copiar o ID do Banco de Dados

A URL do banco será algo como:
```
https://www.notion.so/SEU-WORKSPACE/xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx?v=...
```

O ID são os **32 caracteres** antes do `?v=`. Cole no `.env`:
```
NOTION_DATABASE_ID=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

---

## Passo 5 — Escrever o primeiro artigo

1. Abra o banco de dados no Notion
2. Clique em **"+ Novo"**
3. Preencha:
   - **Title**: "O erro de comunicação que destrói equipes silenciosamente"
   - **Slug**: `erro-comunicacao-destroi-equipes`
   - **Excerpt**: "A maioria dos líderes comete esse erro todo dia sem perceber."
   - **Categoria**: Comunicação
   - **Status**: Publicado
   - **Data**: hoje
4. Abra a página e escreva o artigo — parágrafos, títulos, listas, imagens
5. Pronto. Aparece no site em segundos.

---

## Passo 6 — Rodar o projeto

```bash
# Copiar e configurar variáveis
cp .env.example .env
# Editar com seus tokens
nano .env

# Instalar dependências
npm install

# Desenvolvimento (em dois terminais)
npm run dev          # frontend: localhost:5173
npm run dev:server   # API:      localhost:3000

# Produção
npm run build
npm start            # serve tudo na porta 3000
```

---

## Dicas de SEO para os artigos

### Slug (URL) — use palavras que as pessoas pesquisam:
```
✅ como-melhorar-comunicacao-equipe
✅ neurolideranca-o-que-e
✅ pnl-para-lideres-empresariais
❌ artigo-1
❌ post-novo
```

### Os 8 primeiros artigos sugeridos:
1. "O erro de comunicação que destrói equipes silenciosamente"
2. "O que neuroliderança realmente significa — e por que importa"
3. "5 técnicas de PNL que todo líder deveria dominar"
4. "Por que treinamentos motivacionais não mudam comportamento"
5. "Rapport: a habilidade invisível dos comunicadores de alto impacto"
6. "Como a neurociência explica por que reuniões não funcionam"
7. "Comunicação magnética: o que separa líderes que influenciam dos que só falam"
8. "O custo real de uma equipe que não se comunica bem"
