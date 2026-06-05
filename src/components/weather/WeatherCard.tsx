export default function WeatherCard({
  weather,
  weatherLoading,
}: any) {
  return (
   <div className="backdrop-blur-xl bg-white/5 border border-cyan-400/20 rounded-3xl p-6 shadow-xl shadow-cyan-500/10">
<h2 className="text-2xl font-bold text-cyan-300 mb-5">
                Thời tiết bây giờ
              </h2>

             <div className="text-center">
  {!weatherLoading && weather ? (
    <>
    <div className="mt-3 inline-block px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-sm">
  {weather.weather[0].main}
</div>
      {/* ICON */}
      <img
        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}
        alt="weather"
        className="mx-auto drop-shadow-[0_0_20px_#00ffff]"
      />

      {/* TEMP */}
      <h3 className="text-5xl font-black text-cyan-300">
        {Math.round(weather.main.temp)}°
      </h3>

      {/* FEELS LIKE */}
      <p className="text-gray-300 mt-2">
        Cảm giác như {Math.round(weather.main.feels_like)}°
      </p>

      {/* DESCRIPTION */}
      <p className="text-cyan-200 mt-2 capitalize">
        {weather.weather[0].description}
      </p>

      {/* STATUS BADGE */}
      <div className="mt-3 inline-block px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-sm">
        {weather.weather[0].main}
      </div>

      {/* LOCATION */}
      <p className="text-gray-400 mt-3">
        📍 {weather.name}, {weather.sys.country}
      </p>

      {/* EXTRA INFO */}
      <div className="mt-5 space-y-2 text-gray-300 text-sm">
        <p>💧 Độ ẩm: {weather.main.humidity}%</p>
        <p>🌬 Tốc độ gió: {weather.wind.speed} m/s</p>
        <p>🌡 Áp suất: {weather.main.pressure} hPa</p>
      </div>
    </>
  ) : (
    <div>
      <div className="animate-pulse text-5xl">⛅</div>
      <p className="mt-4 text-gray-300">Đang tải thời tiết...</p>
    </div>
  )}
</div>
  
            </div>

  )
}