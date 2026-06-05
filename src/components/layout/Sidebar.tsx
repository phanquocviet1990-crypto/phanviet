export default function Sidebar(props: any) {
  const {
    menu,
    activePage,
    setActivePage,
  } = props

  return (
    <aside className="backdrop-blur-xl bg-white/5 border border-cyan-400/20 rounded-3xl p-5 h-fit shadow-xl shadow-cyan-500/10">

      <h2 className="text-xl font-bold text-cyan-300 mb-5">
        Điều hướng
      </h2>

      <div className="space-y-3">
        {menu.map((item: string, index: number) => (
          <button
            key={index}
            onClick={() => setActivePage(item)}
            className={`w-full text-left px-4 py-3 rounded-2xl transition-all duration-300 hover:translate-x-1
            ${
              activePage === item
                ? 'bg-cyan-500/20 border border-cyan-400 text-cyan-300'
                : 'bg-black/30 border border-transparent hover:bg-cyan-500/20 hover:border-cyan-400/40'
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="mt-8 bg-gradient-to-br from-cyan-500/20 to-blue-700/20 rounded-3xl p-5 border border-cyan-400/20">
        <p className="text-sm text-gray-300">
          Tâm trạng hôm nay
        </p>

        <h3 className="text-2xl font-bold mt-2">
          Chill & Focused 😎
        </h3>
      </div>

    </aside>
  )
}