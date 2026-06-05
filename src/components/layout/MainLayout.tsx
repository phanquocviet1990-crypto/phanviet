import Sidebar from './Sidebar'
import HeroSection from '../home/HeroSection'
import MusicPlayer from '../music/MusicPlayer'
import SongList from '../music/SongList'
import LiveStatus from '../dashboard/LiveStatus'
import QuickChat from '../dashboard/QuickChat'
import RightSidebar from './RightSidebar'

import { menu } from '../../data/menu'
import { songs } from '../../data/songs'

export default function MainLayout({
  activePage,
  setActivePage,
  weather,
  weatherLoading,
  music,
}: any) {
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
    formatTime,
  } = music

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr_320px] gap-6 mt-6">

      {/* LEFT SIDEBAR */}
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

        <div className="space-y-6">
          <LiveStatus />

          <div className="grid md:grid-cols-2 gap-6">
            <QuickChat />

            <div className="backdrop-blur-xl bg-white/5 border border-cyan-400/20 rounded-3xl p-6">
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

      </main>

      {/* RIGHT */}
      <RightSidebar
        weather={weather}
        weatherLoading={weatherLoading}
      />

    </div>
  )
}