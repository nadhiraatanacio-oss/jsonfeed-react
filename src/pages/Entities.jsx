import { useEffect, useState } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Entities() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => {
        setPosts(data.slice(0, 20))
        setLoading(false)
      })
  }, [])

  return (
    <main className="max-w-4xl mx-auto px-6 py-10">
      <h2 className="text-3xl font-bold mb-8 text-white">Entities — Posts</h2>

      {loading ? (
        <p className="text-slate-400">Cargando...</p>
      ) : (
        <div className="flex flex-col gap-3">
          {posts.map(post => (
            <Card key={post.id} className="bg-slate-900 border-slate-800">
              <CardContent className="pt-4 flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <Badge className="bg-blue-600 text-white">ID: {post.id}</Badge>
                  <Badge variant="outline" className="text-slate-400 border-slate-600">
                    User {post.userId}
                  </Badge>
                </div>
                <p className="text-white font-medium capitalize">{post.title}</p>
                <p className="text-slate-400 text-sm">{post.body}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </main>
  )
}