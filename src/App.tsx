import { useState } from 'react'
import ProductCard from './components/ProductCard'
import { products } from './data/products'

export default function App() {
  const [search, setSearch] = useState('')

  const filtered = products.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()) ||
    item.code.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-slate-100">

      {/* MENU */}
      <div className="bg-black text-white px-8 py-4 flex justify-between items-center">
        <h1 className="text-3xl font-black text-cyan-400">
          VietAutoPart
        </h1>

        <div className="flex gap-6">
          <button>Trang chủ</button>
          <button>Sản phẩm</button>
          <button>Liên hệ</button>
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

      {/* DANH SÁCH */}
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