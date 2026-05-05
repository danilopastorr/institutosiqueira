import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import SEO from '../components/SEO.jsx'
import { getPostBySlug } from '../lib/notion.js'

function Block({ block }) {
  switch (block.type) {
    case 'heading_1':     return <h2 className="bp-h1">{block.content}</h2>
    case 'heading_2':     return <h3 className="bp-h2">{block.content}</h3>
    case 'heading_3':     return <h4 className="bp-h3">{block.content}</h4>
    case 'paragraph':     return block.content ? <p className="bp-p">{block.content}</p> : <br />
    case 'bulleted_list_item':  return <li className="bp-li">{block.content}</li>
    case 'numbered_list_item':  return <li className="bp-li">{block.content}</li>
    case 'quote':         return <blockquote className="bp-quote">{block.content}</blockquote>
    case 'callout':       return <div className="bp-callout"><span>💡</span><p>{block.content}</p></div>
    case 'image':         return <figure><img src={block.content.url} alt={block.content.caption||''} className="bp-img"/>{block.content.caption&&<figcaption className="bp-figcap">{block.content.caption}</figcaption>}</figure>
    case 'divider':       return <hr className="bp-divider" />
    default:              return null
  }
}

function renderBlocks(blocks) {
  const out = []; let i = 0
  while (i < blocks.length) {
    const b = blocks[i]
    if (b.type === 'bulleted_list_item') {
      const items = []
      while (i < blocks.length && blocks[i].type === 'bulleted_list_item') { items.push(<Block key={i} block={blocks[i]}/>) ; i++ }
      out.push(<ul key={`ul${i}`} className="bp-ul">{items}</ul>)
    } else if (b.type === 'numbered_list_item') {
      const items = []
      while (i < blocks.length && blocks[i].type === 'numbered_list_item') { items.push(<Block key={i} block={blocks[i]}/>) ; i++ }
      out.push(<ol key={`ol${i}`} className="bp-ol">{items}</ol>)
    } else { out.push(<Block key={i} block={b}/>) ; i++ }
  }
  return out
}

export default function BlogPost() {
  const { slug } = useParams()
  const nav = useNavigate()
  const [post, setPost]       = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError]     = useState(null)

  useEffect(() => {
    window.scrollTo(0,0)
    getPostBySlug(slug)
      .then(d => { if(!d) setError('Artigo não encontrado.'); else setPost(d) })
      .catch(e => setError(e.message))
      .finally(()=>setLoading(false))
  }, [slug])

  if (loading) return (
    <div style={{minHeight:'80vh',display:'flex',alignItems:'center',justifyContent:'center',position:'relative',zIndex:2}}>
      <div className="bp-spinner"/>
    </div>
  )

  if (error || !post) return (
    <div style={{minHeight:'80vh',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',gap:'1.5rem',padding:'4rem var(--sp)',position:'relative',zIndex:2}}>
      <p style={{color:'var(--muted)'}}>{error || 'Artigo não encontrado.'}</p>
      <button className="btn-o" onClick={()=>nav('/blog')}>← Voltar ao blog</button>
    </div>
  )

  const date = new Date(post.publishedAt).toLocaleDateString('pt-BR',{day:'2-digit',month:'long',year:'numeric'})

  return (
    <>
      <SEO
        title={post.title}
        description={post.excerpt||`${post.title} — por Paulinho Siqueira`}
        keywords={post.tags?.join(', ')}
        image={post.cover}
        url={`/blog/${post.slug}`}
        type="article"
        article={{publishedTime:post.publishedAt,tags:post.tags}}
        schema={{
          '@context':'https://schema.org','@type':'Article',
          headline:post.title,description:post.excerpt,image:post.cover,
          datePublished:post.publishedAt,
          author:{'@type':'Person',name:'Paulinho Siqueira',url:'https://institutosiqueira.com.br'},
          publisher:{'@type':'Organization',name:'Instituto Siqueira',url:'https://institutosiqueira.com.br'},
        }}
      />

      <div className="bp-hero" style={{position:'relative',zIndex:2}}>
        {post.cover && <div className="bp-hero-img" style={{backgroundImage:`url(${post.cover})`}}/>}
        <div className="bp-hero-body">
          <button className="bp-back" onClick={()=>nav('/blog')}>← Blog</button>
          <span className="bc-cat" style={{display:'block',marginBottom:'.75rem'}}>{post.category}</span>
          <h1 className="bp-title">{post.title}</h1>
          {post.excerpt && <p className="bp-lead">{post.excerpt}</p>}
          <div className="bp-byline">
            <span>{post.author}</span>
            <span className="bp-sep">·</span>
            <span>{date}</span>
            {post.readTime && <><span className="bp-sep">·</span><span>{post.readTime} min de leitura</span></>}
          </div>
        </div>
      </div>

      <div className="bp-content" style={{position:'relative',zIndex:2}}>
        <div className="bp-inner">
          {post.blocks?.length > 0 ? renderBlocks(post.blocks) : <p className="bp-p" style={{color:'var(--muted)'}}>Conteúdo não disponível.</p>}
          {post.tags?.length > 0 && <div className="bp-tags">{post.tags.map(t=><span key={t} className="bp-tag">{t}</span>)}</div>}
          <div className="bp-share">
            <p>Gostou? Compartilhe com alguém que precisa ler.</p>
            <div className="bp-share-btns">
              <a className="btn-c" href={`https://wa.me/?text=${encodeURIComponent(`${post.title} — institutosiqueira.com.br/blog/${post.slug}`)}`} target="_blank" rel="noopener noreferrer">WhatsApp</a>
              <a className="btn-o" href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://institutosiqueira.com.br/blog/${post.slug}`)}`} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </div>
          <div className="bp-author">
            <div className="bp-author-name">Paulinho Siqueira</div>
            <div className="bp-author-bio">Engenheiro da Mente — especialista em comunicação magnética, PNL e desenvolvimento de líderes. Mais de 20 anos formando profissionais no Brasil, Angola e Filipinas.</div>
            <button className="btn-o" onClick={()=>nav('/contato')} style={{marginTop:'1rem',fontSize:'.65rem'}}>Falar com Paulinho</button>
          </div>
          <div style={{marginTop:'3rem',textAlign:'center'}}>
            <button className="btn-o" onClick={()=>nav('/blog')}>← Ver todos os artigos</button>
          </div>
        </div>
      </div>
    </>
  )
}
