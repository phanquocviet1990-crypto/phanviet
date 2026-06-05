export default function HeroSection() {
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white/5 border border-cyan-400/20 rounded-3xl p-5">
          <p className="text-gray-400">Lượt truy cập</p>
          <h2 className="text-3xl font-bold text-cyan-300">12,450</h2>
        </div>

        <div className="bg-white/5 border border-cyan-400/20 rounded-3xl p-5">
          <p className="text-gray-400">Bài hát</p>
          <h2 className="text-3xl font-bold text-cyan-300">248</h2>
        </div>

        <div className="bg-white/5 border border-cyan-400/20 rounded-3xl p-5">
          <p className="text-gray-400">Dự án</p>
          <h2 className="text-3xl font-bold text-cyan-300">18</h2>
        </div>

        <div className="bg-white/5 border border-cyan-400/20 rounded-3xl p-5">
          <p className="text-gray-400">Tin nhắn</p>
          <h2 className="text-3xl font-bold text-cyan-300">36</h2>
        </div>
      </div>

      <section className="backdrop-blur-xl bg-white/5 border border-cyan-400/20 rounded-[32px] p-8 relative overflow-hidden shadow-2xl shadow-blue-500/10">

        <div className="absolute right-0 top-0 w-72 h-72 bg-cyan-500/10 blur-[100px] rounded-full" />

        <div className="relative z-10">
          <p className="text-cyan-300 uppercase tracking-[5px] text-sm">
            Không gian cá nhân
          </p>

          <h1 className="text-5xl md:text-6xl font-black mt-4 leading-tight">
            Chào Mừng
            <span className="block bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent">
              Đến với website của Việt
            </span>
          </h1>

          <p className="text-gray-400 max-w-2xl mt-5 text-lg leading-relaxed">
            Hãy cùng chill nhé!
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <button className="px-7 py-4 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-600 font-bold">
              Bắt đầu lắng nghe
            </button>

            <button className="px-7 py-4 rounded-2xl border border-cyan-400/30 bg-black/40">
              Mở Dashboard
            </button>
          </div>
        </div>

      </section>
    </>
  )
}