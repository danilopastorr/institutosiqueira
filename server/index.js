import express      from 'express'
import path         from 'path'
import { fileURLToPath } from 'url'
import { Client }   from '@notionhq/client'
import dotenv       from 'dotenv'
import cors         from 'cors'

dotenv.config()

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const app       = express()
const PORT      = process.env.PORT || 3000

const notion = new Client({ auth: process.env.NOTION_TOKEN })
const DB_ID  = process.env.NOTION_DATABASE_ID

// ── Helpers ──────────────────────────────────────────
function rt(arr=[]) { return arr.map(r=>r.plain_text).join('') }

function slugify(str) {
  return str.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'')
    .replace(/[^a-z0-9\s-]/g,'').trim().replace(/\s+/g,'-')
}

function estimateReadTime(blocks=[]) {
  const words = blocks.map(b=>{
    const t=b.type; return rt(b[t]?.rich_text||[])
  }).join(' ').split(/\s+/).length
  return Math.max(1, Math.ceil(words/200))
}

function mapPage(page) {
  const p = page.properties
  const title = rt(p.Title?.title || p.Nome?.title || [])
  const slug  = rt(p.Slug?.rich_text || []) || slugify(title)
  return {
    id:          page.id,
    slug,
    title,
    excerpt:     rt(p.Excerpt?.rich_text || p.Resumo?.rich_text || []),
    cover:       page.cover?.external?.url || page.cover?.file?.url || null,
    category:    p.Categoria?.select?.name || p.Category?.select?.name || 'Geral',
    tags:        (p.Tags?.multi_select || []).map(t=>t.name),
    author:      rt(p.Autor?.rich_text || []) || 'Paulinho Siqueira',
    publishedAt: p.Data?.date?.start || p.PublishedAt?.date?.start || page.created_time,
    readTime:    null,
  }
}

function mapBlock(block) {
  const t = block.type
  if (t === 'image') {
    const img = block.image
    return { type:'image', content:{ url:img.external?.url||img.file?.url, caption:rt(img.caption||[]) } }
  }
  if (t === 'divider') return { type:'divider', content:'' }
  const rich = block[t]?.rich_text || []
  if (!rich.length) return null
  return { type:t, content:rt(rich) }
}

// ── CORS ──────────────────────────────────────────────
app.use(cors({
  origin: ['http://localhost:5173', 'https://institutosiqueira.com.br'],
  methods: ['GET','OPTIONS'],
}))
app.use(express.json())

// ── GET /api/notion/posts ─────────────────────────────
app.get('/api/notion/posts', async (req, res) => {
  try {
    const { pageSize=12, cursor, category } = req.query

    const filter = category
      ? { property:'Categoria', select:{ equals:category } }
      : { property:'Status', select:{ equals:'Publicado' } }

    const response = await notion.databases.query({
      database_id:  DB_ID,
      filter,
      sorts:        [{ property:'Data', direction:'descending' }],
      page_size:    Number(pageSize),
      start_cursor: cursor || undefined,
    })

    res.json({
      posts:      response.results.map(mapPage),
      nextCursor: response.next_cursor,
      hasMore:    response.has_more,
    })
  } catch(err) {
    console.error('GET /api/notion/posts:', err.message)
    res.status(500).json({ error:'Notion query failed', detail:err.message })
  }
})

// ── GET /api/notion/posts/:slug ───────────────────────
app.get('/api/notion/posts/:slug', async (req, res) => {
  try {
    const { slug } = req.params

    const response = await notion.databases.query({
      database_id: DB_ID,
      filter: { property:'Slug', rich_text:{ equals:slug } },
      page_size: 1,
    })

    if (!response.results.length) return res.status(404).json({ error:'Not found' })

    const page  = response.results[0]
    const post  = mapPage(page)

    // Fetch all blocks
    const rawBlocks = []
    let bc
    do {
      const r = await notion.blocks.children.list({ block_id:page.id, page_size:100, start_cursor:bc })
      rawBlocks.push(...r.results)
      bc = r.has_more ? r.next_cursor : undefined
    } while (bc)

    post.blocks   = rawBlocks.map(mapBlock).filter(Boolean)
    post.readTime = estimateReadTime(rawBlocks)

    res.json(post)
  } catch(err) {
    console.error('GET /api/notion/posts/:slug:', err.message)
    res.status(500).json({ error:'Notion fetch failed', detail:err.message })
  }
})

// ── Serve React build in production ──────────────────
const DIST = path.join(__dirname, '..', 'dist')
app.use(express.static(DIST))
app.get('*', (_req, res) => res.sendFile(path.join(DIST, 'index.html')))

app.listen(PORT, () => {
  console.log(`✓ Instituto Siqueira rodando em http://localhost:${PORT}`)
  if (!process.env.NOTION_TOKEN)       console.warn('⚠  NOTION_TOKEN não configurado')
  if (!process.env.NOTION_DATABASE_ID) console.warn('⚠  NOTION_DATABASE_ID não configurado')
})
