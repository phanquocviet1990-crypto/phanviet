import Particles from '@tsparticles/react'
import { useEffect, useState } from 'react'
import MusicPlayer from './components/music/MusicPlayer'
import WeatherCard from './components/weather/WeatherCard'
import AvatarModal from './components/ui/AvatarModal'
import SongList from './components/music/SongList'
import useWeather from './hooks/useWeather'
import useMusicPlayer from './hooks/useMusicPlayer'
import { songs } from './data/songs'
import { menu } from './data/menu'
import Header from './components/layout/Header'
import Sidebar from './components/layout/Sidebar'
import HeroSection from './components/home/HeroSection'
import LiveStatus from './components/dashboard/LiveStatus'
import QuickChat from './components/dashboard/QuickChat'



export default function PhanVietEntertainmentHub() {
  const [time, setTime] = useState(new Date())
  const [activePage, setActivePage] = useState('Home')
  const [showAvatar, setShowAvatar] = useState(false)
  const [darkMode] = useState(true)
  const {
    weather,
    weatherLoading,
  } = useWeather()



  const {
    audioRef,
    playing,
    setPlaying,
    currentSong,
    setCurrentSong,
    volume,
    setVolume,
    currentTimeAudio,
    setCurrentTimeAudio,
    duration,
    toggleMusic,
    nextSong,
    prevSong,
  } = useMusicPlayer(songs)




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

          <Header
            currentDate={currentDate}
            currentTime={currentTime}
            setShowAvatar={setShowAvatar}
          />


          {/* MAIN */}
          <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr_320px] gap-6 mt-6">


            <Sidebar
              menu={menu}
              activePage={activePage}
              setActivePage={setActivePage}
            />

            {/* CENTER */}
            <main className="space-y-6">


              <HeroSection />







              <MusicPlayer
                songs={songs}
                currentSong={currentSong}
                playing={playing}
                toggleMusic={toggleMusic}
                nextSong={nextSong}
                prevSong={prevSong}
                audioRef={audioRef}
                volume={volume}
                setVolume={setVolume}
                currentTimeAudio={currentTimeAudio}
                duration={duration}
                setCurrentTimeAudio={setCurrentTimeAudio}
                formatTime={formatTime}
              />




              <SongList
                songs={songs}
                currentSong={currentSong}
                playing={playing}
                setCurrentSong={setCurrentSong}
                audioRef={audioRef}
                setPlaying={setPlaying}
              />





              {/* FEED */}
              <div className="space-y-6">


<LiveStatus />

                
                <div className="grid md:grid-cols-2 gap-6">

    <QuickChat />
                
                  <div className="backdrop-blur-xl bg-white/5 border border-cyan-400/20 rounded-3xl p-6 shadow-xl shadow-blue-500/10">
                    <h3 className="text-xl font-bold text-cyan-300 mb-4">
                      Lịch
                    </h3>

                    <div className="grid grid-cols-7 gap-2 text-center text-sm">
                      {Array.from({ length: 35 }).map((_, i) => (
                        <div
                          key={i}
                          className={`aspect-square rounded-xl flex items-center justify-center ${i === 17
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
            </main>

            {/* RIGHT SIDEBAR */}
            <aside className="space-y-6">

              <WeatherCard
                weather={weather}
                weatherLoading={weatherLoading}
              />


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
    </div >

      <AvatarModal
        showAvatar={showAvatar}
        setShowAvatar={setShowAvatar}
      />
  </>
)
}