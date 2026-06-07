import { useEffect, useState } from 'react'
import PostCard from '../components/PostCard'

export default function Home() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => {
        setPosts(data.slice(0, 12))
        setLoading(false)
      })
  }, [])

  return (
    <main className="max-w-6xl mx-auto px-6 py-10">
      {/* Hero */}
      <section className="relative text-center mb-16 py-16 rounded-2xl overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 border border-blue-900/40">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-600/10 via-transparent to-transparent" />
        <div className="relative z-10">
          <span className="inline-block px-4 py-1 mb-4 text-xs font-semibold tracking-widest text-blue-400 uppercase bg-blue-500/10 border border-blue-500/20 rounded-full">
            API Pública · JSONPlaceholder
          </span>
          <h1 className="text-6xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            JSONFeed
          </h1>
          <p className="text-slate-400 text-lg max-w-xl mx-auto leading-relaxed">
            Explora publicaciones simuladas consumidas en tiempo real desde la API pública de JSONPlaceholder.
          </p>
          <div className="mt-6 flex justify-center gap-4 text-sm text-slate-500">
            <span className="flex items-center gap-1">📄 100 posts</span>
            <span className="flex items-center gap-1">👤 10 usuarios</span>
            <span className="flex items-center gap-1">⚡ Tiempo real</span>
          </div>
        </div>
      </section>

      {/* Posts */}
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl font-semibold text-white">Publicaciones recientes</h2>
        <span className="text-sm text-slate-500">Mostrando 12 de 100</span>
      </div>

      {loading ? (
        <div className="flex justify-center items-center py-20">
          <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-blue-500" />
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {posts.map(post => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </main>
  )
}