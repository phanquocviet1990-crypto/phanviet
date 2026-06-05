import { useEffect, useRef, useState } from 'react'

export default function useMusicPlayer(songs: any[]) {
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const [playing, setPlaying] = useState(false)
  const [currentSong, setCurrentSong] = useState(0)
  const [volume, setVolume] = useState(70)

  const [currentTimeAudio, setCurrentTimeAudio] =
    useState(0)

  const [duration, setDuration] = useState(0)


useEffect(() => {
  const audio = audioRef.current

  if (!audio) return

  audio.volume = volume / 100

  console.log(
    'Volume set:',
    volume,
    '=>',
    audio.volume
  )
}, [volume])


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
    audio.removeEventListener(
      'timeupdate',
      updateTime
    )

    audio.removeEventListener(
      'loadedmetadata',
      loaded
    )
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

  return () => {
    document.removeEventListener(
      'click',
      startMusic
    )
  }
}, [])





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





  return {
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
    setDuration,
    nextSong,
    prevSong,
    toggleMusic,
  }
}