const API = '/api/notion'

export async function getPosts({ pageSize=12, cursor }={}) {
  const p = new URLSearchParams({ pageSize })
  if (cursor) p.set('cursor', cursor)
  const r = await fetch(`${API}/posts?${p}`)
  if (!r.ok) throw new Error('Failed to fetch posts')
  return r.json()
}

export async function getPostBySlug(slug) {
  const r = await fetch(`${API}/posts/${encodeURIComponent(slug)}`)
  if (r.status === 404) return null
  if (!r.ok) throw new Error('Failed to fetch post')
  return r.json()
}

export async function getPostsByCategory(category, { pageSize=12 }={}) {
  const p = new URLSearchParams({ category, pageSize })
  const r = await fetch(`${API}/posts?${p}`)
  if (!r.ok) throw new Error('Failed to fetch posts')
  return r.json()
}
