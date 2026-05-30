export default function ProductCard({ product }: any) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-52 object-cover"
      />

      <div className="p-4">
        <h2 className="text-xl font-bold">
          {product.name}
        </h2>

        <p className="text-blue-600 mt-2">
          {product.code}
        </p>

        <p className="text-gray-500">
          {product.category}
        </p>

        <p className="text-red-500 font-bold mt-3">
          {product.price}
        </p>
      </div>
    </div>
  )
}