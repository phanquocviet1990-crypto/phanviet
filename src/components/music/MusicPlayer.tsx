
export default function MusicPlayer(props: any)  {
  const {
    songs,
    currentSong,
    playing,
    toggleMusic,
    nextSong,
    prevSong,
    audioRef,
    volume,
    setVolume,
    currentTimeAudio,
    duration,
    setCurrentTimeAudio,
    formatTime,
  } = props

  return (
<section className="backdrop-blur-xl bg-white/5 border border-cyan-400/20 rounded-3xl p-6 shadow-xl shadow-cyan-500/10">

  <div className="flex flex-col md:flex-row gap-6 items-center">

    <img
  src={songs[currentSong].cover}
  alt="Album"
  className={`w-56 h-56 rounded-full object-cover border-4 border-cyan-400 shadow-[0_0_30px_#00ffff]
  ${playing ? 'animate-spin' : ''}`}
  style={{
    animationDuration: '8s',
  }}
/>

    <div className="flex-1 w-full">

      <p className="text-cyan-300 uppercase tracking-widest">
        Đang phát
      </p>

      <h2 className="text-4xl font-black mt-2">
       {songs[currentSong].title}
      </h2>

      <p className="text-sm text-cyan-400 mt-2 bg-cyan-500/10 px-3 py-2 rounded-xl inline-block">
  ⏭ Tiếp theo: {songs[(currentSong + 1) % songs.length].title}
</p>

{playing && (
  <div className="flex items-end gap-1 mt-4 h-10">
    {[...Array(20)].map((_, i) => (
      <div
        key={i}
        className="w-1 bg-cyan-400 animate-pulse rounded-full"
        style={{
          height: `${20 + Math.random() * 40}px`,
          animationDelay: `${i * 0.1}s`,
        }}
      />
    ))}
  </div>
)}


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
      const time = Number(e.target.value)

      if (audioRef.current) {
        audioRef.current.currentTime = time
      }

      setCurrentTimeAudio(time)
    }}
    className="w-full accent-cyan-400"
  />

</div>






      

        
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
  step="1"
  value={volume}
  onChange={(e) => {
    const newVolume = Number(e.target.value)
    setVolume(newVolume)
  }}
  className="w-full accent-cyan-400"
/>





      </div>

    </div>


</section>
 )
}