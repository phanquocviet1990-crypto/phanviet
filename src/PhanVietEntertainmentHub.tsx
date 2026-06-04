import Particles from '@tsparticles/react'
import { useEffect, useState, useRef } from 'react'
import { TypeAnimation } from 'react-type-animation'



export default function PhanVietEntertainmentHub() {
  const [time, setTime] = useState(new Date())
  const [weather, setWeather] = useState<any>(null)
  const [weatherLoading, setWeatherLoading] = useState(true)
const audioRef = useRef<HTMLAudioElement | null>(null)
const [playing, setPlaying] = useState(false)
const songs = [
  {
    title: 'Nhạc 1',
    artist: 'Phan Việt',
    file: '/music/1.mp3',
    cover: '/cover.jpg',
  },
  {
    title: 'Nhạc 2',
    artist: 'Phan Việt',
    file: '/music/2.mp3',
    cover: '/cover2.jpg',
  },
  {
    title: 'Nhạc 3',
    artist: 'Phan Việt',
    file: '/music/3.mp3',
    cover: '/cover3.jpg',
  },
]

const [currentSong, setCurrentSong] = useState(0)
const [activePage, setActivePage] = useState('Home')
const [showAvatar, setShowAvatar] = useState(false)
const [darkMode] = useState(true)
const [volume, setVolume] = useState(70)
const [currentTimeAudio, setCurrentTimeAudio] = useState(0)
const [duration, setDuration] = useState(0)

useEffect(() => {
  if (audioRef.current) {
    audioRef.current.volume = volume / 100
  }
}, [volume])
useEffect(() => {
  const timer = setInterval(() => {
    setTime(new Date())
  }, 1000)

  return () => clearInterval(timer)
}, [])

const currentTime = time.toLocaleTimeString('vi-VN', {
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
})

const currentDate = time.toLocaleDateString('vi-VN')
const toggleMusic = async () => {
  if (!audioRef.current) return

  try {
    if (playing) {
      audioRef.current.pause()
      setPlaying(false)
    } else {
      await audioRef.current.play()
      setPlaying(true)
    }
  } catch (error) {
    console.error(error)
  }
}

const nextSong = async () => {
  const next =
    currentSong === songs.length - 1
      ? 0
      : currentSong + 1

  setCurrentSong(next)

  setTimeout(async () => {
    await audioRef.current?.play()
    setPlaying(true)
  }, 100)
}

const prevSong = async () => {
  const prev =
    currentSong === 0
      ? songs.length - 1
      : currentSong - 1

  setCurrentSong(prev)

  setTimeout(async () => {
    await audioRef.current?.play()
    setPlaying(true)
  }, 100)
}
useEffect(() => {
  const audio = audioRef.current

  if (!audio) return

  const updateTime = () => {
    setCurrentTimeAudio(audio.currentTime)
  }

  const loaded = () => {
    setDuration(audio.duration)
  }

  audio.addEventListener('timeupdate', updateTime)
  audio.addEventListener('loadedmetadata', loaded)

  return () => {
    audio.removeEventListener('timeupdate', updateTime)
    audio.removeEventListener('loadedmetadata', loaded)
  }
}, [currentSong])
useEffect(() => {
  const startMusic = async () => {
    if (!audioRef.current) return

    try {
      await audioRef.current.play()
      setPlaying(true)
    } catch (err) {
      console.log(err)
    }
  }

  document.addEventListener('click', startMusic, {
    once: true,
  })

  return () =>
    document.removeEventListener('click', startMusic)
}, [])
useEffect(() => {
  const API_KEY = 'caff14f27da7fb0684140e139fdec278'

  let intervalId: ReturnType<typeof setInterval> | null = null

  const fetchWeather = async (lat: number, lon: number) => {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&lang=vi&appid=${API_KEY}`
      )

      const data = await res.json()

      if (data.cod === 200) {
        setWeather(data)
        setWeatherLoading(false)
      }
    } catch (err) {
      console.error(err)
      setWeatherLoading(false)
    }
  }

  navigator.geolocation.getCurrentPosition((pos) => {
    const lat = pos.coords.latitude
    const lon = pos.coords.longitude

    setWeatherLoading(true)

    // load lần đầu
    fetchWeather(lat, lon)

    // update mỗi 5 phút
    intervalId = setInterval(() => {
      fetchWeather(lat, lon)
    }, 5 * 60 * 1000)
  })

  return () => {
    if (intervalId) clearInterval(intervalId)
  }
}, [])
 const menu = [
  'Home',
  'Music',
  'Chat',
  'Gallery',
  'Games',
  'Mood',
  'Settings',
] 
const formatTime = (time: number) => {
  const mins = Math.floor(time / 60)
  const secs = Math.floor(time % 60)

  return `${mins}:${secs.toString().padStart(2, '0')}`
}
return (
  
  <>
  <audio
  ref={audioRef}
  src={songs[currentSong].file}
  onEnded={nextSong}
/>
    <div className={`min-h-screen overflow-hidden relative transition-all duration-500 ${darkMode ? "bg-black text-white" : "bg-slate-100 text-slate-900"}`}>
      <Particles
  options={{
    background: {
      color: {
        value: '#000000',
      },
    },
    fpsLimit: 60,
    particles: {
      color: {
        value: '#00ffff',
      },
      links: {
        color: '#00ffff',
        distance: 150,
        enable: true,
        opacity: 0.2,
        width: 1,
      },
      move: {
        enable: true,
        speed: 1,
      },
      number: {
        value: 60,
      },
      opacity: {
        value: 0.3,
      },
      size: {
        value: { min: 1, max: 3 },
      },
    },
  }}
  className="absolute inset-0 z-0"
/>
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-black to-cyan-950 opacity-95" />

      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/20 blur-[140px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-700/20 blur-[120px] rounded-full" />

      {/* CONTENT */}
      <div className="relative z-10 p-5 md:p-8">

        {/* HEADER */}
        <header className="backdrop-blur-xl bg-white/5 border border-cyan-400/20 rounded-3xl p-5 flex flex-col md:flex-row items-center justify-between shadow-2xl shadow-cyan-500/10">

          <div>
            <h1 className="text-4xl font-black tracking-widest bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent">
              PHAN VIỆT
            </h1>
            <p className="text-cyan-300 mt-2">
  <TypeAnimation
    sequence={[
      'Chào mừng đến với website!',
      2000,
      'Rất vui vì bạn đã ghé thăm',
      2000,
      'Chúc bạn vui vẻ!! ^.^',
      2000,
    ]}
    wrapper="span"
    speed={50}
    repeat={Infinity}
  />
</p>
            <p className="text-gray-400 mt-1">
              Mọi thắc mắc liên hệ sđt: 0931.00.1990
            </p>
          </div>

          
            <div className="bg-black/40 border border-cyan-400/20 px-5 py-3 rounded-2xl text-center">
              <p className="text-gray-400 text-sm">ĐỒNG HỒ</p>
               {currentDate}
              <h2 className="text-2xl font-bold text-cyan-300">{currentTime}</h2>
            </div>

            <div className="bg-black/40 border border-cyan-400/20 px-5 py-3 rounded-2xl text-center">
  <p className="text-gray-400 text-sm">TRẠNG THÁI</p>
  <h2 className="text-cyan-300 font-bold">
    Trực tuyến ⚡
  </h2>
</div>

    <div
  onClick={() => setShowAvatar(true)}
  className="w-16 h-16 rounded-full overflow-hidden border-2 border-cyan-400 shadow-[0_0_20px_#00ffff] cursor-pointer"
>
  <img
    src="/avatar.jpg"
    alt="Phan Viet"
    className="w-full h-full object-cover"
  />
          </div>
        </header>

        {/* MAIN */}
        <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr_320px] gap-6 mt-6">

          {/* LEFT SIDEBAR */}
          <aside className="backdrop-blur-xl bg-white/5 border border-cyan-400/20 rounded-3xl p-5 h-fit shadow-xl shadow-cyan-500/10">
            <h2 className="text-xl font-bold text-cyan-300 mb-5">
              Điều hướng
            </h2>

            <div className="space-y-3">
             {menu.map((item, index) => (
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

          {/* CENTER */}
          <main className="space-y-6">

            {/* HERO */}
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
</div><section>
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
                  <button className="px-7 py-4 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-600 font-bold shadow-lg shadow-cyan-500/30 hover:scale-105 transition-all duration-300">
                    Bắt đầu lắng nghe
                  </button>

                  <button className="px-7 py-4 rounded-2xl border border-cyan-400/30 bg-black/40 hover:bg-cyan-500/10 transition-all duration-300">
                   Mở Dashboard
                  </button>
                </div>
              </div>
            </section>

            {/* MUSIC PLAYER PRO */}
<section className="backdrop-blur-xl bg-white/5 border border-cyan-400/20 rounded-3xl p-6 shadow-xl shadow-cyan-500/10">

  <div className="flex flex-col md:flex-row gap-6 items-center">

    <img
      src={songs[currentSong].cover}
      alt="Album"
      className="w-56 h-56 rounded-3xl object-cover border border-cyan-400 shadow-[0_0_30px_#00ffff]"
    />

    <div className="flex-1 w-full">

      <p className="text-cyan-300 uppercase tracking-widest">
        Đang phát
      </p>

      <h2 className="text-4xl font-black mt-2">
       {songs[currentSong].title}
      </h2>

      <p className="text-gray-400 mt-2">
        {songs[currentSong].artist}
      </p>

      {/* Progress */}
      <div className="mt-8">
        <div className="flex justify-between text-sm text-gray-400 mb-2">
          <span>{formatTime(currentTimeAudio)}</span>
<span>{formatTime(duration)}</span>
        </div>

        <input
  type="range"
  min="0"
  max={duration || 0}
  value={currentTimeAudio}
  onChange={(e) => {
    if (audioRef.current) {
      audioRef.current.currentTime = Number(e.target.value)
      setCurrentTimeAudio(Number(e.target.value))
    }
  }}
  className="w-full accent-cyan-400"
/>
      </div>

      {/* Controls */}
      <div className="flex items-center gap-4 mt-8">

       <button
  onClick={prevSong}
  className="w-14 h-14 rounded-full bg-black/40 border border-cyan-400/20 hover:bg-cyan-500/20"
>
  ⏮
</button>

        <button
          onClick={toggleMusic}
          className="w-20 h-20 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 text-3xl font-bold shadow-[0_0_25px_#00ffff] hover:scale-110 transition-all"
        >
          {playing ? '⏸' : '▶'}
        </button>

        <button
  onClick={nextSong}
  className="w-14 h-14 rounded-full bg-black/40 border border-cyan-400/20 hover:bg-cyan-500/20"
>
  ⏭
</button>

      </div>

      {/* Volume */}
      <div className="mt-8">

        <p className="text-gray-400 mb-2">
  Âm lượng: {volume}%
</p>

        <input
  type="range"
  min="0"
  max="100"
  value={volume}
  onChange={(e) => setVolume(Number(e.target.value))}
  className="w-full accent-cyan-400"
/>
      </div>

    </div>

  </div>

</section>
<div className="backdrop-blur-xl bg-white/5 border border-cyan-400/20 rounded-3xl p-6 mt-6">

  <h2 className="text-2xl font-bold text-cyan-300 mb-5">
    Playlist
  </h2>

  <div className="space-y-3">

    {songs.map((song, index) => (
      <button
        key={index}
       onClick={() => {
  setCurrentSong(index)

  setTimeout(async () => {
    await audioRef.current?.play()
    setPlaying(true)
  }, 100)
}}
        className={`w-full flex items-center gap-4 p-3 rounded-2xl transition-all
        ${
          currentSong === index
            ? 'bg-cyan-500/20 border border-cyan-400'
            : 'bg-black/30 hover:bg-cyan-500/10'
        }`}
      >
        <img
          src={song.cover}
          className="w-14 h-14 rounded-xl object-cover"
        />

        <div className="text-left">
          <h3 className="font-bold">
            {song.title}
          </h3>

          <p className="text-sm text-gray-400">
            {song.artist}
          </p>
        </div>

      </button>
    ))}

  </div>

</div>
              {/* FEED */}
              <div className="space-y-6">

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

                <div className="grid md:grid-cols-2 gap-6">

                  <div className="backdrop-blur-xl bg-white/5 border border-cyan-400/20 rounded-3xl p-6 shadow-xl shadow-cyan-500/10">
                    <h3 className="text-xl font-bold text-cyan-300 mb-4">
                      Trò chuyện nhanh
                    </h3>

                    <div className="space-y-3">
                      <div className="bg-cyan-500/20 p-3 rounded-2xl w-fit max-w-[80%]">
                        Yo bro 😎
                      </div>

                      <div className="bg-black/40 p-3 rounded-2xl ml-auto w-fit max-w-[80%]">
                        Website looking fire 🔥
                      </div>
                    </div>

                    <div className="mt-5 flex gap-3">
                      <input
                        placeholder="Type a message..."
                        className="flex-1 bg-black/40 border border-cyan-400/20 rounded-2xl px-4 py-3 outline-none"
                      />

                      <button className="px-5 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-600 font-bold">
                        Send
                      </button>
                    </div>
                  </div>

                  <div className="backdrop-blur-xl bg-white/5 border border-cyan-400/20 rounded-3xl p-6 shadow-xl shadow-blue-500/10">
                    <h3 className="text-xl font-bold text-cyan-300 mb-4">
                      Lịch
                    </h3>

                    <div className="grid grid-cols-7 gap-2 text-center text-sm">
                      {Array.from({ length: 35 }).map((_, i) => (
                        <div
                          key={i}
                          className={`aspect-square rounded-xl flex items-center justify-center ${
                            i === 17
                              ? 'bg-gradient-to-r from-cyan-400 to-blue-600 font-bold'
                              : 'bg-black/30'
                          }`}
                        >
                          {i + 1 <= 31 ? i + 1 : ''}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>

          {/* RIGHT SIDEBAR */}
          <aside className="space-y-6">

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

            <div className="backdrop-blur-xl bg-white/5 border border-cyan-400/20 rounded-3xl p-6 shadow-xl shadow-blue-500/10">
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

            <div className="backdrop-blur-xl bg-gradient-to-br from-cyan-500/20 to-blue-700/20 border border-cyan-400/20 rounded-3xl p-6 shadow-xl shadow-cyan-500/10">
              <h2 className="text-2xl font-bold">
                Chế độ Cyber
              </h2>

              <p className="text-gray-300 mt-3 leading-relaxed">
                Your futuristic personal entertainment universe is active.
              </p>

              <button className="mt-5 w-full py-4 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-600 font-bold shadow-lg shadow-cyan-500/30 hover:scale-105 transition-all duration-300">
                Activate Effects
              </button>
            </div>
          </aside>
        </div>
      </div>
  </div>
  {showAvatar && (
  <div
    onClick={() => setShowAvatar(false)}
    className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50"
  >
    <div className="relative">
      <img
        src="/avatar.jpg"
        alt="Phan Viet"
        className="max-w-[90vw] max-h-[90vh] rounded-3xl border-2 border-cyan-400 shadow-[0_0_40px_#00ffff]"
      />

      <button
        onClick={() => setShowAvatar(false)}
        className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-red-500 text-white font-bold"
      >
        ✕
      </button>
    </div>
  </div>
)
}</>
)
}