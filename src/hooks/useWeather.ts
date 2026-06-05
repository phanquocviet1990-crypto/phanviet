import { useEffect, useState } from 'react'

export default function useWeather() {
  const [weather, setWeather] = useState<any>(null)
  const [weatherLoading, setWeatherLoading] = useState(true)

  useEffect(() => {
    const API_KEY = 'caff14f27da7fb0684140e139fdec278'

    let intervalId: ReturnType<typeof setInterval> | null = null

    const fetchWeather = async (
      lat: number,
      lon: number
    ) => {
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

      fetchWeather(lat, lon)

      intervalId = setInterval(() => {
        fetchWeather(lat, lon)
      }, 5 * 60 * 1000)
    })

    return () => {
      if (intervalId) clearInterval(intervalId)
    }
  }, [])

  return {
    weather,
    weatherLoading,
  }
}