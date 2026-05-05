import { useState, useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import SEO from '../components/SEO.jsx'
import { getPosts, getPostsByCategory } from '../lib/notion.js'
import './Blog.css'

const CATS = ['Todos','Comunicação','Liderança','PNL','Neurociência','Carreira','Coaching']

function SkeletonCard() {
  return (
    <div className="blog-card" style={{cursor:'default',pointerEvents:'none'}}>
      <div className="skel skel-cover" />
      <div className="bc-body">
        <div className="skel skel-tag" />
        <div className="skel skel-title" /><div className="skel skel-title2" />
        <div className="skel skel-text" /><div className="skel skel-text2" />
        <div className="skel skel-meta" />
      </div>
    </div>
  )
}

function BlogCard({ post }) {
  const nav  = useNavigate()
  const date = new Date(post.publishedAt).toLocaleDateString('pt-BR',{day:'2-digit',month:'short',year:'numeric'})
  return (
    <article className="blog-card" onClick={()=>nav(`/blog/${post.slug}`)} tabIndex={0} onKeyDown={e=>e.key==='Enter'&&nav(`/blog/${post.slug}`)}>
      {post.cover
        ? <div className="bc-cover" style={{backgroundImage:`url(${post.cover})`}} />
        : <div className="bc-cover bc-cover--default"><span className="bc-letter">{post.title[0]}</span></div>
      }
      <div className="bc-body">
        <span className="bc-cat">{post.category}</span>
        <h2 className="bc-title">{post.title}</h2>
        {post.excerpt && <p className="bc-excerpt">{post.excerpt}</p>}
        <div className="bc-meta">
          <span className="bc-date">{date}</span>
          {post.readTime && <span className="bc-read">{post.readTime} min</span>}
        </div>
      </div>
    </article>
  )
}

export default function Blog() {
  const nav = useNavigate()
  const [sp, setSp] = useSearchParams()
  const cat = sp.get('cat') || 'Todos'
  const [posts,    setPosts]    = useState([])
  const [loading,  setLoading]  = useState(true)
  const [error,    setError]    = useState(null)
  const [cursor,   setCursor]   = useState(null)
  const [hasMore,  setHasMore]  = useState(false)
  const [loadMore, setLoadMore] = useState(false)

  const load = async (c, cur) => {
    try {
      const d = c && c!=='Todos' ? await getPostsByCategory(c) : await getPosts({cursor:cur})
      if (cur) setPosts(p=>[...p,...d.posts])
      else setPosts(d.posts)
      setCursor(d.nextCursor)
      setHasMore(d.hasMore)
    } catch(e) { setError(e.message) }
  }

  useEffect(()=>{
    setLoading(true); setError(null)
    load(cat).finally(()=>setLoading(false))
  },[cat])

  useEffect(()=>{ window.scrollTo(0,0) },[])

  const setCat = c => { setPosts([]); setCursor(null); c==='Todos'?setSp({}):setSp({cat:c}) }

  const more = async () => { setLoadMore(true); await load(cat,cursor); setLoadMore(false) }

  return (
    <>
      <SEO
        title="Blog — Comunicação, Liderança e Comportamento Humano"
        description="Artigos práticos sobre comunicação magnética, liderança, PNL e neurociência aplicada ao desenvolvimento humano e corporativo."
        keywords="blog comunicação corporativa, artigos liderança, PNL prático, neurociência comportamento, desenvolvimento humano artigos"
        url="/blog"
      />

      <div className="blog-page-header">
        <div className="section-tag reveal">Blog</div>
        <h1 className="section-title reveal" style={{fontSize:'clamp(2.2rem,5vw,3.8rem)'}}>
          Comunicação, liderança<br /><em>e comportamento humano.</em>
        </h1>
        <p className="reveal" style={{fontSize:'.94rem',color:'var(--muted)',maxWidth:480,lineHeight:1.8,fontWeight:300,marginTop:'.75rem'}}>
          Artigos práticos toda semana sobre como se comunicar melhor, liderar com mais impacto e entender o que realmente move as pessoas.
        </p>
      </div>

      <div className="blog-filter">
        {CATS.map(c=>(
          <button key={c} className={`blog-filter-btn ${cat===c?'active':''}`} onClick={()=>setCat(c)}>{c}</button>
        ))}
      </div>

      <section style={{paddingTop:'2rem'}}>
        <div className="inner">
          {loading && <div className="blog-grid">{[...Array(6)].map((_,i)=><SkeletonCard key={i}/>)}</div>}
          {error && !loading && (
            <div style={{textAlign:'center',padding:'5rem 1rem',color:'var(--muted)'}}>
              <p>Não foi possível carregar os artigos.</p>
              {import.meta.env.DEV && <p style={{fontSize:'.78rem',marginTop:'.5rem',fontFamily:'monospace',color:'var(--gold)'}}>Configure NOTION_TOKEN e NOTION_DATABASE_ID no .env e rode: npm run dev:server</p>}
              <button className="btn-o" style={{marginTop:'1.5rem'}} onClick={()=>load(cat)}>Tentar novamente</button>
            </div>
          )}
          {!loading && !error && posts.length > 0 && (
            <>
              <div className="blog-grid">{posts.map(p=><BlogCard key={p.id} post={p}/>)}</div>
              {hasMore && (
                <div style={{textAlign:'center',marginTop:'3rem'}}>
                  <button className="btn-o" onClick={more} disabled={loadMore}>
                    {loadMore ? 'Carregando...' : 'Ver mais artigos'}
                  </button>
                </div>
              )}
            </>
          )}
          {!loading && !error && posts.length === 0 && (
            <div style={{textAlign:'center',padding:'5rem 1rem'}}>
              <div style={{fontSize:'3rem',marginBottom:'1rem'}}>✍</div>
              <h2 style={{fontFamily:"'Playfair Display',serif",fontSize:'1.5rem',color:'var(--white)',marginBottom:'.75rem'}}>Em breve os primeiros artigos.</h2>
              <p style={{color:'var(--muted)',fontSize:'.9rem'}}>Enquanto isso, siga <a href="https://www.instagram.com/paulosiqueira.vox/" target="_blank" rel="noopener noreferrer" style={{color:'var(--cyan)'}}>@paulosiqueira.vox</a></p>
              <button className="btn-c" onClick={()=>nav('/contato')} style={{marginTop:'2rem'}}>Falar com Paulinho</button>
            </div>
          )}
        </div>
      </section>

      <section className="bg2" style={{padding:'2.5rem var(--sp)',textAlign:'center'}}>
        <p style={{fontFamily:"'Outfit',sans-serif",fontSize:'.9rem',color:'var(--muted)',marginBottom:'1.25rem'}}>Quer receber os artigos direto no WhatsApp?</p>
        <a className="btn-c" href="https://wa.me/5511920926873?text=Quero%20receber%20os%20artigos%20do%20Instituto%20Siqueira!" target="_blank" rel="noopener noreferrer">Sim, quero receber</a>
      </section>
    </>
  )
}
