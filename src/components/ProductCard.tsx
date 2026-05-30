export default function ProductCard({ product }: any) {
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:scale-105 duration-300">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-56 object-cover"
      />

      <div className="p-5">
        <h2 className="text-2xl font-bold text-slate-800">
          {product.name}
        </h2>

        <p className="text-blue-600 mt-2 font-semibold">
          Mã: {product.code}
        </p>

        <p className="text-slate-500 mt-1">
          Danh mục: {product.category}
        </p>

        <div className="mt-5 flex items-center justify-between">
          <span className="text-red-500 text-2xl font-bold">
            {product.price}
          </span>

          <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-xl">
            Xem thêm
          </button>
        </div>
      </div>
    </div>
  )
}