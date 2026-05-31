import { useState, useEffect } from 'react'
import ProductCard from './components/ProductCard'
import AdminDashboard from './components/AdminDashboard'
import { products } from './data/products'

export default function App() {

  // LOGIN STATE
  const [logged, setLogged] = useState(false)

  // MODE
  const [isRegister, setIsRegister] = useState(false)

  // FORM
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  // SEARCH
  const [search, setSearch] = useState('')

  // LOAD LOGIN
  useEffect(() => {
    const saved = localStorage.getItem('logged')

    if (saved === 'true') {
      setLogged(true)
    }
  }, [])

  // LOGIN
  const handleLogin = () => {

    const savedUser = localStorage.getItem('username')
    const savedPass = localStorage.getItem('password')

    if (
      username === savedUser &&
      password === savedPass
    ) {
      setLogged(true)
      localStorage.setItem('logged', 'true')
    } else {
      alert('Sai tài khoản hoặc mật khẩu')
    }
  }

  // REGISTER
  const handleRegister = () => {

    if (!username || !password) {
      alert('Nhập đầy đủ thông tin')
      return
    }

    localStorage.setItem('username', username)
    localStorage.setItem('password', password)

    alert('Đăng ký thành công')

    setIsRegister(false)
  }

  // LOGOUT
  const handleLogout = () => {
    setLogged(false)
    localStorage.removeItem('logged')
  }

  // FILTER
  const filtered = products.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()) ||
    item.code.toLowerCase().includes(search.toLowerCase())
  )

  // AUTH PAGE
  if (!logged) {
    return (
      <div className="min-h-screen relative overflow-hidden bg-black flex items-center justify-center">

        {/* BACKGROUND */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 via-blue-700 to-black"></div>

        <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-cyan-300/30 rounded-full blur-3xl"></div>

        <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] bg-blue-500/30 rounded-full blur-3xl"></div>

        {/* LOGIN CARD */}
        <div className="relative z-10 w-full max-w-md p-4">

          <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-[40px] p-8 shadow-2xl">

            {/* LOGO */}
            <div className="flex justify-center">

              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-cyan-400 to-blue-700 flex items-center justify-center text-white text-4xl font-black shadow-2xl">
                PV
              </div>

            </div>

            {/* TITLE */}
            <h1 className="text-center text-white text-5xl font-black mt-6">
              PHAN VIỆT
            </h1>

            <p className="text-center text-cyan-100 mt-3">
              {isRegister
                ? 'Tạo tài khoản mới'
                : 'Đăng nhập để truy cập hệ thống'}
            </p>

            {/* FORM */}
            <div className="mt-10 space-y-5">

              <input
                type="text"
                placeholder="Tên đăng nhập"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full p-5 rounded-2xl bg-white/20 border border-white/20 text-white placeholder:text-slate-200 outline-none focus:border-cyan-300"
              />

              <input
                type="password"
                placeholder="Mật khẩu"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-5 rounded-2xl bg-white/20 border border-white/20 text-white placeholder:text-slate-200 outline-none focus:border-cyan-300"
              />

              {isRegister ? (
                <button
                  onClick={handleRegister}
                  className="w-full p-5 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-700 text-white text-xl font-black hover:scale-105 transition-all duration-300"
                >
                  Đăng ký
                </button>
              ) : (
                <button
                  onClick={handleLogin}
                  className="w-full p-5 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-700 text-white text-xl font-black hover:scale-105 transition-all duration-300"
                >
                  Đăng nhập
                </button>
              )}

            </div>

            {/* SWITCH */}
            <div className="text-center mt-8">

              {isRegister ? (
                <button
                  onClick={() => setIsRegister(false)}
                  className="text-cyan-200 hover:text-white"
                >
                  Đã có tài khoản? Đăng nhập
                </button>
              ) : (
                <button
                  onClick={() => setIsRegister(true)}
                  className="text-cyan-200 hover:text-white"
                >
                  Chưa có tài khoản? Đăng ký
                </button>
              )}

            </div>

          </div>

        </div>

      </div>
    )
  }

  // WEBSITE
  return (
    <div className="min-h-screen bg-slate-100">

      {/* MENU */}
      <div className="bg-black text-white px-8 py-4 flex justify-between items-center">

        <h1 className="text-3xl font-black text-cyan-400">
          PHAN VIỆT AUTO PART
        </h1>

        <div className="flex gap-6 items-center">
          <button>Trang chủ</button>
          <button>Dashboard</button>
          <button>Sản phẩm</button>
          <button>Liên hệ</button>

          <button
            onClick={handleLogout}
            className="bg-red-500 px-4 py-2 rounded-xl"
          >
            Đăng xuất
          </button>
        </div>
      </div>

      {/* BANNER */}
      <div className="bg-gradient-to-r from-blue-900 to-cyan-600 text-white p-16 text-center">

        <h2 className="text-6xl font-black">
          PHỤ TÙNG Ô TÔ
        </h2>

        <p className="mt-4 text-xl text-blue-100">
          Tra cứu mã phụ tùng nhanh chóng
        </p>

        <div className="max-w-2xl mx-auto mt-10">

          <input
            type="text"
            placeholder="Nhập mã phụ tùng..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full p-5 rounded-2xl text-black text-lg shadow-2xl"
          />

        </div>
      </div>
<AdminDashboard total={products.length} />
      {/* PRODUCTS */}
      <div className="p-8 grid md:grid-cols-3 gap-8">

        {filtered.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}

      </div>

    </div>
  )
}