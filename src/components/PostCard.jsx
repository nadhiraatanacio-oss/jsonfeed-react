import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function PostCard({ post }) {
  return (
    <Card className="bg-slate-900/80 border-slate-800 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 group cursor-pointer">
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="text-white text-sm font-semibold leading-snug group-hover:text-blue-300 transition-colors">
            {post.title}
          </CardTitle>
          <Badge className="bg-blue-500/10 text-blue-400 border border-blue-500/20 shrink-0">
            #{post.id}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-slate-400 text-sm leading-relaxed line-clamp-3">{post.body}</p>
        <div className="mt-3 pt-3 border-t border-slate-800 flex items-center justify-between">
          <span className="text-xs text-slate-600">User {post.userId}</span>
          <span className="text-xs text-blue-500 group-hover:text-blue-400 transition-colors">Ver más →</span>
        </div>
      </CardContent>
    </Card>
  )
}