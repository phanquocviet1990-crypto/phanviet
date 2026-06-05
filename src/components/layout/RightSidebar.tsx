import WeatherCard from '../weather/WeatherCard'

export default function RightSidebar({
  weather,
  weatherLoading,
}: any) {
  return (
    <aside className="space-y-6">

      <WeatherCard
        weather={weather}
        weatherLoading={weatherLoading}
      />

      <div className="backdrop-blur-xl bg-white/5 border border-cyan-400/20 rounded-3xl p-6">
        <h2 className="text-2xl font-bold text-cyan-300 mb-5">
          Thông báo
        </h2>

        <div className="space-y-4">
          <div className="bg-black/30 p-4 rounded-2xl border border-cyan-400/10">
            🎵 New playlist added
          </div>

          <div className="bg-black/30 p-4 rounded-2xl border border-cyan-400/10">
            🌧 Rain expected tonight
          </div>

          <div className="bg-black/30 p-4 rounded-2xl border border-cyan-400/10">
            💬 2 new messages
          </div>
        </div>
      </div>

      <div className="backdrop-blur-xl bg-gradient-to-br from-cyan-500/20 to-blue-700/20 border border-cyan-400/20 rounded-3xl p-6">
        <h2 className="text-2xl font-bold">
          Chế độ Cyber
        </h2>

        <p className="text-gray-300 mt-3">
          Your futuristic personal entertainment universe is active.
        </p>

        <button className="mt-5 w-full py-4 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-600 font-bold">
          Activate Effects
        </button>
      </div>

    </aside>
  )
}