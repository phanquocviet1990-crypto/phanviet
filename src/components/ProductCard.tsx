import { motion } from 'framer-motion'

export default function ProductCard({ product }: any) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="bg-white rounded-3xl overflow-hidden shadow-xl"
    >
      <img
        src={product.image}
        alt={product.name}
        className="h-56 w-full object-cover"
      />

      <div className="p-5">
        <h2 className="text-xl font-bold text-slate-800">
          {product.name}
        </h2>

        <p className="text-blue-600 mt-2 font-semibold">
          {product.code}
        </p>

        <p className="text-slate-500 mt-1">
          {product.category}
        </p>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-red-500 text-xl font-bold">
            {product.price}
          </span>

          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl">
            Xem
          </button>
        </div>
      </div>
    </motion.div>
  )
}