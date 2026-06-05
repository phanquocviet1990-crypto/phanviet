type SongListProps = {
  songs: any[]
  currentSong: number
  playing: boolean
  setCurrentSong: (index: number) => void
  audioRef: any
  setPlaying: (playing: boolean) => void
}

export default function SongList({
  songs,
  currentSong,
  playing,
  setCurrentSong,
  audioRef,
  setPlaying,
}: SongListProps) {
  return (
    <div>
    <div className="backdrop-blur-xl bg-white/5 border border-cyan-400/20 rounded-3xl p-6 mt-6">

  <div className="flex justify-between items-center mb-5">
 <div className="flex justify-between items-center mb-5">

  <div>
    <h2 className="text-2xl font-bold text-cyan-300">
      🎵 Danh Sách Nhạc
    </h2>

    <p className="text-gray-400 text-sm">
      {songs.length} bài hát
    </p>
  </div>

  <div className="text-cyan-400">
    ▶ Đang phát
  </div>

</div>

  <span className="text-gray-400 text-sm">
    {songs.length} bài hát
  </span>
</div>

  <div className="space-y-3 max-h-[500px] overflow-y-auto pr-2">

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
        className={`w-full flex items-center gap-4 p-3 rounded-2xl transition-all duration-300 hover:scale-[1.02] hover:translate-x-1
        ${
          currentSong === index
            ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400 shadow-[0_0_20px_#00ffff]'
            : 'bg-black/30 hover:bg-cyan-500/10'
        }`}
      >
        <div className="text-cyan-400 font-bold w-8">
  {(index + 1).toString().padStart(2, '0')}
</div>
        <img
          src={song.cover}
          className="w-14 h-14 rounded-xl object-cover"
        />

       <div className="text-left flex-1">

  <div className="flex items-center gap-2">

    <h3 className="font-bold">
      {song.title}
    </h3>

    {currentSong === index && playing && (
      <span className="text-green-400 animate-pulse">
        🎵
      </span>
    )}

  </div>

  <p className="text-sm text-gray-400">
    {song.artist}
  </p>

</div>

      </button>
    ))}

  </div>

</div>
    </div>
  )
}