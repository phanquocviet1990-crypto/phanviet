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
    <div className="min-h-screen bg-gray-100">
      <div className="bg-blue-900 text-white p-8">
        <h1 className="text-4xl font-bold text-center">
          VietAutoPart
        </h1>

        <div className="max-w-2xl mx-auto mt-6">
          <input
            type="text"
            placeholder="Nhập mã phụ tùng..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full p-4 rounded-xl text-black"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6 p-8">
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