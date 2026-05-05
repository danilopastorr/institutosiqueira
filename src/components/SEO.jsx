import { Helmet } from 'react-helmet-async'

const BASE = 'https://institutosiqueira.com.br'

export default function SEO({ title, description, keywords, url = '/', type = 'website', article, schema }) {
  const fullTitle = title
    ? `${title} | Instituto Siqueira`
    : 'Instituto Siqueira — Programas Corporativos de Comunicação e Liderança'

  const fullDesc = description ||
    'Paulinho Siqueira — Engenheiro da Mente. Programas de desenvolvimento corporativo: comunicação magnética, neuroliderança e cultura organizacional para empresas.'

  const fullKw = keywords ||
    'programas desenvolvimento corporativo, comunicação corporativa, liderança empresarial, treinamento equipe, coaching executivo São Paulo, comunicação magnética, neuroeducação, PNL empresarial'

  const fullUrl   = `${BASE}${url}`
  const fullImage = `${BASE}/og-cover.jpg`

  const personSchema = {
    '@context':'https://schema.org','@type':'Person',
    name:'Paulinho Siqueira', jobTitle:'Trainer Corporativo de Comunicação e Liderança',
    url: BASE,
    sameAs:['https://instagram.com/engenheirodamente'],
    worksFor:{ '@type':'Organization', name:'Instituto Siqueira', url:BASE },
  }

  const bizSchema = {
    '@context':'https://schema.org','@type':'LocalBusiness','@id':`${BASE}/#org`,
    name:'Instituto Siqueira', url:BASE,
    telephone:'+55-11-92092-6873',
    address:{ '@type':'PostalAddress', addressLocality:'São Paulo', addressRegion:'SP', addressCountry:'BR' },
  }

  const schemas = [personSchema, bizSchema]
  if (schema) schemas.push(schema)

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={fullDesc} />
      <meta name="keywords" content={fullKw} />
      <link rel="canonical" href={fullUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDesc} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:locale" content="pt_BR" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDesc} />
      <meta name="twitter:image" content={fullImage} />
      {article?.publishedTime && <meta property="article:published_time" content={article.publishedTime} />}
      {article?.tags?.map(t => <meta key={t} property="article:tag" content={t} />)}
      {schemas.map((s,i) => (
        <script key={i} type="application/ld+json">{JSON.stringify(s)}</script>
      ))}
    </Helmet>
  )
}
