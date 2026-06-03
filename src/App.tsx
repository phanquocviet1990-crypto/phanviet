import Particles from '@tsparticles/react'
import { useEffect, useState, useRef } from 'react'
import { TypeAnimation } from 'react-type-animation'


export default function PhanVietEntertainmentHub() {
  const [time, setTime] = useState(new Date())
const audioRef = useRef<HTMLAudioElement | null>(null)
const [playing, setPlaying] = useState(false)
const [activePage, setActivePage] = useState('Home')
const [showAvatar, setShowAvatar] = useState(false)
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
const toggleMusic = () => {
  if (!audioRef.current) return

  if (playing) {
    audioRef.current.pause()
  } else {
    audioRef.current.play()
  }

  setPlaying(!playing)
}
 const menu = [
  'Home',
  'Music',
  'Chat',
  'Gallery',
  'Games',
  'Mood',
  'Settings',
]

return (
  
  <>
    <audio
      ref={audioRef}
      src="/music/song.mp3"
      loop
    />
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
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
              Entertainment Hub
            </p>
          </div>

          <div className="flex items-center gap-4 mt-5 md:mt-0">
            <div className="bg-black/40 border border-cyan-400/20 px-5 py-3 rounded-2xl text-center">
              <p className="text-gray-400 text-sm">Clock</p>
               {currentDate}
              <h2 className="text-2xl font-bold text-cyan-300">{currentTime}</h2>
            </div>

            <div className="bg-black/40 border border-cyan-400/20 px-5 py-3 rounded-2xl text-center">
              <p className="text-gray-400 text-sm">Weather</p>
              <h2 className="text-2xl font-bold text-blue-300">27°C ☁</h2>
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
          </div>
        </header>

        {/* MAIN */}
        <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr_320px] gap-6 mt-6">

          {/* LEFT SIDEBAR */}
          <aside className="backdrop-blur-xl bg-white/5 border border-cyan-400/20 rounded-3xl p-5 h-fit shadow-xl shadow-cyan-500/10">
            <h2 className="text-xl font-bold text-cyan-300 mb-5">
              Navigation
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
                Today Mood
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
    <p className="text-gray-400">Visitors</p>
    <h2 className="text-3xl font-bold text-cyan-300">12,450</h2>
  </div>

  <div className="bg-white/5 border border-cyan-400/20 rounded-3xl p-5">
    <p className="text-gray-400">Songs</p>
    <h2 className="text-3xl font-bold text-cyan-300">248</h2>
  </div>

  <div className="bg-white/5 border border-cyan-400/20 rounded-3xl p-5">
    <p className="text-gray-400">Projects</p>
    <h2 className="text-3xl font-bold text-cyan-300">18</h2>
  </div>

  <div className="bg-white/5 border border-cyan-400/20 rounded-3xl p-5">
    <p className="text-gray-400">Messages</p>
    <h2 className="text-3xl font-bold text-cyan-300">36</h2>
  </div>
</div>
            <section className="backdrop-blur-xl bg-white/5 border border-cyan-400/20 rounded-[32px] p-8 relative overflow-hidden shadow-2xl shadow-blue-500/10">

              <div className="absolute right-0 top-0 w-72 h-72 bg-cyan-500/10 blur-[100px] rounded-full" />

              <div className="relative z-10">
                <p className="text-cyan-300 uppercase tracking-[5px] text-sm">
                  Personal Space
                </p>

                <h1 className="text-5xl md:text-6xl font-black mt-4 leading-tight">
                  Welcome To
                  <span className="block bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent">
                    Your Entertainment World
                  </span>
                </h1>

                <p className="text-gray-400 max-w-2xl mt-5 text-lg leading-relaxed">
                  Music, chat, gaming, weather, calendar, relaxing vibes and futuristic dashboard — all inside your own personal cyberpunk universe.
                </p>

                <div className="flex flex-wrap gap-4 mt-8">
                  <button className="px-7 py-4 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-600 font-bold shadow-lg shadow-cyan-500/30 hover:scale-105 transition-all duration-300">
                    Start Listening
                  </button>

                  <button className="px-7 py-4 rounded-2xl border border-cyan-400/30 bg-black/40 hover:bg-cyan-500/10 transition-all duration-300">
                    Open Dashboard
                  </button>
                </div>
              </div>
            </section>

            {/* MUSIC PLAYER */}
            <section className="grid md:grid-cols-[280px_1fr] gap-6">

              <div className="backdrop-blur-xl bg-white/5 border border-cyan-400/20 rounded-3xl p-5 shadow-xl shadow-cyan-500/10">
                <div className="aspect-square rounded-3xl bg-gradient-to-br from-cyan-400 to-blue-700 flex items-center justify-center text-7xl font-black shadow-lg shadow-cyan-500/30">
                  ♪
                </div>

                <div className="mt-5">
                  <h3 className="text-2xl font-bold">
                    Midnight Drive
                  </h3>
                  <p className="text-gray-400 mt-1">
                    Synthwave Playlist
                  </p>
                </div>

                <div className="mt-5 h-2 bg-black/40 rounded-full overflow-hidden">
                  <div className="w-2/3 h-full bg-gradient-to-r from-cyan-300 to-blue-500 rounded-full" />
                </div>

                <div className="flex justify-between mt-6">
                  <button className="w-14 h-14 rounded-full bg-black/40 hover:bg-cyan-500/20 border border-cyan-400/20 text-xl">
                    ⏮
                  </button>

                  <button
  onClick={toggleMusic}
  className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 text-2xl shadow-lg shadow-cyan-500/30 hover:scale-110 transition-all duration-300"
>
  {playing ? '⏸' : '▶'}
</button>

                  <button className="w-14 h-14 rounded-full bg-black/40 hover:bg-cyan-500/20 border border-cyan-400/20 text-xl">
                    ⏭
                  </button>
                </div>
              </div>

              {/* FEED */}
              <div className="space-y-6">

                <div className="backdrop-blur-xl bg-white/5 border border-cyan-400/20 rounded-3xl p-6 shadow-xl shadow-blue-500/10">
                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold text-cyan-300">
                      Live Status
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
                      Quick Chat
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
                      Calendar
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
                Weather
              </h2>

              <div className="text-center">
                <div className="text-7xl">
                  ☁
                </div>

                <h3 className="text-5xl font-black mt-4">
                  27°
                </h3>

                <p className="text-gray-400 mt-2">
                  Yen Bai, Vietnam
                </p>
              </div>
            </div>

            <div className="backdrop-blur-xl bg-white/5 border border-cyan-400/20 rounded-3xl p-6 shadow-xl shadow-blue-500/10">
              <h2 className="text-2xl font-bold text-cyan-300 mb-5">
                Notifications
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
                Cyber Mode
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
)}</>
)
}