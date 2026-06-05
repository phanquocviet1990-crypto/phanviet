export default function LiveStatus() {
  return (
    <div className="backdrop-blur-xl bg-white/5 border border-cyan-400/20 rounded-3xl p-6 shadow-xl shadow-blue-500/10">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-cyan-300">
          Trạng thái trực tiếp
        </h2>

        <div className="px-4 py-2 rounded-full bg-green-500/20 border border-green-400/20 text-green-300 text-sm">
          Online
        </div>
      </div>

      <div className="mt-5 space-y-4">
        <div className="bg-black/30 rounded-2xl p-4 border border-cyan-400/10">
          <p className="text-gray-300 leading-relaxed">
            🌌 Late night coding + chill synthwave music.
          </p>
        </div>

        <div className="bg-black/30 rounded-2xl p-4 border border-cyan-400/10">
          <p className="text-gray-300 leading-relaxed">
            🚗 Future project: build the coolest entertainment website in Vietnam.
          </p>
        </div>
      </div>
    </div>
  )
}