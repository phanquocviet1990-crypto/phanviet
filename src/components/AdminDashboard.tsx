type Props = {
  total: number
}

export default function AdminDashboard({ total }: Props) {
  return (
    <div className="p-8">

      <h2 className="text-4xl font-black text-slate-800 mb-8">
        ADMIN DASHBOARD
      </h2>

      <div className="grid md:grid-cols-3 gap-6">

        {/* CARD */}
        <div className="bg-gradient-to-br from-cyan-500 to-blue-700 rounded-3xl p-6 text-white shadow-2xl">

          <p className="text-lg text-cyan-100">
            Tổng sản phẩm
          </p>

          <h3 className="text-5xl font-black mt-4">
            {total}
          </h3>

        </div>

        {/* CARD */}
        <div className="bg-gradient-to-br from-green-500 to-emerald-700 rounded-3xl p-6 text-white shadow-2xl">

          <p className="text-lg text-green-100">
            Người dùng online
          </p>

          <h3 className="text-5xl font-black mt-4">
            12
          </h3>

        </div>

        {/* CARD */}
        <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-3xl p-6 text-white shadow-2xl">

          <p className="text-lg text-orange-100">
            Lượt truy cập
          </p>

          <h3 className="text-5xl font-black mt-4">
            258
          </h3>

        </div>

      </div>

    </div>
  )
}