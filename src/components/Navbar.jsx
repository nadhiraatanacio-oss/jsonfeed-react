import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="bg-slate-900 border-b border-slate-800 px-6 py-4 flex gap-6 items-center">
      <span className="font-bold text-lg text-white">JSONFeed</span>
      <Link to="/" className="text-slate-300 hover:text-white transition-colors">Home</Link>
      <Link to="/entities" className="text-slate-300 hover:text-white transition-colors">Entities</Link>
    </nav>
  )
}