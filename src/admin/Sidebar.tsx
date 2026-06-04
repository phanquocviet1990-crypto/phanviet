export default function Sidebar({ setPage }: any) {
  return (
    <div className="w-64 bg-black/40 border-r border-cyan-500/20 p-5">
      <h1 className="text-xl font-bold text-cyan-300 mb-6">
        ADMIN PANEL
      </h1>

      <button onClick={() => setPage("home")} className="block w-full text-left py-2 hover:text-cyan-300">
        📊 Dashboard
      </button>

      <button onClick={() => setPage("posts")} className="block w-full text-left py-2 hover:text-cyan-300">
        📝 Posts
      </button>

      <button onClick={() => setPage("users")} className="block w-full text-left py-2 hover:text-cyan-300">
        👤 Users
      </button>
    </div>
  )
}